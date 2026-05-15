import { Routes, Route } from "react-router-dom";
import Footer from '../../Components/Dashboard/Footer/Footer';
import Navbar from "../../Components/Dashboard/Navbar/Navbar";
import Sidebar from "../../Components/Dashboard/Sidebar/Sidebar";
import StatusPage from "./StatusPages";
import Users from "./Users";
import Projects from "./Projects";

function Dashboard() {
  return (
    <>
      <Navbar adminName="Mohamed" />
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<StatusPage />} />
            <Route path="/users" element={<Users />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
