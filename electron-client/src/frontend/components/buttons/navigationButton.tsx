// libs
import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Styled from 'styled-components';

interface ButtonProps {
  active: 'active' | '';
}

interface MainNavButtonProps {
  text: string;
  icon: ReactNode;
  href: string;
  exact: boolean;
}

const MainNavigationButton = ({ text, icon, href, exact }: MainNavButtonProps) => {
  const path = useLocation();
  const active = exact ? path.pathname === href : path.pathname.includes(href);

  return (
    <MainNavButton.Wrapper to={href} active={active ? 'active' : ''}>
      {icon}
      <MainNavButton.ButtonText>{text}</MainNavButton.ButtonText>
    </MainNavButton.Wrapper>
  );
};

const MainNavButton = {
  Wrapper: Styled(Link)<ButtonProps>`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 15px;
    align-items: center;
    color: ${(props) => (props.active === 'active' ? props.theme.colors.emerald : props.theme.colors.balance)};
    font-family: ${(props) => props.theme.fonts.family.primary.bold};
    font-size: ${(props) => props.theme.fonts.size.medium};
    text-decoration: none;
    transition: border 0.25s, color 0.25s;

    &:hover span {
      color: ${(props) => props.theme.colors.emerald};
    }
  `,
  Icon: Styled.img`
    display: flex;
    width: 30px;
    height: 30px;
  `,
  ButtonText: Styled.span`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-family: ${(props) => props.theme.fonts.family.primary.regular};
    font-size: ${(props) => props.theme.fonts.size.small};
    color: ${(props) => props.theme.colors.hunter};
    padding: 0 12px;
  `,
};

export default MainNavigationButton;
