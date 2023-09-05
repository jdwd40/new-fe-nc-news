import { Box, Text, Link } from '@chakra-ui/react';

const Footer = () => {
    return (
      <Box as="footer" bg="gray.700" color="white" p={4}>
        <Text fontSize="sm">
          © 2023 NC News. Built with ❤️ by <Link color="blue.300" href="https://github.com/jdwd40">jdwd40</Link>.
        </Text>
      </Box>
    );
  };

    export default Footer;