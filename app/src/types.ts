// Types for Efficient Frontier API response
export interface FrontierData {
    risks: number[];
    returns: number[];
    tangency_point: Record<string, number>;
    tangency_perf: {
      expected_return: number;
      volatility: number;
      sharpe_ratio: number;
    };
  }
  
  // Types for Scatter Plot API response
  export interface ScatterPlotData {
    assets: string[];
    risks: number[];
    returns: number[];
  }
  
  // Types for Allocation API response
  export interface AllocationData {
    allocation: Record<string, number>;
    leftover: number;
  }
  