import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRouting from "./components/PrivateRouting";
import Home from "./pages/Home";
import PublicRouting from "./components/PublicRouting";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            <PublicRouting
              isAllowed={localStorage.getItem("token")}
              redirectTo="/home"
            >
              <Login />
            </PublicRouting>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRouting
              isAllowed={localStorage.getItem("token")}
              redirectTo="/login"
            >
              <Home />
            </PrivateRouting>
          }
        />
      </Routes>
    </>
  );
}

export default App;
