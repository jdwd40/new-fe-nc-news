import { Link } from 'react-router-dom';
import { Box, Flex, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Header = ({ user }) => {
    return (
      <Flex as="header" bg="gray.700" color="white" p={4}>
        <Box>
          <Menu>
            <MenuButton as={Button}>
              Select Topic
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/articles/topic1">Topic 1</MenuItem>
              <MenuItem as={Link} to="/articles/topic2">Topic 2</MenuItem>
              {/* Add more topics */}
            </MenuList>
          </Menu>
        </Box>
        <Box ml="auto">
          {user ? (
            <span>Welcome, {user}</span>
          ) : (
            <Button as={Link} to="/login" colorScheme="blue">
              Sign In
            </Button>
          )}
        </Box>
      </Flex>
    );
  };
  
  export default Header;