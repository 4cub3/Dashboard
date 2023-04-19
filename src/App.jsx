import React, {useContext} from "react";
import NavBar from "./components/Navigation/NavBar";
import Header from "./components/Details/header/Header";
import MainNav from "./components/Details/mainNav/MainNav";
import Task from "./components/Details/task/Task";
import { DarkModeContext } from "./store/DarkContext";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const ctxDarkmode = useContext(DarkModeContext)
  return (
    <>
      {!ctxDarkmode.modalTrue && <Welcome/> }
    <div className={`flex h-screen w-full relative ${ctxDarkmode.isDark && 'dark'} `}>
    <NavBar/>
    <main className="md:flex-2 w-full lg:space-y-0 space-y-6 overflow-y-scroll dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <Header />
      <MainNav />
      <Task />
    </main>
    </div>
    </>
  );
}

export default App;
