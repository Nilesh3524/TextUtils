import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { createRoot } from "react-dom/client";

function NavScrollExample() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success");
    }
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <TextForm heading="Enter text to analyze" showAlert={showAlert} />
  //     ),
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  // ]);

  // createRoot(document.getElementById("root")).render(
  //   <RouterProvider router={router} />
  // );

  return (
    <>
    <BrowserRouter>
      <Navbar
        title="Textutils"
        about="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}/>
          <Route exact path="/about" element={<About mode={mode} />} />
        
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default NavScrollExample;
