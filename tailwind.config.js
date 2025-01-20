// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     './pages/**/*.{js,ts,jsx,tsx,mdx}',
// //     './components/**/*.{js,ts,jsx,tsx,mdx}',
// //     './app/**/*.{js,ts,jsx,tsx,mdx}',
// //   ],
// //   theme: {
// //     extend: {
// //       backgroundImage: {
// //         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
// //         'gradient-conic':
// //           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
// //       },
// //     },
// //   },
// //   plugins: [],
// // }


// /////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//     './node_modules/@heroui/react/**/*.{js,ts,jsx,tsx,mdx}', // Add HeroUI paths
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//         'gradient-conic':
//           'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'), // Add forms plugin for better form styling
//     require('@heroui/theme'), // Include HeroUI theme
//   ],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/react/**/*.{js,ts,jsx,tsx,mdx}', // Add HeroUI paths
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Add forms plugin for better form styling
    require('@heroui/theme'), // Include HeroUI theme
  ],
};
