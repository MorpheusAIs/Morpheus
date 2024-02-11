// libs
import React, { forwardRef } from 'react';
import Styled from 'styled-components';

// img
import metamaskLogo from './../../assets/images/metamask_fox_white_font.png';

export interface Props {
  connected: boolean;
  connecting: boolean;
  onClick: () => void;
}

type BadgeProps = {
  $connected: boolean;
  $connecting: boolean;
};

export default forwardRef<HTMLDivElement>((props: Props, ref) => {
  const { connected, connecting, onClick } = props;

  return (
    <MetaMaskButton.Wrapper onClick={onClick} ref={ref}>
      <MetaMaskButton.Logo src={metamaskLogo} />
      {!connecting && <MetaMaskButton.Badge $connected={connected} $connecting={connecting} />}
    </MetaMaskButton.Wrapper>
  );
});

const MetaMaskButton = {
  Wrapper: Styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 15px;
    margin: 0;
    background: ${(props) => props.theme.colors.core};
    cursor: pointer;
    transition: all 0.5s;
    border: none;
    z-index: 1;

    &:hover {
      background: ${(props) => props.theme.colors.emerald};
    }
  `,
  Logo: Styled.img`
    display: flex;
    width: 150px;
    height: 50px;
  `,
  Badge: Styled.div<BadgeProps>`
    display: flex;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${(props) => (props.$connecting ? 'orange' : props.$connected ? 'green' : 'red')};
    margin-right: 10px;
  `,
};
