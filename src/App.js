import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Login from "./components/Login/Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Header />

      {user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
