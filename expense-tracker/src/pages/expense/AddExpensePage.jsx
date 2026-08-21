import { useState } from "react";
import "./AddExpensePage.css";
import { Sidebar } from "../../components/Sidebar/Sidebar";

export function AddExpensePage() {

  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: "Food",
    date: "",
    paymentMethod: "UPI",
    notes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Expense Data:", formData);
  };

  return (
    <>
    <Sidebar />
    <main className="add-expense-page">

      <div className="add-expense-container">

        <div className="add-expense-header">
          <h1>Add Expense</h1>
          <p>Enter the details of your expense.</p>
        </div>

        <form
          className="add-expense-form"
          onSubmit={handleSubmit}
        >

          {/* Amount */}
          <div className="form-group">
            <label htmlFor="amount">
              Amount
            </label>

            <input
              id="amount"
              type="number"
              name="amount"
              placeholder="₹ 500"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>


          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">
              Description
            </label>

            <input
              id="description"
              type="text"
              name="description"
              placeholder="Dinner with friends"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>


          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">
              Category
            </label>

            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option>Food</option>
              <option>Travel</option>
              <option>Bills</option>
              <option>Shopping</option>
              <option>Entertainment</option>
              <option>Health</option>
              <option>Education</option>
              <option>Other</option>
            </select>
          </div>


          {/* Date */}
          <div className="form-group">
            <label htmlFor="date">
              Date
            </label>

            <input
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>


          {/* Payment Method */}
          <div className="form-group">
            <label htmlFor="paymentMethod">
              Payment Method
            </label>

            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option>UPI</option>
              <option>Cash</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>Net Banking</option>
            </select>
          </div>


          {/* Notes */}
          <div className="form-group">
            <label htmlFor="notes">
              Notes
            </label>

            <textarea
              id="notes"
              name="notes"
              placeholder="Add some notes..."
              value={formData.notes}
              onChange={handleChange}
            />
          </div>


          {/* Buttons */}
          <div className="form-actions">

            <button
              type="button"
              className="cancel-btn"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Save Expense
            </button>

          </div>

        </form>

      </div>

    </main>
    </>
  );
}