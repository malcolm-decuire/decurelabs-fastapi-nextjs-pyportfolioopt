// //20250119 UPDATES 
// "use client";
// import { Icon } from "@iconify/react";
// import { Accordion, AccordionItem } from "@heroui/react";

// export default function Home() {
//   // Define a single card-like wrapper
//   function Card({ children }) {
//     return (
//       <div className="w-full max-w-md mx-auto bg-black border border-purple-700 rounded-lg shadow-md p-2 text-purple-400">
//         {children}
//       </div>
//     );
//   }

//   // Global classes for the Accordion items, all left-aligned
//   const itemClasses = {
//     base: "py-0 w-full text-left", // ensures the item's container is left-aligned
//     title: "font-normal text-purple-300 text-base text-left",
//     trigger:
//       "px-2 py-2 hover:bg-[#1a1a1a] rounded-lg flex items-start justify-start gap-2 text-left",
//     indicator: "ml-auto text-purple-500", // arrow/indicator to the far right
//     content: "text-sm px-2 text-purple-200 text-left",
//     subtitle: "text-left text-purple-500 text-sm",
//   };

//   const defaultContent =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";

//   // If you only want to horizontally center the card, keep 'mx-auto' on <Card>.
//   // If you want it pinned to the left, remove 'mx-auto'.
//   return (
//     <main className="bg-black py-2 w-full text-left">
//       <Card>
//         <h2 className="text-lg font-semibold mb-2 text-purple-400 text-left">
//           Overview
//         </h2>

//         <Accordion
//           className="flex flex-col gap-1 w-full"
//           itemClasses={itemClasses}
//           showDivider={false}
//           variant="shadow"
//         >
//           <AccordionItem
//             key="1"
//             aria-label="Connected devices"
//             startContent={
//               <Icon icon="carbon:finance" className="text-purple-400 text-2xl" />
//             }
//             title="FINANCIAL DATA SCIENCE"
//             subtitle={
//               <p className="text-sm text-purple-500 text-left">
//                 2 issues to <span className="ml-1 text-purple-400">fix now</span>
//               </p>
//             }
//           >
//             {defaultContent}
//           </AccordionItem>

//           <AccordionItem
//             key="2"
//             aria-label="Apps Permissions"
//             startContent={
//               <Icon icon="dashicons:portfolio" className="text-purple-400 text-2xl" />
//             }
//             title="Apps Permissions"
//             subtitle={
//               <p className="text-sm text-purple-500 text-left">
//                 3 apps have read permissions
//               </p>
//             }
//           >
//             {defaultContent}
//           </AccordionItem>

//           <AccordionItem
//             key="3"
//             aria-label="Pending tasks"
//             startContent={
//               <Icon
//                 icon="fluent:math-formula-16-filled"
//                 className="text-purple-400 text-2xl"
//               />
//             }
//             title="Pending tasks"
//             subtitle={
//               <p className="text-purple-500 text-left">Complete your profile</p>
//             }
//           >
//             {defaultContent}
//           </AccordionItem>

//           <AccordionItem
//             key="4"
//             aria-label="Card expired"
//             startContent={
//               <Icon
//                 icon="solar:calculator-outline"
//                 className="text-purple-400 text-2xl"
//               />
//             }
//             title={
//               <p className="flex gap-1 items-start text-left">
//                 Card expired
//                 <span className="text-purple-600 text-sm">*4812</span>
//               </p>
//             }
//             subtitle={
//               <p className="text-purple-500 text-left">Please, update now</p>
//             }
//           >
//             {defaultContent}
//           </AccordionItem>

//           <AccordionItem
//             key="5"
//             aria-label="Analytics"
//             startContent={
//               <Icon icon="uil:chart-pie" className="text-purple-400 text-2xl" />
//             }
//             title="Analytics"
//             subtitle={
//               <p className="text-purple-500 text-left">Get insights</p>
//             }
//           >
//             {defaultContent}
//           </AccordionItem>
//         </Accordion>
//       </Card>
//     </main>
//   );
// }


"use client";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem } from "@heroui/react";

// Define the type for accordion content
type AccordionContent = {
  key: string;
  title: string;
  subtitle: string;
  icon: string;
  content: string;
};

