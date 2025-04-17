import { Route, Routes } from "react-router";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Timeline from "./pages/Timeline";
import Contact from "./pages/Contact";
import Submit from "./pages/Submit";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="submit" element={<Submit />} />
        <Route element={<PrivateRoute/>}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
