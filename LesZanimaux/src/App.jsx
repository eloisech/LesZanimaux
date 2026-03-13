import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CollectionPage from './pages/CollectionPage';
import DeckPage from './pages/DeckPage';
import GamePage from './pages/GamePage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/collection"
        element={
          <ProtectedRoute>
            <CollectionPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/deck"
        element={
          <ProtectedRoute>
            <DeckPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/game"
        element={
          <ProtectedRoute>
            <GamePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;