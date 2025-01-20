// "use client";

// import React from "react";
// import Plot from "react-plotly.js";

// interface PlotProps {
//   data: Plotly.Data[];
//   layout?: Partial<Plotly.Layout>;
//   config?: Partial<Plotly.Config>;
//   style?: React.CSSProperties;
// }

// const PlotComponent: React.FC<PlotProps> = ({ data, layout, config, style }) => {
//   return (
//     <div style={style}>
//       <Plot
//         data={data}
//         layout={layout}
//         config={config}
//         style={{ width: "100%", height: "100%" }}
//         useResizeHandler
//       />
//     </div>
//   );
// };

// export default PlotComponent;


//////////////////////////
////////////////////////
///////////////////////


// "use client";

// import React from "react";
// import Plot from "react-plotly.js";

// interface PlotProps {
//   data: Plotly.Data[];
//   layout?: Partial<Plotly.Layout>;
//   config?: Partial<Plotly.Config>;
// }

// const PlotComponent: React.FC<PlotProps> = ({ data, layout, config }) => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         maxWidth: "1200px", // Limit width for larger screens
//         margin: "0 auto", // Center the plot
//         height: "100%", // Let height adjust dynamically
//       }}
//     >
//       <Plot
//         data={data}
//         layout={{
//           autosize: true,
//           margin: { t: 20, l: 40, r: 40, b: 40 }, // Adjust margins for better spacing
//           ...layout,
//         }}
//         config={{
//           responsive: true, // Enables responsiveness
//           displayModeBar: false, // Hides Plotly's mode bar
//           ...config,
//         }}
//         style={{
//           width: "100%",
//           height: "400px", // Default height
//         }}
//         useResizeHandler={true} // Ensures resizing on window resize
//       />
//     </div>
//   );
// };

// export default PlotComponent;



// "use client";

// import React from "react";
// import Plot from "react-plotly.js";

// interface PlotProps {
//   data: Plotly.Data[];
//   layout?: Partial<Plotly.Layout>;
//   config?: Partial<Plotly.Config>;
// }

// const PlotComponent: React.FC<PlotProps> = ({ data, layout, config }) => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         maxWidth: 1200, // Set a maximum width for large screens
//         margin: "0 auto", // Center the plot
//         height: "auto",
//       }}
//     >
//       <Plot
//         data={data}
//         layout={{
//           autosize: true,
//           margin: { t: 20, l: 40, r: 40, b: 40 },
//           ...layout,
//         }}
//         config={{
//           responsive: true, // Enables responsiveness
//           ...config,
//         }}
//         useResizeHandler={true} // Resizes on screen size change
//       />
//     </div>
//   );
// };

// export default PlotComponent;


// "use client";

// import React from "react";
// import Plotly from "plotly.js";
// import createPlotlyComponent from "react-plotly.js/factory";

// const Plot = createPlotlyComponent(Plotly);

// interface PlotProps {
//   data: Plotly.Data[];
//   layout?: Partial<Omit<Plotly.Layout, "responsive">>;
//   config?: Partial<Plotly.Config>;
// }

// const PlotComponent: React.FC<PlotProps> = ({ data, layout, config }) => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         maxWidth: "1200px",
//         margin: "0 auto",
//         height: "100%",
//       }}
//     >
//       <Plot
//         data={data}
//         layout={{
//           autosize: true,
//           margin: { t: 20, l: 40, r: 40, b: 40 },
//           ...layout,
//         }}
//         config={{
//           responsive: true,
//           displayModeBar: false,
//           ...config,
//         }}
//         style={{
//           width: "100%",
//           height: "100%",
//         }}
//         useResizeHandler
//       />
//     </div>
//   );
// };

// export default PlotComponent;

// ///WORKS///////////////////////////////////////////////////////////////////////////////////
// "use client";

// import React from "react";
// import Plot from "react-plotly.js";

// interface PlotProps {
//   data: Plotly.Data[];
//   layout?: Partial<Plotly.Layout>;
//   config?: Partial<Plotly.Config>;
// }

// const PlotComponent: React.FC<PlotProps> = ({ data, layout, config }) => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         maxWidth: "100%",
//         margin: "0 auto",
//         height: "100%",
//       }}
//     >
//       <Plot
//         data={data}
//         layout={{
//           autosize: true,
//           margin: { t: 40, l: 40, r: 40, b: 40 },
//           title: typeof layout?.title === "string" ? layout.title : undefined, // Ensure title is a string
//           ...layout,
//         }}
//         config={{
//           responsive: true,
//           displayModeBar: true,
//           displaylogo: false,
//           ...config,
//         }}
//         style={{
//           width: "100%",
//           height: "400px", // Default height
//         }}
//         useResizeHandler
//       />
//     </div>
//   );
// };

