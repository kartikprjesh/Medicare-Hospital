
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("loggedInUser");

  return user ? children : <Navigate to="/login" replace />;
}

function App() {
  const isRegistered = localStorage.getItem("users");

  return (
    <BrowserRouter>
      <Routes>
        {/* First page: Signup or Login */}
        <Route
          path="/"
          element={
            <Navigate
              to={isRegistered ? "/login" : "/signup"}
              replace
            />
          }
        />

        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Home Page: Only after login */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
