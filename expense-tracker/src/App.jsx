import { Routes , Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { ExpensePage } from './pages/expense/ExpensePage';
import { AddExpensePage } from './pages/expense/AddExpensePage';
import { AnalyticPage } from './pages/analytic/AnalyticPage';
import { BudgetPage } from './pages/budget/BudgetPage';
import { CategoryPage } from './pages/category/CategoryPage';
import { AddCategoryPage } from './pages/category/AddCategoryPage';
import { ProfilePage } from './pages/profile/ProfilePage';
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
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/add-category" element={<AddCategoryPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App
