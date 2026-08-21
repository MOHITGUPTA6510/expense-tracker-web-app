import "./ExpensePage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { AddExpensePage } from "./AddExpensePage";
import { useNavigate } from "react-router-dom";

export function ExpensePage() {
  const navigate = useNavigate();

  return (
    <>
    <Sidebar />
    <main className="expenses-page">

      {/* Header */}
      <div className="expenses-header">
        <h1>Expenses</h1>

        <button className="add-expense-btn" onClick={() => navigate("/add-expense")}>
          + Add Expense
        </button>
      </div>

      {/* Search */}
      <div className="search-section">
        <label>Search expenses 🔍</label>

        <input
          type="text"
          placeholder="Search..."
          className="expense-search"
        />
      </div>

      {/* Filters */}
      <div className="filter-section">
        <span>Filter:</span>

        <select>
          <option>Category</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Bills</option>
        </select>

        <select>
          <option>Date</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>

        <select>
          <option>Payment Method</option>
          <option>Cash</option>
          <option>Credit Card</option>
          <option>UPI</option>
        </select>
      </div>

      {/* Expense Table */}
      <div className="expense-table-container">
        <table className="expense-table">

          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>21 Aug</td>
              <td>Grocery</td>
              <td>Food</td>
              <td className="expense-amount">-₹850</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>

            <tr>
              <td>20 Aug</td>
              <td>Uber</td>
              <td>Travel</td>
              <td className="expense-amount">-₹320</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>

            <tr>
              <td>19 Aug</td>
              <td>Netflix</td>
              <td>Bills</td>
              <td className="expense-amount">-₹649</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>

            <tr>
              <td>18 Aug</td>
              <td>Coffee</td>
              <td>Food</td>
              <td className="expense-amount">-₹180</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>

          </tbody>

        </table>
      </div>

    </main>
    </>
  );
}