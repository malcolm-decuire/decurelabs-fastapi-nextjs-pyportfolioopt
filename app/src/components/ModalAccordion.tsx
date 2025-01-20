// //20250119 UPDATES FOR TRAINING PURPOSES
// import React from "react";
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";
// import { Accordion, AccordionItem } from "@heroui/react";
// import { Icon } from "@iconify/react"; // Using Iconify for icons

// // Icons for Accordion using Iconify Solar Icons
// const BarChartIcon = () => (
//   <Icon icon="vaadin:bar-chart" width="24" height="24" />
// );

// const PieChartIcon = () => (
//   <Icon icon="f7:chart-pie" width="24" height="24" />
// );

// const MediumChartIcon = () => (
//   <Icon icon="hugeicons:chart-medium" width="24" height="24" />
// );

// interface ModalWithAccordionProps {
//   onClose: () => void;
// }

// export default function ModalWithAccordion({ onClose }: ModalWithAccordionProps) {
//   const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

//   return (
//     <Modal
//       isOpen={true}
//       onOpenChange={onClose}
//       backdrop="blur"
//       className="fixed inset-0 flex justify-center items-center overflow-auto" // Centered modal with backdrop
//     >
//       <ModalContent
//         className="bg-black text-purple-500 w-full h-full p-6 rounded-none max-w-full max-h-full overflow-auto relative" // Full screen with no horizontal scroll, and top-centered
//         style={{
//           maxWidth: '100%',
//           maxHeight: '100vh', // Make the modal take up the full height of the screen
//           overflowY: 'auto',  // Enable vertical scroll if content exceeds the height
//         }}
//       >
//         {/* Close button positioned at the top-right corner */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 p-2 text-foreground-500 rounded-full hover:bg-default-100 active:bg-default-200 focus:outline-none"
//         >
//           <svg
//             aria-hidden="true"
//             fill="none"
//             focusable="false"
//             height="1em"
//             role="presentation"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             width="1em"
//           >
//             <path d="M18 6L6 18M6 6l12 12"></path>
//           </svg>
//         </button>

//         <ModalHeader className="text-center text-purple-500">Accordion Modal</ModalHeader>
//         <ModalBody className="flex flex-col gap-3 px-6 py-2 overflow-y-auto">
//           <Accordion variant="shadow" showDivider={false} className="w-full">
//             <AccordionItem
//               key="1"
//               startContent={<BarChartIcon />}
//               title="Connected devices"
//               subtitle="2 issues to fix now"
//             >
//               {defaultContent}
//             </AccordionItem>
//             <AccordionItem
//               key="2"
//               startContent={<PieChartIcon />}
//               title="Apps Permissions"
//               subtitle="3 apps have read permissions"
//             >
//               {defaultContent}
//             </AccordionItem>
//             <AccordionItem
//               key="3"
//               startContent={<MediumChartIcon />}
//               title="Pending tasks"
//               subtitle="Complete your profile"
//             >
//               {defaultContent}
//             </AccordionItem>
//           </Accordion>
//         </ModalBody>
//         <ModalFooter>
//           <Button className="bg-transparent text-danger hover:bg-danger/20" variant="light" onPress={onClose}>
//             Close
//           </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// }



// //20250119 UPDATES FOR TRAINING PURPOSES
// //20250119 FULL UPDATE WITH ALL CONTENT
// import React from "react";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
// } from "@heroui/react";
// import { Accordion, AccordionItem } from "@heroui/react";
// import { Icon } from "@iconify/react"; // Using Iconify for icons

// // Icons for Accordion using Iconify Solar Icons
// const BarChartIcon = () => <Icon icon="vaadin:bar-chart" width="24" height="24" />;
// const PieChartIcon = () => <Icon icon="f7:chart-pie" width="24" height="24" />;
// const MediumChartIcon = () => <Icon icon="hugeicons:chart-medium" width="24" height="24" />;
// const CalculatorIcon = () => <Icon icon="mdi:calculator" width="24" height="24" />;
// const UserIcon = () => <Icon icon="mdi:account-group" width="24" height="24" />;

// interface ModalWithAccordionProps {
//   onClose: () => void;
// }

// export default function ModalWithAccordion({ onClose }: ModalWithAccordionProps) {
//   const accordionContent = [
//     {
//       key: "1",
//       icon: BarChartIcon,
//       title: "Tangency Portfolio",
//       subtitle: "The All-Star Team",
//       content: `
//         Imagine you're managing a football team, and you want to win the championship. 
//         You want players who can score goals (high returns) but also players who defend well 
//         and don’t let the other team score (low risk). The Tangency Portfolio is like the All-Star Team:
//         it’s made up of the best mix of attackers, midfielders, and defenders to give you the highest chance 
//         of winning for every level of risk you’re willing to take.

//         Max Utility Portfolio = Your Dream XI:
//         - Maybe you love aggressive, attacking football and want lots of forwards 
//           (you’re okay taking more risk for higher rewards). 
//         - Or maybe you prefer a solid, defensive game where you avoid losing at all costs 
//           (you want to minimize risk). 
//         - Tangency Portfolio: 'The team with the best stats.' Balances scoring and defending perfectly.
//         - Max Utility Portfolio: 'Your personalized team.' Matches your playing style.

