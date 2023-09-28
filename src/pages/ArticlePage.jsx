import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Button, VStack, Spinner, Divider } from '@chakra-ui/react';
import { fetchArticleById, fetchCommentsByArticleId } from '../api';  // Import your API fetching functions

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const articleData = await fetchArticleById(id);
        const commentsData = await fetchCommentsByArticleId(id);
        setArticle(articleData.article);
        setComments(commentsData.comments);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const handleLike = () => {
    // Implement your like functionality here
  };

  const handleComment = () => {
    // Implement your comment functionality here
  };

  return (
    <VStack spacing={4} align="stretch">
      {isLoading ? (
        <Spinner size="xl" />
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <>
          <Box p={5} shadow="md" borderWidth={1}>
            <Text fontSize="2xl" fontWeight="bold">{article.title}</Text>
            <Text mt={2}>Author: {article.author}</Text>
            <Text mt={2}>Published on: {new Date(article.created_at).toLocaleDateString()}</Text>
            <Text mt={4}>{article.body}</Text>
            <Button mt={4} colorScheme="blue" onClick={handleLike}>Like</Button>
            <Button mt={4} colorScheme="green" onClick={handleComment}>Comment</Button>
          </Box>
          <Box p={5} shadow="md" borderWidth={1}>
            <Text fontSize="xl" fontWeight="bold">Comments</Text>
            <Divider mt={4} mb={4}/>
            {comments.map((comment) => (
              <Box key={comment.comment_id} p={4} mt={4} shadow="md" borderWidth={1} borderRadius="md">
                <Text>{comment.body}</Text>
                <Text mt={2} fontSize="sm" fontStyle="italic">- {comment.author}</Text>
              </Box>
            ))}
          </Box>
        </>
      )}
    </VStack>
  );
};

export default ArticlePage;
