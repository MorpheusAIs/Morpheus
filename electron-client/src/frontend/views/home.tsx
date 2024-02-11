import React from 'react';
import Styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';

const HomeView = (): JSX.Element => {
  return (
    <Home.Layout>
      <Home.Title>Home</Home.Title>
      <Home.Loader width="50" color="#000" visible={true} radius={1} />
    </Home.Layout>
  );
};

const Home = {
  Layout: Styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.core};
    `,
  Title: Styled.h2`
    color: #000;
    font-family: ${(props) => props.theme.fonts.family.primary.regular};
  `,
  Loader: Styled(TailSpin)`
    display: flex;
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export default HomeView;
