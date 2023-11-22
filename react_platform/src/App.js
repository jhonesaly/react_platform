import { GlobalStyle } from './globalstyles';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>

  );
}

export default App;
