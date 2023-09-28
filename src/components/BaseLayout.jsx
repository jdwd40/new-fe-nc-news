import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const BaseLayout = ({ children, setTopic }) => {
  return (
    <>
    <Box>
      <Header setTopic={setTopic}/>
      <Box as="main">
        {children}
      </Box>
      <Footer />
    </Box>
    </>
  );
};

export default BaseLayout;
