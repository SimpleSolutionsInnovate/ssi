import React from "react";
import Title from "../others/Title";

function Modal() {
  return (
    <div className='w-full h-screen flex justify-center items-center absolute top-0 bottom-0 left-0 right-0'>
      <div className='bg-black opacity-80 w-full h-full absolute'></div>
      <div className='modal-content w-40 h-40 bg-white rounded-md shadow-md z-40 p-2'>
        <div className='modal-title'>
          <Title title='Modal Title' align='left' />
        </div>
      </div>
    </div>
  );
}

export default Modal;
