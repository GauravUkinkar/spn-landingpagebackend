import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import Login from "./comps/Login";
import Sidebar from "./comps/Sidebar";
import { useEffect, useState } from "react";
import Contacts from "./pages/Contacts";

function App() {
  const [search, setSearch] = useState("");
  const [login, SetLogin] = useState(() => {
    return localStorage.getItem("login") === "true";
  });

  useEffect(() => {
    localStorage.setItem("login", login);
  }, [login]);

  function AuthLogin() {
    SetLogin(true);
  }

  function logout() {
    SetLogin(false);
  }

  return (
    <div className="App">
      <BrowserRouter>
        {login && <Dashboard
       setSearch={setSearch}
       search={search}
       logout={logout}
        />}
        <Routes>
          {login ? (
            <Route path="/" element={<Contacts search={search} />} />
          ) : (
            <Route
              path="/*"
              element={<Login AuthLogin={AuthLogin} logout={logout} />}
            />
          )}

         
        </Routes>
      </BrowserRouter>
      {/* <Login/> */}
    </div>
  );
}

export default App;
