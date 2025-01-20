#//20250119 UPDATES FOR TRAINING PURPOSES
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import numpy as np
from pypfopt import EfficientFrontier, expected_returns, risk_models, DiscreteAllocation
from pypfopt.risk_models import CovarianceShrinkage
import os

# Initialize FastAPI app
app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dynamically calculate the base path for portability
base_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")

# File paths
prices_path = os.path.join(base_path, "pyportfolioopt_assets_combined.csv")

# Ensure the file exists before proceeding
if not os.path.exists(prices_path):
    raise FileNotFoundError(f"File not found: {prices_path}")


# Load data
if not os.path.exists(prices_path):
    raise FileNotFoundError(f"File not found: {prices_path}")
prices = pd.read_csv(prices_path, parse_dates=["date"]).pivot(
    index="date", columns="ticker", values="adjusted_close"
).dropna()

exp_returns = expected_returns.mean_historical_return(prices)
cov_matrix = CovarianceShrinkage(prices).ledoit_wolf()

# Efficient Frontier with Tangency Portfolio
@app.get("/efficient-frontier")
def efficient_frontier():
    ef = EfficientFrontier(exp_returns, cov_matrix)
    risks, returns = [], []

    # Generate Efficient Frontier points
    for risk in np.linspace(0.01, 0.5, 50):
        try:
            ef.efficient_risk(risk)
            perf = ef.portfolio_performance()
            risks.append(perf[1])  # Risk (Standard Deviation)
            returns.append(perf[0])  # Expected Return
        except Exception as e:
            print(f"Error generating efficient frontier point: {e}")

    # Tangency Portfolio calculation
    try:
        ef = EfficientFrontier(exp_returns, cov_matrix)  # Reinitialize to avoid state reuse
        ef.max_sharpe()  # Maximize Sharpe Ratio
        tangency_perf = ef.portfolio_performance()  # [Expected Return, Risk, Sharpe Ratio]

        tangency_point = {
            "x": [tangency_perf[1]],  # Risk (Standard Deviation)
            "y": [tangency_perf[0]],  # Expected Return
            "type": "scatter",
            "mode": "markers",
            "name": "Tangency Portfolio",
            "marker": {"size": 12, "color": "red", "symbol": "star"},
        }

        tangency_line_x = np.linspace(0, max(risks) * 1.2, 100)
        tangency_line_y = (tangency_perf[0] / tangency_perf[1]) * tangency_line_x  # Capital Market Line (CML)

        tangency_line = {
            "x": tangency_line_x.tolist(),
            "y": tangency_line_y.tolist(),
            "type": "scatter",
            "mode": "lines",
            "name": "Tangency Line (CML)",
            "line": {"dash": "dash", "color": "blue"},
        }
    except Exception as e:
        print(f"Error calculating Tangency Portfolio: {e}")
        tangency_point, tangency_line = None, None

    # Response data
    data = [
        {
            "x": risks,
            "y": returns,
            "type": "scatter",
            "mode": "lines",
            "name": "Efficient Frontier",
            "line": {"color": "green"},
        }
    ]
    if tangency_point:
        data.append(tangency_point)
    if tangency_line:
        data.append(tangency_line)

    return {
        "data": data,
        "layout": {
            "title": "'Sweet Spot' Portfolio Analysis",
            "xaxis": {"title": "Risk (σ)", "range": [0, max(risks) * 1.2]},
            "yaxis": {"title": "Expected Return (μ)", "range": [0, max(returns) * 1.2]},
            "legend": {"orientation": "h", "yanchor": "bottom", "y": 1.02, "xanchor": "right", "x": 1},
        },
    }

# Portfolio Allocation
@app.get("/portfolio-allocation")
def portfolio_allocation(portfolio_value: float = 1000000):
    ef = EfficientFrontier(exp_returns, cov_matrix)
    ef.min_volatility()
    weights = ef.clean_weights()
    latest_prices = prices.iloc[-1]
    da = DiscreteAllocation(weights, latest_prices, total_portfolio_value=portfolio_value)
    allocation, leftover = da.greedy_portfolio()
    return {
        "data": [{"labels": list(allocation.keys()), "values": list(allocation.values()), "type": "pie"}],
        "layout": {"title": f"Portfolio Allocation (Leftover: ${leftover:.2f})"},
    }

# Tangency Portfolio
@app.get("/tangency-portfolio")
def tangency_portfolio():
    ef = EfficientFrontier(exp_returns, cov_matrix)
    ef.max_sharpe()
    tangency_weights = ef.clean_weights()
    return {
        "data": [{"labels": list(tangency_weights.keys()), "values": list(tangency_weights.values()), "type": "bar"}],
        "layout": {"title": "Tangency Portfolio"},
    }

# Asset Scatter Plot
@app.get("/scatter-plot")
def scatter_plot():
    volatilities = np.sqrt(np.diag(cov_matrix))
    return {
        "data": [
            {
                "x": volatilities.tolist(),
                "y": exp_returns.tolist(),
                "mode": "markers",
                "text": prices.columns.tolist(),
                "type": "scatter",
            }
        ],
        "layout": {"title": "Asset Scatter Plot", "xaxis": {"title": "Risk"}, "yaxis": {"title": "Return"}},
    }

# Ledoit-Wolf Correlation Matrix
@app.get("/ledoit-wolf")
def ledoit_wolf():
    correlation_matrix = pd.DataFrame(cov_matrix).corr()
    return {
        "data": [
            {
                "z": correlation_matrix.values.tolist(),
                "x": correlation_matrix.columns.tolist(),
                "y": correlation_matrix.index.tolist(),
                "type": "heatmap",
            }
        ],
        "layout": {"title": "Ledoit-Wolf Correlation Matrix"},
    }

# Expected Returns
@app.get("/expected-returns")
def expected_returns_plot():
    return {
        "data": [{"x": exp_returns.index.tolist(), "y": exp_returns.tolist(), "type": "bar", "name": "Expected Returns"}],
        "layout": {"title": "Expected Returns"},
    }

# Minimize Variance
@app.get("/minimizing-variance")
def minimizing_variance():
    ef = EfficientFrontier(exp_returns, cov_matrix)
    ef.min_volatility()  # Minimize portfolio volatility
    weights = ef.clean_weights()
    
    return {
        "data": [
            {
                "x": list(weights.values()),  # Weights (Values)
                "y": list(weights.keys()),  # Asset names (Labels)
                "type": "bar",
                "orientation": "h",  # Horizontal bar chart
                "marker": {"color": "purple"},  # Bar color
            }
        ],
        "layout": {
            "title": "Global Minimum Variance Portfolio",
            "xaxis": {"title": "Weight"},  # X-axis label
            "yaxis": {"title": "Assets"},  # Y-axis label
            "legend": {"orientation": "h", "yanchor": "bottom", "y": 1.1, "xanchor": "center", "x": 0.5},  # Legend at the top
        },
    }

# Discrete Allocation
@app.get("/discrete-allocation")
def discrete_allocation(portfolio_value: float = 1000000):
    ef = EfficientFrontier(exp_returns, cov_matrix)
    ef.max_sharpe()
    weights = ef.clean_weights()
    latest_prices = prices.iloc[-1]
    da = DiscreteAllocation(weights, latest_prices, total_portfolio_value=portfolio_value)
    allocation, leftover = da.greedy_portfolio()
    return {
        "data": [{"labels": list(allocation.keys()), "values": list(allocation.values()), "type": "pie"}],
        "layout": {"title": f"Discrete Allocation (Leftover: ${leftover:.2f})"},
    }





######################TEST#####################
