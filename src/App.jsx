import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Articles from './pages/Articles';
// Import your pages/components as needed

function App() {
  const [topic, setTopic] = useState(null);

  return (
    <Router>
      <BaseLayout setTopic={setTopic}>
        <Routes>
          <Route path="/" element={<Articles topic={topic} />} />
          <Route path="/article/:id" element="" />
          {/* Add more routes as needed */}
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
