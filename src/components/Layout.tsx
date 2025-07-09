import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#f7f8fa",
    }}
  >
    <Header />

    <main
      style={{
        flex: 1,
        maxWidth: 720,
        margin: "0 auto",
        padding: "30px 16px",
        boxSizing: "border-box",
      }}
    >
      <Outlet />
    </main>

    <Footer />
  </div>
);

export default Layout;
