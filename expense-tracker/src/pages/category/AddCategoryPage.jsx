import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./AddCategoryPage.css";

export function AddCategoryPage() {
  const [categoryName, setCategoryName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState("🍔");

  const icons = [
    "🍔",
    "🚗",
    "🛍️",
    "💡",
    "🎮",
    "🏥",
    "📚",
    "🏠",
    "✈️",
    "💻",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      categoryName,
      selectedIcon,
    });
  };

  return (
    <>
    <Sidebar />
    <div className="add-category-page">

      <main className="add-category-main">

        {/* Header */}

        <div className="add-category-header">
          <h1>Add Category</h1>
        </div>


        {/* Form Card */}

        <div className="add-category-card">

          <form onSubmit={handleSubmit}>

            {/* Category Name */}

            <div className="form-group">

              <label htmlFor="categoryName">
                Category Name
              </label>

              <input
                id="categoryName"
                type="text"
                placeholder="Enter category name"
                value={categoryName}
                onChange={(event) =>
                  setCategoryName(event.target.value)
                }
                required
              />

            </div>


            {/* Icon Selection */}

            <div className="form-group">

              <label>
                Select Icon
              </label>

              <div className="icon-grid">

                {icons.map((icon) => (

                  <button
                    type="button"
                    key={icon}
                    className={`icon-option ${
                      selectedIcon === icon
                        ? "selected-icon"
                        : ""
                    }`}
                    onClick={() => setSelectedIcon(icon)}
                  >
                    {icon}
                  </button>

                ))}

              </div>

            </div>


            {/* Preview */}

            <div className="category-preview">

              <span className="preview-icon">
                {selectedIcon}
              </span>

              <div>
                <p className="preview-label">
                  Preview
                </p>

                <h3>
                  {categoryName || "Category Name"}
                </h3>
              </div>

            </div>


            {/* Buttons */}

            <div className="form-buttons">

              <button
                type="button"
                className="cancel-btn"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="save-category-btn"
              >
                Save Category
              </button>

            </div>

          </form>

        </div>

      </main>

    </div>
    </>
  );
}

export default AddCategoryPage;