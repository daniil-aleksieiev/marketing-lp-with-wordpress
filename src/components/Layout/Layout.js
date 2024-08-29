import { useState, useEffect, Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Footer, MobileButtons } from '../';

import './styles.scss';

const Layout = ({ phone, pageTitle, children }) => {
  const [isVisible, setVisibility] = useState(false);

  const handleScroll = () => {
    setVisibility(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pageTitle]);

  return (
    <Fragment>
      <Header phone={phone} />
      <main>{children}</main>
      <Footer />
      <MobileButtons phone={phone} isVisible={isVisible} />
      <ToastContainer />
    </Fragment>
  );
};

export default Layout;