//         In short:
//         - The Tangency Portfolio is like picking the perfect balance of stars who work 
//           well together to maximize performance. 
//         - The Max Utility Portfolio is like building your favorite team, custom-tailored 
//           to your coaching philosophy and what you think will work best.
//       `,
//     },
//     {
//       key: "2",
//       icon: PieChartIcon,
//       title: "Ledoit-Wolf Method",
//       subtitle: "Balancing known and unknown",
//       content: `
//         Imagine you're picking the best players for your football team, but you have only a little info 
//         about how good they really are. This method helps you guess better by balancing the info you know 
//         and the stuff you don’t. It's like making a safe bet on who to pick.
//       `,
//     },
//     {
//       key: "3",
//       icon: MediumChartIcon,
//       title: "Expected Returns",
//       subtitle: "Predicting performance",
//       content: `
//         Think of this as how many touchdowns you expect your team to score in a game. 
//         It's just a prediction based on your team's skills and the competition.

//         Insights:
//         - This prediction helps gauge potential performance against various teams.
//         - Expected returns are essential for deciding your strategy ahead of matches.
//       `,
//     },
//     {
//       key: "4",
//       icon: CalculatorIcon,
//       title: "Minimizing Variance",
//       subtitle: "Ensuring steady performance",
//       content: `
//         Imagine your coach doesn’t want the score to swing wildly in games (like winning big one week and 
//         losing big the next). Minimizing variance is about making sure your team performs steadily, week after week.

//         Why this matters:
//         - Reducing volatility ensures consistent results, which is vital in high-stakes tournaments.
//         - Predictable outcomes help team morale and strategy planning.
//       `,
//     },
//     {
//       key: "5",
//       icon: UserIcon,
//       title: "Discrete Allocation",
//       subtitle: "Picking whole players",
//       content: `
//         When you're picking players, you can't choose half of one player and half of another. 
//         You need to pick whole players for your team. This is what discrete allocation means—choosing whole, 
//         not fractional, pieces for your portfolio (or team).

//         Implications for strategy:
//         - Helps optimize the use of available resources (players or assets).
//         - Simplifies decisions by focusing on complete units.
//       `,
//     },
//   ];

//   // Helper function to render accordion content
//   const renderContent = (content: string) => {
//     const paragraphs = content.split("\n").filter((line) => line.trim() !== "");
//     return paragraphs.map((paragraph, index) => {
//       if (paragraph.trim().startsWith("-")) {
//         const items = paragraph
//           .split("-")
//           .filter((item) => item.trim() !== "")
//           .map((item, i) => <li key={i}>{item.trim()}</li>);
//         return <ul key={index} className="list-disc ml-6">{items}</ul>;
//       }
//       return <p key={index} className="mb-2">{paragraph.trim()}</p>;
//     });
//   };

//   return (
//     <Modal
//       isOpen={true}
//       onOpenChange={onClose}
//       backdrop="blur"
//       className="fixed inset-0 flex justify-center items-center overflow-auto"
//     >
//       <ModalContent
//         className="bg-black text-purple-500 w-full h-full p-6 rounded-none max-w-full max-h-full overflow-auto relative"
//         style={{
//           maxWidth: "100%",
//           maxHeight: "100vh",
//           overflowY: "auto",
//         }}
//       >
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 p-2 text-foreground-500 rounded-full hover:bg-default-100 active:bg-default-200 focus:outline-none"
//         >
//           <svg
//             aria-hidden="true"
//             fill="none"
//             focusable="false"
//             height="1em"
//             role="presentation"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             width="1em"
//           >
//             <path d="M18 6L6 18M6 6l12 12"></path>
//           </svg>
//         </button>

//         <ModalHeader className="text-center text-purple-500">Accordion Modal</ModalHeader>
//         <ModalBody className="flex flex-col gap-3 px-6 py-2 overflow-y-auto">
//           <Accordion variant="shadow" showDivider={false} className="w-full">
//             {accordionContent.map(({ key, icon: IconComponent, title, subtitle, content }) => (
//               <AccordionItem
//                 key={key}
//                 startContent={<IconComponent />}
//                 title={title}
//                 subtitle={subtitle}
//               >
//                 {renderContent(content)}
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </ModalBody>
//         <ModalFooter>
//           <Button
//             className="bg-transparent text-danger hover:bg-danger/20"
//             variant="light"
//             onPress={onClose}
//           >
//             Close
//           </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// }












//20250119 FULL UPDATE WITH ALL CONTENT
import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { Accordion, AccordionItem } from "@heroui/react";
import { Icon } from "@iconify/react"; // Using Iconify for icons

