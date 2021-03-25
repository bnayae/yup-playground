/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppInitialProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { setLocale } from 'yup';
import GlobalStyle from '../components/GlobalStyle';
const MyApp = ({ Component, pageProps }: AppInitialProps & any) => {
  setLocale({
    mixed: {
      default: 'משהו לא מסתדר',
    },
    number: {
      min: '${min}ערך מינימום ',
    },
  });

  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
