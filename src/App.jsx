import React from "react";
import NavBar from "./components/Navigation/NavBar";
import Header from "./components/Details/header/Header";
import MainNav from "./components/Details/mainNav/MainNav";
import Task from "./components/Details/task/Task";
function App() {
  

  return (
    <div className="flex h-screen w-full relative">
    <NavBar/>
    <main className="md:flex-2 w-full space-y-24 overflow-y-scroll ">
      <Header />
      <MainNav />
      <Task />
    </main>
    </div>
  );
}

export default App;
