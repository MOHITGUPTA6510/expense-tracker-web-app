import "./AnalyticPage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export function AnalyticPage() {
  const monthlyExpenses = [
    { month: "Jan", amount: 3000 },
    { month: "Feb", amount: 5000 },
    { month: "Mar", amount: 3500 },
    { month: "Apr", amount: 7000 },
  ];

  const categories = [
    { name: "Food", percentage: 32 },
    { name: "Travel", percentage: 20 },
    { name: "Shopping", percentage: 18 },
    { name: "Bills", percentage: 15 },
    { name: "Others", percentage: 15 },
  ];

  return (
    <>
    <Sidebar />
    <div className="expenses-container">

      {/* Monthly Expenses */}
      <div className="expense-card monthly-card">
        <h2>Expenses</h2>

        <div className="bar-chart">
          {monthlyExpenses.map((item) => (
            <div className="bar-wrapper" key={item.month}>

              <div
                className="bar"
                style={{ height: `${item.amount / 100}px` }}
              ></div>

              <span className="month">
                {item.month}
              </span>

            </div>
          ))}
        </div>
      </div>


      {/* Category Expenses */}
      <div className="expense-card category-card">
        <h2>Expenses</h2>

        <div className="donut-container">

          <div className="donut">
            <div className="donut-center">
              <span>Food</span>
              <strong>32%</strong>
            </div>
          </div>

        </div>

        <div className="category-list">

          {categories.map((category) => (
            <div className="category-row" key={category.name}>

              <span className="category-name">
                {category.name}
              </span>

              <span className="category-percentage">
                {category.percentage}%
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
    </>
  );
}

export default AnalyticPage;