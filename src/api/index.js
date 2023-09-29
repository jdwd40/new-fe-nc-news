import axios from 'axios';

axios.defaults.baseURL = 'http://77.68.4.18:9090/api';

// Fetch all topics
export const fetchTopics = async () => {
    try {
      const response = await axios.get('/topics');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Fetch articles, optionally filtered by a topic
export const fetchArticles = async (topic = null) => {
  const topicString = topic.topic;
  try {
    let url = '/articles';
    if (topicString) {
      url += `?topic=${topicString}`;
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

  // Fetch an article by ID
  export const fetchArticleById = async (id) => {
    try {
      const response = await axios.get(`/articles/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Fetch comments for an article
  // on route GET /api/articles/:article_id/comments
export const fetchCommentsByArticleId = async (id) => {
  try {
    const response = await axios.get(`/articles/${id}/comments`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

  // Post a comment to an article
  // on route POST /api/articles/:article_id/comments
export const postCommentByArticleId = async (id, comment) => {
  try {
    const response = await axios.post(`/articles/${id}/comments`, comment);
    return response.data;
  } catch (error) {
    throw error;
  }
}
