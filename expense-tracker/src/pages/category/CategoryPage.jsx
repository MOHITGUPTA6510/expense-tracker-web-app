import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./CategoryPage.css";

export function CategoryPage() {
    const navigate = useNavigate();
  const categories = [
    {
      icon: "🍔",
      name: "Food",
      transactions: 32,
    },
    {
      icon: "🚗",
      name: "Travel",
      transactions: 18,
    },
    {
      icon: "🛍️",
      name: "Shopping",
      transactions: 12,
    },
    {
      icon: "💡",
      name: "Bills",
      transactions: 8,
    },
    {
      icon: "🎮",
      name: "Entertainment",
      transactions: 6,
    },
    {
      icon: "🏥",
      name: "Health",
      transactions: 4,
    },
    {
      icon: "📚",
      name: "Education",
      transactions: 3,
    },
  ];

  return (
    <>
    <Sidebar />
    <div className="category-page">

      <main className="category-main">

        {/* Page Header */}

        <div className="category-header">

          <h1>Categories</h1>

          <button className="add-category-btn" onClick={() => navigate("/add-category")}>
            + Add Category
          </button>

        </div>


        {/* Categories */}

        <div className="category-list">

          {categories.map((category) => (

            <div
              className="category-card"
              key={category.name}
            >

              <div className="category-left">

                <div className="category-icon">
                  {category.icon}
                </div>

                <h2>
                  {category.name}
                </h2>

              </div>


              <div className="category-right">

                <span>
                  {category.transactions} transactions
                </span>

                <button className="category-menu">
                  ⋮
                </button>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
    </>
  );
}

export default CategoryPage;