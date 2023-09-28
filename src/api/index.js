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
  console.log("Topic before API call: ", topic);
  const topicString = topic.topic;
  console.log("Topic after to string: ", topicString);
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
  
