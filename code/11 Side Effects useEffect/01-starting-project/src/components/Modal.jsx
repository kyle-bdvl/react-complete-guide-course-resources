import {  useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ children, open, onClose } ) {
  const dialog = useRef();

  useEffect(()=>{
     if(open){
    dialog.current.showModal();
  }else{
    dialog.current.close();
  }
  },[open]);

  //depencies are variables or constants that the effect will watch if the var or const changes
  //in Addition, other effect dependencies would be functions or context values that depend on useState or props

  //trying without use effect
  // if(open){
  //   dialog.current.showModal();
  // }else{
  //   dialog.current.close();
  // }



  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose} >
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
