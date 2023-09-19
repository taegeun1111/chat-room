import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout = ({children}: Props) => {
  return <div id='layout'>{children}</div>;
};
export default Layout;
