// libs
import React, { useRef, useState } from 'react';
import Styled from 'styled-components';
import { useSDK } from '@metamask/sdk-react';

// components
import MetaMaskModal from '../modals/metamask-modal';
import ConnectWalletButton from '../buttons/connectWalletButton';

// custonm hooks
import { useClickOutside } from './../../hooks';

// img
import logo from './../../assets/images/logo_white.png';
import close from './../../assets/images/close.svg';
import minimize from './../../assets/images/minimize.svg';

export default () => {
  const { ready, sdk, connected, connecting, provider, chainId, account, balance } = useSDK();
  const [metamaskVisible, setMetamaskVisible] = useState(false);

  const metamaskButtonRef = useRef(null);
  const ref = useClickOutside((event) => {
    // eslint-disable-next-line
    // @ts-ignore
    if (metamaskButtonRef.current && !metamaskButtonRef.current.contains(event.target)) {
      setMetamaskVisible(false);
    }
  });

  const connect = async () => {
    try {
      const connectResult = await sdk?.connect();
    } catch (err) {
      console.error(`failed to connect...`, err);
    }
  };

  // const addToken = async () => {
  //   const tokenData = {
  //     address: '0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC', //0xe6D01D086a844a61641C75f1BCA572e7aa70e154 MOR
  //     symbol: 'STORJ',
  //     decimals: 8,
  //   };

  //   try {
  //     const result = await provider?.request({
  //       method: 'wallet_watchAsset',
  //       params: {
  //         type: 'ERC20',
  //         options: { ...tokenData },
  //       },
  //     });

  //     // console.log(account)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const onConnectClicked = async () => {
    if (connected) {
      if (metamaskVisible) {
        setMetamaskVisible(false);

        return;
      }

      setMetamaskVisible(true);

      return;
    }

    await connect();
  };

  const onCloseClicked = () => {
    window.backendBridge.main.close();
  };

  const onMinimizeClicked = () => {
    window.backendBridge.main.minimize();
  };

  return (
    <TopBar.Layout>
      <TopBar.Draggable />
      <TopBar.HeaderWrapper>
        <TopBar.Left>
          {/* <TopBar.CloseButton onClick={onCloseClicked} />
          <TopBar.MinimizeButton onClick={onMinimizeClicked} /> */}
        </TopBar.Left>
        <TopBar.Middle>
          <TopBar.Logo src={logo} />
          <TopBar.Header>morpheus ai</TopBar.Header>
        </TopBar.Middle>
        <TopBar.Right>
          <ConnectWalletButton
            {...{ connected, connecting, onClick: onConnectClicked }}
            ref={metamaskButtonRef}
          />
          {metamaskVisible && <MetaMaskModal {...{ account }} ref={ref} />}
        </TopBar.Right>
      </TopBar.HeaderWrapper>
    </TopBar.Layout>
  );
};

const TopBar = {
  Layout: Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0;
    background: ${(props) => props.theme.colors.core};
  `,
  Draggable: Styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 40px;
    z-index: 0;
    -webkit-app-region: drag;
  `,
  HeaderWrapper: Styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 20px;
    align-items: center;
    justify-content: space-between;
    user-select: none;
  `,
  Left: Styled.div`
    display: flex;
    flex: 1;
  `,
  Middle: Styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 250px;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: relative;
    height: 100%;
  `,
  Right: Styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    z-index: 1;
    position: relative;
  `,
  CloseButton: Styled(close)`
    display: flex;
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-right: 10px;
  `,
  MinimizeButton: Styled(minimize)`
    display: flex;
    width: 25px;
    height: 25px;
    cursor: pointer;
  `,
  Logo: Styled.img`
    display: flex;
    height: 100px;
    width: 100px;
  `,
  Header: Styled.h2`
    font-size: ${(props) => props.theme.fonts.size.medium};
    font-family: ${(props) => props.theme.fonts.family.primary.regular};
    font-weight: normal;
    color: ${(props) => props.theme.colors.balance};
    position: absolute;
    bottom: 10px;
  `,
};
