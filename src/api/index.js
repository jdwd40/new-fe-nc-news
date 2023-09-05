import axios from 'axios';

axios.defaults.baseURL = 'http://77.68.4.18:9090/api';

// Fetch all topics
export const fetchTopics = async () => {
    try {
      const response = await axios.get('/api/topics');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Fetch all articles
  export const fetchArticles = async () => {
    try {
      const response = await axios.get('/api/articles');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Fetch an article by ID
  export const fetchArticleById = async (id) => {
    try {
      const response = await axios.get(`/api/articles/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  