// libs
import React, { forwardRef } from 'react';
import Styled from 'styled-components';

// img
import wallet from './../../assets/images/wallet.png';

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
    <ConnectWalletButton.Wrapper onClick={onClick} ref={ref}>
      <ConnectWalletButton.Logo src={wallet} />
      <ConnectWalletButton.Text>{connected ? 'connected' : 'connect'}</ConnectWalletButton.Text>
      {!connecting && <ConnectWalletButton.Badge $connected={connected} $connecting={connecting} />}
    </ConnectWalletButton.Wrapper>
  );
});

const ConnectWalletButton = {
  Wrapper: Styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-radius: 30px;
    margin: 0;
    background: ${(props) => props.theme.colors.core};
    cursor: pointer;
    transition: all 0.5s;
    border: 2px solid ${(props) => props.theme.colors.hunter};
    z-index: 1;
    padding: 0 15px;

    &:hover {
      border: 2px solid ${(props) => props.theme.colors.emerald};
    }
  `,
  Logo: Styled.img`
    display: flex;
    width: 20px;
    height: 20px;
    margin-right: 10px;
  `,
  Text: Styled.span`
    display: flex;
    font-family: ${(props) => props.theme.fonts.family.primary.regular};
    font-size: ${(props) => props.theme.fonts.size.small};
    color: ${(props) => props.theme.colors.notice};
    margin-right: 10px;
  `,
  Badge: Styled.div<BadgeProps>`
    display: flex;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${(props) => (props.$connecting ? 'orange' : props.$connected ? 'green' : 'red')};
  `,
};