export default function Home() {
  // Define a single card-like wrapper
  function Card({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-full max-w-md mx-auto bg-black border border-purple-700 rounded-lg shadow-md p-2 text-purple-400">
        {children}
      </div>
    );
  }

  // Global classes for the Accordion items, all left-aligned
  const itemClasses = {
    base: "py-0 w-full text-left",
    title: "font-normal text-purple-300 text-base text-left",
    trigger: "px-2 py-2 hover:bg-[#1a1a1a] rounded-lg flex items-start justify-start gap-2 text-left",
    indicator: "ml-auto text-purple-500",
    content: "text-sm px-2 text-purple-200 text-left",
    subtitle: "text-left text-purple-500 text-sm",
  };

  // Accordion content with bullet list handling
  const accordionContent: AccordionContent[] = [
    {
      key: "1",
      title: "Python Inspirations",
      subtitle: "Context & Key Motivators",
      icon: "akar-icons:python-fill",
      content: `
      - 💭 Context: What if an investment team of adtech & real estate professionals leveraged their experience into trading?
      - 👏 That team could leverage tools like Yahoo Finance, EODHD, and PyPortfolioOpt for analysis
        
      Fundamental Data in Action
      Portfolio Diversification
      - Reason: Tickers like PLD (Prologis, real estate) and IAS (Integral Ad Science, advertising tech) belong to different sectors.
      
      PyPortfolioOpt Benefit: Calculates optimal weights for each ticker to maximize diversification and minimize risk.
      
      Efficient Frontier Analysis
      - Reason: Identifying combinations of assets that yield the highest return for a given level of risk is crucial for decision-making.
      
      PyPortfolioOpt Benefit: Generates the efficient frontier, showing the best risk-return trade-offs for these tickers.
      
      Risk Assessment and Adjustments
      - Reason: Tickers have varying volatilities and correlations. For example, real estate tickers (PLD, AMT) might have different risks than tech-focused tickers (IAS, ZETA).
      
      PyPortfolioOpt Benefit: Implements advanced risk models, such as shrinkage and exponentially-weighted covariance, to handle noisy financial data.
      
      Data Integration and Alpha Combination
      - Reason: Financial Data Engineers often aggregate data from fundamental analysis, historical performance, and machine learning models.
      
      PyPortfolioOpt Benefit: Combines multiple sources of 'alpha' (e.g., predicted returns) in a risk-efficient way to generate optimal portfolios.
      
      Advanced Features for Complex Portfolios
      - Reason: For tickers like MCHX (Marchex) and ARE (Alexandria Real Estate), traditional methods may not capture market conditions accurately.
      
      PyPortfolioOpt Benefit: Experimental features like exponentially-weighted covariance matrices account for changing market dynamics.
      
      Compliance with Investment Rules
      - Reason: You are under strict orders to invest in the listed tickers and must make the best use of available data.
      
      PyPortfolioOpt Benefit: Ensures that optimization respects constraints, such as including all specified tickers and adhering to risk limits.
      
      `,
    },
    {
      key: "2",
      title: "Financial Data Science",
      subtitle: "Quick insights and technical details",
      icon: "carbon:finance",
      content: `
        Quick Insights: Optimizing a portfolio using tools like PyPortfolioOpt
        involves balancing risk and return to allocate money effectively. It’s like
        planning a budget—allocating roles based on contributions and costs.
        
        Technical Insights:
        - Diverse Asset Allocation: Focus on stable assets like "PSA" and "OMC."
        - Efficient Resource Utilization: Balancing return expectations and risk.
        - Visualization Opportunities: Create pie or bar charts for clarity.
      `,
    },
    {
      key: "3",
      title: "Portfolio Diversification",
      subtitle: "Analyzing sector-based diversification",
      icon: "dashicons:portfolio",
      content: `
        Key Takeaways:
        - Sectors like real estate (PLD) and ad tech (IAS) diversify investments.
        - Efficient Frontier Analysis: Identify the best risk-return trade-offs.
        - Advanced Risk Models: Handle data noise with covariance techniques.
      `,
    },
    {
      key: "4",
      title: "Efficient Frontier Analysis",
      subtitle: "Maximizing risk-return trade-offs",
      icon: "fluent:math-formula-16-filled",
      content: `
        Insights:
        - Use tools to generate efficient frontiers for asset combinations.
        - Highlight optimal portfolios to maximize returns while minimizing risk.
      `,
    },
    {
      key: "5",
      title: "Compliance and Constraints",
      subtitle: "Adhering to investment rules",
      icon: "solar:calculator-outline",
      content: `
        Ensure adherence to strict investment rules:
        - Include listed tickers (e.g., MCHX, ARE).
        - Respect constraints while optimizing portfolios for returns.
      `,
    },
    {
      key: "6",
      title: "Product Roadmap",
      subtitle: "Q1-202X",
      icon: "fa-solid:map-marked",
      content: `
        Decure Labs product roadmap is constantly changing but here are a few items
        - Q22025 clean up UX items
        - Q42025 refactor UX/UI items
        - Q22026 refactor FASTAPI for yfinance implementation
      `,
    },
  ];

  // Helper function to render content
  const renderContent = (content: string) => {
    // Split content into paragraphs
    const paragraphs = content.split("\n").filter((line) => line.trim() !== "");
    return paragraphs.map((paragraph, index) => {
      if (paragraph.trim().startsWith("-")) {
        // Render as list item if it starts with '-'
        const items = paragraph
          .split("-")
          .filter((item) => item.trim() !== "")
          .map((item, i) => <li key={i}>{item.trim()}</li>);
        return <ul key={index} className="list-disc ml-6">{items}</ul>;
      }
      return <p key={index} className="mb-2">{paragraph.trim()}</p>;
    });
  };

  return (
    <main className="bg-black py-2 w-full text-left">
      <Card>
        <h2 className="text-lg font-semibold mb-2 text-purple-400 text-left">
          Overview
        </h2>

        <Accordion
          className="flex flex-col gap-1 w-full"
          itemClasses={itemClasses}
          showDivider={false}
          variant="shadow"
        >
          {accordionContent.map(({ key, title, subtitle, icon, content }) => (
            <AccordionItem
              key={key}
              aria-label={title}
              startContent={<Icon icon={icon} className="text-purple-400 text-2xl" />}
              title={title}
              subtitle={<p className="text-sm text-purple-500 text-left">{subtitle}</p>}
            >
              {renderContent(content)}
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </main>
  );
}
