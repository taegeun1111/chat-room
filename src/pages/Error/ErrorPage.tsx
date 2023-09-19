import React from 'react';
import {useNavigate} from 'react-router-dom';

const ErrorPage = () => {
  const nav = useNavigate();

  return (
    <div id='error'>
      <h1 className='error-title'>404 - Page not Found</h1>
      <div className='error-text'>The page you are looking for does not exist.</div>
      <div className='eroor-back' onClick={() => nav('/')}>
        홈으로 가기
      </div>
    </div>
  );
};

export default ErrorPage;
