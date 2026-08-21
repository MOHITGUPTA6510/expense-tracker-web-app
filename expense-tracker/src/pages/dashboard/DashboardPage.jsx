import "./DashboardPage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export function DashboardPage() {
  return (
    <>
      <Sidebar />
      <div className="dashboard-content">
            <h1 className="page-title">
          Welcome to the Expense Tracker
        </h1>

        <p className="page-subtitle">
          Track your expenses and manage your budget effectively.
        </p>

        <section className="summary-cards">

          {/* Total Balance */}
          <div className="summary-card">
            <h3>Total Balance</h3>
            <h2>₹85,000</h2>
          </div>

          {/* Total Income */}
          <div className="summary-card">
            <h3>Total Income</h3>
            <h2>₹1,20,000</h2>
          </div>

          {/* Total Expenses */}
          <div className="summary-card">
            <h3>Total Expenses</h3>
            <h2>₹35,000</h2>
          </div>

          {/* Savings */}
          <div className="summary-card">
            <h3>Savings</h3>
            <h2>₹85,000</h2>
          </div>

        </section>
        </div>
    </>
  );
}