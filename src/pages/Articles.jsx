import React, { useEffect, useState } from 'react';
import { Box, Text, VStack, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { fetchArticles } from '../api';

const Articles = ({ topic }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchArticles({ topic });
        setArticles(data.articles);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [topic]);

  return (
    <VStack spacing={4} align="stretch">
      {isLoading ? (
        <Spinner size="xl" />
      ) : error ? (
        <Box>
          <Text>Error: {error.message}</Text>
          {/* Add a "Retry" button here if needed */}
        </Box>
      ) : (
        articles.map((article) => (
          <Box key={article.article_id} p={5} shadow="md" borderWidth={1}>
            <Link to={`/article/${article.article_id}`}>
              <Text fontSize="xl" fontWeight="bold">{article.title}</Text>
            </Link>
            <Text mt={2}>Author: {article.author}</Text>
            <Text mt={2}>Published on: {new Date(article.created_at).toLocaleDateString()}</Text>
            <Text mt={4}>
              {article.body.length > 100 ? `${article.body.substring(0, 100)}...` : article.body}
            </Text>
          </Box>
        ))
      )}
    </VStack>
  );
};

export default Articles;
