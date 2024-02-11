// libs
import React, { useState, useContext, useEffect } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Styled, { ThemeContext } from 'styled-components';
import MainNavigation from './navigation';

export default () => {
  return (
    <LeftBar.Layout>
      <LeftBar.HeaderWrapper>
        <LeftBar.MainNav />
      </LeftBar.HeaderWrapper>
    </LeftBar.Layout>
  );
};

const LeftBar = {
  Layout: Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #ddd;
    padding-top: 20px;
    background: ${(props) => props.theme.colors.core};
    justify-content: center;
    align-items: center;
  `,
  HeaderWrapper: Styled.div`
    display: flex;
    flex-direction: column;
  `,
  Header: Styled.h2`
    font-size: ${(props) => props.theme.fonts.size.medium};
    font-family: ${(props) => props.theme.fonts.family.primary.regular};
  `,
  MainNav: Styled(MainNavigation)`
    display: flex;
    flex-direction: column;
  `,
};