// Icons for Accordion using Iconify Solar Icons
const BarChartIcon = () => <Icon icon="vaadin:bar-chart" width="24" height="24" />;
const PieChartIcon = () => <Icon icon="f7:chart-pie" width="24" height="24" />;
const MediumChartIcon = () => <Icon icon="hugeicons:chart-medium" width="24" height="24" />;
const CalculatorIcon = () => <Icon icon="mdi:calculator" width="24" height="24" />;
const UserIcon = () => <Icon icon="mdi:account-group" width="24" height="24" />;

interface ModalWithAccordionProps {
  onClose: () => void;
}

export default function ModalWithAccordion({ onClose }: ModalWithAccordionProps) {
  useEffect(() => {
    // Remove the unwanted button element after render
    const button = document.querySelector(
      'button[role="button"][aria-label="Close"]'
    );
    if (button) {
      button.remove();
    }
  }, []);

  const accordionContent = [
    {
      key: "1",
      icon: BarChartIcon,
      title: "Tangency Portfolio",
      subtitle: "The All-Star Team",
      content: `
        Imagine you're managing a football team, and you want to win the championship. 
        You want players who can score goals (high returns) but also players who defend well 
        and don’t let the other team score (low risk). The Tangency Portfolio is like the All-Star Team:
        it’s made up of the best mix of attackers, midfielders, and defenders to give you the highest chance 
        of winning for every level of risk you’re willing to take.

        Max Utility Portfolio = Your Dream XI:
        - Maybe you love aggressive, attacking football and want lots of forwards 
          (you’re okay taking more risk for higher rewards). 
        - Or maybe you prefer a solid, defensive game where you avoid losing at all costs 
          (you want to minimize risk). 
        - Tangency Portfolio: 'The team with the best stats.' Balances scoring and defending perfectly.
        - Max Utility Portfolio: 'Your personalized team.' Matches your playing style.

        In short:
        - The Tangency Portfolio is like picking the perfect balance of stars who work 
          well together to maximize performance. 
        - The Max Utility Portfolio is like building your favorite team, custom-tailored 
          to your coaching philosophy and what you think will work best.
      `,
    },
    {
      key: "2",
      icon: PieChartIcon,
      title: "Ledoit-Wolf Method",
      subtitle: "Balancing known and unknown",
      content: `
        Imagine you're picking the best players for your football team, but you have only a little info 
        about how good they really are. This method helps you guess better by balancing the info you know 
        and the stuff you don’t. It's like making a safe bet on who to pick.
      `,
    },
    {
      key: "3",
      icon: MediumChartIcon,
      title: "Expected Returns",
      subtitle: "Predicting performance",
      content: `
        Think of this as how many touchdowns you expect your team to score in a game. 
        It's just a prediction based on your team's skills and the competition.

        Insights:
        - This prediction helps gauge potential performance against various teams.
        - Expected returns are essential for deciding your strategy ahead of matches.
      `,
    },
    {
      key: "4",
      icon: CalculatorIcon,
      title: "Minimizing Variance",
      subtitle: "Ensuring steady performance",
      content: `
        Imagine your coach doesn’t want the score to swing wildly in games (like winning big one week and 
        losing big the next). Minimizing variance is about making sure your team performs steadily, week after week.

        Why this matters:
        - Reducing volatility ensures consistent results, which is vital in high-stakes tournaments.
        - Predictable outcomes help team morale and strategy planning.
      `,
    },
    {
      key: "5",
      icon: UserIcon,
      title: "Discrete Allocation",
      subtitle: "Picking whole players",
      content: `
        When you're picking players, you can't choose half of one player and half of another. 
        You need to pick whole players for your team. This is what discrete allocation means—choosing whole, 
        not fractional, pieces for your portfolio (or team).

        Implications for strategy:
        - Helps optimize the use of available resources (players or assets).
        - Simplifies decisions by focusing on complete units.
      `,
    },
  ];

  // Helper function to render accordion content
  const renderContent = (content: string) => {
    const paragraphs = content.split("\n").filter((line) => line.trim() !== "");
    return paragraphs.map((paragraph, index) => {
      if (paragraph.trim().startsWith("-")) {
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
    <Modal
      isOpen={true}
      onOpenChange={onClose}
      backdrop="blur"
      className="fixed inset-0 flex justify-center items-center overflow-auto"
    >
      <ModalContent
        className="bg-black text-purple-500 w-full h-full p-6 rounded-none max-w-full max-h-full overflow-auto relative"
        style={{
          maxWidth: "100%",
          maxHeight: "100vh",
          overflowY: "auto",
        }}
      >
        <ModalHeader className="text-center text-purple-500">Key Terms & Concepts</ModalHeader>
        <ModalBody className="flex flex-col gap-3 px-6 py-2 overflow-y-auto">
          <Accordion variant="shadow" showDivider={false} className="w-full">
            {accordionContent.map(({ key, icon: IconComponent, title, subtitle, content }) => (
              <AccordionItem
                key={key}
                startContent={<IconComponent />}
                title={title}
                subtitle={subtitle}
              >
                {renderContent(content)}
              </AccordionItem>
            ))}
          </Accordion>
        </ModalBody>
        <ModalFooter>
          <Button
            className="bg-transparent text-danger hover:bg-danger/20"
            variant="light"
            onPress={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
