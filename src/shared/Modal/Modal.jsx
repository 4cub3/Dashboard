import React,{useContext} from "react";
import ReactDOM from "react-dom";
import { DarkModeContext } from "../../store/DarkContext";
const Modal = ({ children }) => {
    const  ctxDark = useContext(DarkModeContext)

    return(
  ReactDOM.createPortal(
    <section className={`flex items-center justify-center absolute top-0 left-0 h-screen w-screen z-[1000] ${ctxDark.isDark && 'dark'} bg-[rgba(0,0,0,0.8)]`}>
      {children}
    </section>,
    document.getElementById("modal")
  )
    )
};

export default Modal;
