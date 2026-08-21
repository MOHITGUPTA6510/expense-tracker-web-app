import { Sidebar } from "../../components/Sidebar/Sidebar";

export function HomePage() {
  return (
    <>
        <Sidebar />
        <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Expense Tracker</h1>
            <p>Track your expenses and manage your budget effectively.</p>
        </div>
        </div>
    </>
  );
}