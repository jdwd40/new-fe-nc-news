import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const BaseLayout = ({ children }) => {
  return (
    <>
    <Box>
      <Header user=""/>
      <Box as="main">
        {children}
      </Box>
      <Footer />
    </Box>
    </>
  );
};

export default BaseLayout;
