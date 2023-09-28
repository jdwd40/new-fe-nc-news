import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Button, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react';
import { fetchTopics } from '../api'; // Import the fetchTopics function from your API definitions

const Header = ({ user, setTopic }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const getTopics = async () => {
      try {
        const data = await fetchTopics();
        setTopics(data.topics);
        console.log(data.topics);
      } catch (error) {
        console.error("Failed to fetch topics:", error);
      }
    };

    getTopics();
  }, []);

  const handleTopicSelect = (selectedTopic) => {
    setTopic(selectedTopic);
  };

  return (
    <Flex as="header" bg="gray.700" color="white" p={4}>
      <Box>
        <Menu>
          <MenuButton as={Button}>
            Select Topic
          </MenuButton>
          <MenuList>
            {topics.map((topic) => (
              <MenuItem key={topic.slug} onClick={() => handleTopicSelect(topic.slug)}>
                <Text fontSize='md' color='blue'>{topic.description}</Text>
              </MenuItem>
            ))}
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
