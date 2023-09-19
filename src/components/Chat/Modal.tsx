import React from 'react';

interface Props {
  imgUrl: string;
  closeHandler: () => void;
}

const Modal = ({imgUrl, closeHandler}: Props) => {
  return (
    <div id='modal-overlay'>
      <div className='backdrop' onClick={closeHandler} />
      <div className='modal'>
        <img src={imgUrl} alt='Modal' className='modal-img' />
        <button onClick={closeHandler} className='close-btn'>
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
