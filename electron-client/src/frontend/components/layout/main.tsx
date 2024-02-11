// libs
import React from 'react';
import Styled from 'styled-components';

// layout components
import TopBar from './topBar';
import BottomBar from './bottomBar';

// router
import { MainRouter } from '../../router';

export default () => {
  return (
    <Main.Layout>
      <Main.TopWrapper>
        <TopBar />
      </Main.TopWrapper>
      <Main.MainWrapper>
        <MainRouter />
      </Main.MainWrapper>
      <Main.BottomWrapper>
        <BottomBar />
      </Main.BottomWrapper>
    </Main.Layout>
  );
};

const Main = {
  Layout: Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.core};
  `,
  TopWrapper: Styled.div`
    display: flex;
    width: 100%;
    height: ${(props) => props.theme.layout.topBarHeight}px;
  `,
  MainWrapper: Styled.div`
    display: flex;
    width: 80%;
    height: 70%;
    border-radius: 30px;
    border: 5px solid ${(props) => props.theme.colors.hunter};
    padding: 10px;
  `,
  BottomWrapper: Styled.div`
    display: flex;
    width: 100%;
    height: 20%;
  `,
};