// export default PlotComponent;


///TEST///////////////////////////////////////////////////////////////////////////////////

// "use client";

// import React from "react";
// import Plot from "react-plotly.js";

// interface PlotProps {
//   data: Plotly.Data[];
//   layout?: Partial<Plotly.Layout>;
//   config?: Partial<Plotly.Config>;
// }

// const PlotComponent: React.FC<PlotProps> = ({ data, layout, config }) => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         maxWidth: "100%",
//         margin: "0 auto",
//         height: "100%",
//         overflow: "hidden", // Prevent overflow
//       }}
//     >
//       <Plot
//         data={data}
//         layout={{
//           autosize: true,
//           margin: { t: 40, l: 40, r: 40, b: 40 },
//           legend: {
//             orientation: "h", // Horizontal legend
//             y: -0.3, // Position legend on top
//             x: 0.5,
//             xanchor: "center",
//           },
//           hoverlabel: {
//             bgcolor: "#fff",
//             font: { size: 12, color: "#333" },
//             bordercolor: "#ccc",
//           }, // Tooltip on top
//           title: typeof layout?.title === "string" ? layout.title : undefined, // Ensure title is a string
//           ...layout,
//         }}
//         config={{
//           responsive: true,
//           displayModeBar: true,
//           displaylogo: false,
//           ...config,
//         }}
//         style={{
//           width: "100%", // Ensure plot stays within card boundaries
//           height: "400px", // Default height with responsiveness maintained
//         }}
//         useResizeHandler
//       />
//     </div>
//   );
// };

// export default PlotComponent;



////////////////////////
"use client";

import React from "react";
import Plot from "react-plotly.js";

interface PlotProps {
  data: Plotly.Data[];
  layout?: Partial<Plotly.Layout>;
  config?: Partial<Plotly.Config>;
}

const PlotComponent: React.FC<PlotProps> = ({ data, layout, config }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
        height: "100%",
        overflow: "hidden", // Prevent overflow
        position: "relative", // Ensures proper positioning
      }}
    >
      {/* Static Toolbar Container */}
      <div
        style={{
          position: "absolute",
          top: "-50px", // Adjust to position above the plot
          right: "0", // Align to the top-right
          zIndex: 1000, // Ensure visibility above other elements
        }}
        id="plotly-toolbar"
      >
        {/* Placeholder for Plotly toolbar */}
      </div>

      <Plot
        data={data}
        layout={{
          autosize: true,
          margin: { t: 40, l: 40, r: 40, b: 40 },
          legend: {
            orientation: "h",
            y: -0.3, // Place legend below the plot
            x: 0.5,
            xanchor: "center",
          },
          hoverlabel: {
            bgcolor: "#fff",
            font: { size: 12, color: "#333" },
            bordercolor: "#ccc",
          }, // Hover tooltip styles
          title: typeof layout?.title === "string" ? layout.title : undefined,
          ...layout,
        }}
        config={{
          responsive: true,
          displayModeBar: true,
          displaylogo: false,
          modeBarButtonsToAdd: ["toImage", "resetScale2d"], // Add "Take a Picture" and "Reset to Home" buttons
          toImageButtonOptions: {
            format: "png", // Export format
            filename: "plot_image", // Default file name
          },
          staticPlot: false, // Enable interactivity
          ...config,
        }}
        style={{
          width: "100%",
          height: "400px",
        }}
        useResizeHandler
        onInitialized={(figure, graphDiv) => {
          const toolbar = graphDiv.querySelector(".modebar");
          if (toolbar) {
            const toolbarContainer = document.getElementById("plotly-toolbar");
            if (toolbarContainer) {
              toolbarContainer.appendChild(toolbar);
            }
          }
        }}
        onUpdate={(figure, graphDiv) => {
          const toolbar = graphDiv.querySelector(".modebar");
          if (toolbar) {
            const toolbarContainer = document.getElementById("plotly-toolbar");
            if (toolbarContainer) {
              toolbarContainer.appendChild(toolbar);
            }
          }
        }}
      />
    </div>
  );
};

export default PlotComponent;
