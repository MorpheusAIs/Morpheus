// libs
import React, { useEffect, useState } from 'react';
import Styled, { useTheme } from 'styled-components';
import { InfinitySpin } from 'react-loader-spinner';
import { OllamaChannel } from './../../../events';

const AppInit = () => {
  const [currentStatus, setCurrentStatus] = useState('');
  const theme = useTheme();

  useEffect(() => {
    window.backendBridge.ollama.onStatusUpdate((status: string) => {
      setCurrentStatus(status);
    });

    return () => {
      window.backendBridge.removeAllListeners(OllamaChannel.OllamaStatusUpdate);
    };
  });

  return (
    <Main.Layout>
      <Main.Draggable />
      <Main.LoaderWrapper>
        <Main.Loader width="200" color={theme.colors.emerald} />
        <Main.LoaderText>Initializing...</Main.LoaderText>
      </Main.LoaderWrapper>
      {currentStatus && <Main.StatusText>{currentStatus}</Main.StatusText>}
    </Main.Layout>
  );
};

const Main = {
  Layout: Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.core};
    position: relative;
  `,
  Draggable: Styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 35px;
    z-index: 0;
    -webkit-app-region: drag;
    `,
  LoaderWrapper: Styled.div`
    display: flex;
    width: 250px;
    height: 250px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Loader: Styled(InfinitySpin)`
    display: flex;
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  LoaderText: Styled.span`
    display: flex;
    font-size: 22px;
    width: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
    font-family: ${(props) => props.theme.fonts.family.primary.bold};
    color: ${(props) => props.theme.colors.emerald};
  `,
  StatusText: Styled.div`
    display: flex;
    color: ${(props) => props.theme.colors.notice};
    font-family: ${(props) => props.theme.fonts.family.primary.regular};
    font-size: ${(props) => props.theme.fonts.size.smallest};
    position: absolute;
    bottom: 10px;
  `,
};

export default AppInit;
