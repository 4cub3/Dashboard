import React, {useContext} from "react";
import Modal from "../../shared/Modal/Modal";
import Card from "../../shared/card/Card";
import Button from "../../shared/button/Button";
import { DarkModeContext } from "../../store/DarkContext";
const Welcome = () => {
    const ctxModal = useContext(DarkModeContext)
  return (
    <Modal>
      <Card className='max-w-7xl flex flex-col items-center text-center rounded-2xl mx-8'>
        <h1 className="text-7xl font-bold font-serif tracking-wider text-indigo-950 dark:text-gray-200 ">Welcome!</h1>
        <p className="dark:text-gray-200">
          {" "}
          This Project is created by <span className="font-bold uppercase">Adedoyin Afolabi Akintunde</span>, tasked by NUPAT
          TECHNOLOGIES, certain features were added that was not included in the
          figma file,responsiveness for all screens and also dark mode. Toggle
          the dark mode button to see the effect. <span className="text-green-700 underline underline-offset-4 block mt-4">click close to clear this message</span>{" "}
        </p>
        <Button className='bg-onPrimary  text-white py-3 px-10 ' onclick={ctxModal.addModal}>Close</Button>
      </Card>
    </Modal>
  );
};

export default Welcome;
