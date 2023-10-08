import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Causes from "./pages/Causes";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Events from "./pages/Event";
import Login from "./pages/Login";
import UseGlobal from "./hooks/UseGlobal";
import { useState } from "react";

function App() {
  const { getUser } = UseGlobal();
  const [User, setUser] = useState(getUser());
  console.log(User, "home");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout User={User} setUser={setUser} />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="causes" element={<Causes />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News />} />
          <Route path="events" element={<Events />} />
          <Route
            path="login"
            element={<Login User={User} setUser={setUser} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
