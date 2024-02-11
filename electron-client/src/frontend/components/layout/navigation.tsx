// libs
import React from 'react';
import Styled from 'styled-components';

// components
import MainNavigationButton from '../buttons/navigationButton';

// images
import ChatImg from './../../assets/images/chat.svg';
import HomeImg from './../../assets/images/home.svg';
import SettingsImg from './../../assets/images/settings.svg';

const MainNavigation = () => {
  return (
    <TopNav.Layout>
      <TopNav.MainNavButton icon={<TopNav.ChatIcon />} text="chat" href="/chat" exact={true} />
      {/* <TopNav.MainNavButton icon={<TopNav.HomeIcon />} text="home" href="/" exact={true} /> */}
      <TopNav.MainNavButton
        icon={<TopNav.SettingsIcon />}
        text="settings"
        href="/settings"
        exact={true}
      />
    </TopNav.Layout>
  );
};

const TopNav = {
  Layout: Styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 100%;
    width: 100%;
  `,
  MainNavButton: Styled(MainNavigationButton)`
    display: flex;
    margin: 0 20px;
  `,
  Icon: Styled.img`
    display: flex;
    width: 50px;
    height: 50px;
  `,
  ChatIcon: Styled(ChatImg)`
    display: flex;
    width: 50px;
    height: 50px;
  `,
  HomeIcon: Styled(HomeImg)`
    display: flex;
    width: 50px;
    height: 50px;
  `,
  SettingsIcon: Styled(SettingsImg)`
    display: flex;
    width: 50px;
    height: 50px;
  `,
};

export default MainNavigation;
