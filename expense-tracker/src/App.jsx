import { Routes , Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { ExpensePage } from './pages/expense/ExpensePage';
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/expense" element={<ExpensePage />} />
    </Routes>
  );
}

export default App
