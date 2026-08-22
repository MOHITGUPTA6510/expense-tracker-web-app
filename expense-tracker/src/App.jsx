import { Routes , Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { ExpensePage } from './pages/expense/ExpensePage';
import { AddExpensePage } from './pages/expense/AddExpensePage';
import { AnalyticPage } from './pages/analytic/AnalyticPage';
import { BudgetPage } from './pages/budget/BudgetPage';
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/expense" element={<ExpensePage />} />
      <Route path="/add-expense" element={<AddExpensePage />} />
      <Route path="/analytics" element={<AnalyticPage />} />
      <Route path="/budget" element={<BudgetPage />} />
    </Routes>
  );
}

export default App
