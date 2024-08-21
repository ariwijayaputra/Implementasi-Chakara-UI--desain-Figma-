// // app/layout.tsx
// import { Providers } from './providers'
// import { Box } from "@chakra-ui/react";
// import Sidebar from './components/sidebar';

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode,
// }) {
//   return (
//     <html lang='en'>
//       <body>
//         <Providers>
//         <Box display="flex" flexDirection="column" minHeight="100vh">
//             <Sidebar/>
//           </Box>
//           <Box
//         flex="1"
//         minHeight="100vh"
//         backgroundImage="url('/images/BackGround.png')" // Apply background image here
//         backgroundSize="cover"
//         backgroundPosition="center" // Center the background image
//         backgroundRepeat="no-repeat"
//       >
//           <Box as="main" flex="1" p={4}>
//               {children}
//           </Box>
//           </Box>
//         </Providers>
//       </body>
//     </html>
//   )
// }

'use client'
import { Providers } from './providers'; // Import providers if needed
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './components/sidebar';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
    <Providers>
      <>
      <Flex direction="row" height="100vh">
        <Box>
        <Sidebar />
        </Box>
        <Box flex="1">
          {children}
        </Box>
      </Flex>
      </>
    </Providers>
    </body>
    </html>
  );
}
