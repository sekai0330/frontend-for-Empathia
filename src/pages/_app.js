import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import 'regenerator-runtime/runtime';
import { UserDataContextProvider } from 'contexts/UserDataContext';
import { AuthContextProvider } from 'contexts/AuthContext';
import '../styles/styles.css'

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <AuthContextProvider>
      <UserDataContextProvider>
        <Component {...pageProps} />
      </UserDataContextProvider>
    </AuthContextProvider>
  );
}
