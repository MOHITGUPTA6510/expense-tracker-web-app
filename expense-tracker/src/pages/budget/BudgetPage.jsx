import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./BudgetPage.css";

export function BudgetPage() {
  const budgets = [
    {
      name: "Food",
      spent: 4500,
      limit: 6000,
    },
    {
      name: "Travel",
      spent: 2800,
      limit: 5000,
    },
    {
      name: "Shopping",
      spent: 4200,
      limit: 4000,
    },
  ];

  return (
    <>
      <Sidebar />
      <div className="budget-page">
        {/* Main Content */}

        <main className="budget-main">
          {/* Header */}

          <div className="budget-header">
            <h1>Budgets</h1>
            <p>this is goood</p>

            <button className="create-budget-btn">+ Create Budget</button>
          </div>

          {/* Budget Cards */}

          <div className="budget-list">
            {budgets.map((budget) => {
              const percentage = Math.round(
                (budget.spent / budget.limit) * 100,
              );

              const exceeded = percentage > 100;

              return (
                <div
                  className={`budget-card ${exceeded ? "budget-exceeded" : ""}`}
                  key={budget.name}
                >
                  {/* Card Header */}

                  <div className="budget-card-header">
                    <h2>{budget.name}</h2>

                    {exceeded && <span className="warning-icon">⚠️</span>}
                  </div>

                  {/* Amount */}

                  <div className="budget-amount">
                    ₹{budget.spent.toLocaleString("en-IN")}
                    <span>
                      {" / ₹"}
                      {budget.limit.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Progress Bar */}

                  <div className="progress-container">
                    <div className="progress-background">
                      <div
                        className={`progress-bar ${
                          exceeded ? "progress-exceeded" : ""
                        }`}
                        style={{
                          width: `${Math.min(percentage, 100)}%`,
                        }}
                      ></div>
                    </div>

                    <span
                      className={`percentage ${
                        exceeded ? "percentage-exceeded" : ""
                      }`}
                    >
                      {percentage}%
                    </span>
                  </div>

                  {/* Remaining / Exceeded */}

                  {exceeded ? (
                    <p className="budget-warning">
                      Budget exceeded by ₹
                      {(budget.spent - budget.limit).toLocaleString("en-IN")}
                    </p>
                  ) : (
                    <p className="budget-remaining">
                      ₹{(budget.limit - budget.spent).toLocaleString("en-IN")}
                      remaining
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export default BudgetPage;
