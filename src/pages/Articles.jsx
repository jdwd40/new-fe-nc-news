import React, { useEffect, useState } from 'react';
import { Box, Text, VStack, Spinner } from '@chakra-ui/react'; // Import Spinner for better loading state
import { fetchArticles } from '../api';

const Articles = ({ topic }) => {  // Receive topic as a prop
  // Initialize state within the component
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchArticles({ topic });  // Use topic for filtering
        setArticles(data.articles);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [topic]);  // Re-fetch when the topic changes

  // Improved UI
  return (
    <VStack spacing={4} align="stretch">
      {isLoading ? (
        <Spinner size="xl" />  // Use a spinner for loading state
      ) : error ? (
        <Box>
          <Text>Error: {error.message}</Text>
          {/* You could add a "Retry" button here */}
        </Box>
      ) : (
        articles.map((article) => (
          <Box key={article.article_id} p={5} shadow="md" borderWidth={1}>
            <Text fontSize="xl" fontWeight="bold">{article.title}</Text>
            <Text mt={4}>{article.body.substring(0, 100)}...</Text>  // Show a snippet of the body
            {/* Add more article details like author, votes, etc. */}
          </Box>
        ))
      )}
    </VStack>
  );
};

export default Articles;
