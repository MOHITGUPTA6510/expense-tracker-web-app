import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./HomePage.css";

export function HomePage() {
  return (
    <>
        <Sidebar />
        <div className="homepage-content">
            <h1 >Welcome to the Expense Tracker</h1>
            <p>Track your expenses and manage your budget effectively.</p>
        </div>
    </>
  );
}