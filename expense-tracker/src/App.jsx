import { Routes , Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { ExpensePage } from './pages/expense/ExpensePage';
import { AddExpensePage } from './pages/expense/AddExpensePage';
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/expense" element={<ExpensePage />} />
      <Route path="/add-expense" element={<AddExpensePage />} />
    </Routes>
  );
}

export default App
