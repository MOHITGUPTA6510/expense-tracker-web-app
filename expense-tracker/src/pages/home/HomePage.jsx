import { DashboardPage } from "../dashboard/DashboardPage";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./HomePage.css";


export function HomePage() {
  return (
    <>
        <Sidebar />
        <DashboardPage />
    </>
  );
}