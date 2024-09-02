// 'use client'
// import { Providers } from './providers'; // Import providers if needed
// import { Box, Flex } from '@chakra-ui/react';
// import Sidebar from './components/sidebar';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang='en'>
//       <body>
//         <Providers>
//           <>
//             {/* Background image layer */}
//             <Box
//               position="fixed" // Use fixed positioning to ensure it covers the entire viewport
//               top="0"
//               left="0"
//               right="0"
//               bottom="0"
//               zIndex="-1" // Place it behind all other content
//             >
//               <Box
//                 position="absolute"
//                 top="0"
//                 left="0"
//                 right="0"
//                 bottom="0"
//                 backgroundImage="url('/images/Image(bg).png')"
//                 backgroundSize="cover"
//                 backgroundRepeat="no-repeat"
//                 backgroundPosition="center"
//                 filter="blur(30px)" // Apply blur effect
//                 opacity="0.5" // Lower the opacity of the image
//               />
//               <Box
//                 position="absolute"
//                 top="0"
//                 left="0"
//                 right="0"
//                 bottom="0"
//                 backgroundColor="rgba(255, 255, 255, 0.5)" // Optional: Add a white overlay with 50% opacity
//               />
//             </Box>

//             {/* Main content */}
//             <Flex direction="row" height="100vh">
//               <Box>
//                 <Sidebar />
//               </Box>
//               <Box flex="1">
//                 {children}
//               </Box>
//             </Flex>
//           </>
//         </Providers>
//       </body>
//     </html>
//   );
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
          {/* Background image layer */}
          <Box
            position="fixed" // Use fixed positioning to ensure it covers the entire viewport
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="-1" // Place it behind all other content
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              backgroundImage="url('/images/Image(bg).png')"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              filter="blur(30px)" // Apply blur effect
              opacity="0.5" // Lower the opacity of the image
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              backgroundColor="rgba(255, 255, 255, 0.5)" // Optional: Add a white overlay with 50% opacity
            />
          </Box>

          {/* Main content */}
          <Flex direction="row" height="100vh">
            {/* Sidebar */}
            <Box width="350px"> {/* Adjust the width of the sidebar as needed */}
              <Sidebar />
            </Box>
            
            {/* Page Content */}
            <Box flex="1" overflowY="auto">
              {children}
            </Box>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
