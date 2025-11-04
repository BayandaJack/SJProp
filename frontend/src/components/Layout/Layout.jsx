import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50">
      {/* 🧭 Navbar */}
      <Navbar />

      {/* 📦 Main content (grows to fill space between nav + footer) */}
      <main className="grow bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>


      {/* 🦶 Footer */}
      <Footer />
    </div>
  );
}
