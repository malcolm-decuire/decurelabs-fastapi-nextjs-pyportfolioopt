// import React from "react";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
// } from "@heroui/react";

// export default function App() {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   return (
//     <>
//       <Button onPress={onOpen}>Open Modal</Button>
//       <Modal
//         isOpen={isOpen}
//         onOpenChange={onOpenChange}
//         backdrop="blur" // Set backdrop to blur
//       >
//         <ModalContent className="w-full h-full max-w-none p-4 overflow-auto top-0 left-0 right-0 bottom-0 absolute">
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1 text-center">
//                 Modal Title
//               </ModalHeader>
//               <ModalBody className="overflow-y-auto">
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
//                   risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
//                   quam.
//                 </p>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
//                   risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
//                   quam.
//                 </p>
//                 <p>
//                   Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
//                   adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
//                   officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
//                   nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
//                   deserunt nostrud ad veniam.
//                 </p>
//               </ModalBody>
//               <ModalFooter className="flex justify-center">
//                 <Button color="danger" variant="light" onPress={onClose}>
//                   Close
//                 </Button>
//                 <Button color="primary" onPress={onClose}>
//                   Action
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }



import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* Open Modal Button */}
      <button
        className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 text-small gap-2 rounded-medium transition-transform-colors-opacity motion-reduce:transition-none bg-default text-default-foreground data-[hover=true]:opacity-hover"
        type="button"
        onClick={onOpen} // Opens the modal
      >
        Expand
      </button>

      {/* Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent className="bg-black max-w-none w-full h-full p-6 overflow-auto top-0 left-0 right-0 bottom-0 absolute text-purple-500">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-purple-500">
                Modal Title
              </ModalHeader>
              <ModalBody className="flex flex-1 flex-col gap-3 px-6 py-2 overflow-y-auto">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                  risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                  adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                  officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                  deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-center gap-2">
                <Button
                  className="bg-transparent text-danger hover:bg-danger/20"
                  variant="light"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button className="bg-primary text-primary-foreground" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
