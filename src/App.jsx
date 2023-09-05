
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
// Import your pages/components as needed

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/articles" element="" />
          <Route path="/article/:id" element="" />
          {/* Add more routes as needed */}
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
