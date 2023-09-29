import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Button, VStack, Spinner, Divider, Input } from '@chakra-ui/react';
import { fetchArticleById, fetchCommentsByArticleId, postCommentByArticleId } from '../api';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentBody, setCommentBody] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [id]);

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

  const handleCommentSubmit = async () => {
    try {
      const newComment = await postCommentByArticleId(id, { body: commentBody, username: 'yourUsername' });
      setComments([newComment.comment, ...comments]);
      setCommentBody('');
    } catch (err) {
      console.error("Couldn't post comment:", err);
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      {isLoading ? (
        <Spinner size="xl" />
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <>
          {/* Article */}
          <Box p={5} shadow="md" borderWidth={1}>
            <Text fontSize="xl" fontWeight="bold">{article.title}</Text>
            <Text mt={2}>Author: {article.author}</Text>
            <Text mt={2}>Published on: {new Date(article.created_at).toLocaleDateString()}</Text>
            <Text mt={4}>{article.body}</Text>
          </Box>
          {/* Comment Form */}
          <Box p={5} shadow="md" borderWidth={1}>
            <Input
              placeholder="Add a comment..."
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
            />
            <Button mt={2} onClick={handleCommentSubmit}>Submit Comment</Button>
          </Box>

          {/* Comment List */}
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
