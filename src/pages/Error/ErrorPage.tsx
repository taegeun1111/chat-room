import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div id='error'>
      <h1 className='error-title'>404 - Page not Found</h1>
      <div className='error-text'>The page you are looking for does not exist.</div>
      <Link to={'/'} className='error-back'>
        홈으로 가기
      </Link>
    </div>
  );
};

export default ErrorPage;
