import React from 'react';
import Styled from 'styled-components';
// import { useSDK } from '@metamask/sdk-react';

// helpers
// import { truncateString } from '../helpers';

const SettingsView = (): JSX.Element => {
  // const { ready, sdk, connected, connecting, provider, chainId, account, balance } =
  //   useSDK();

  return (
    <Settings.Layout>
      <Settings.Title>Under Construction - Preview Alpha Build</Settings.Title>
      {/* <Settings.Row>
        <Settings.Label>Connected wallet:</Settings.Label>
        <Settings.Value>{connected && account ? truncateString(account) : 'not connected'}</Settings.Value>
      </Settings.Row> */}
    </Settings.Layout>
  );
};

const Settings = {
  Layout: Styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  `,
  Title: Styled.h2`
    display: flex;
    font-family: ${(props) => props.theme.fonts.family.primary.bold};
    font-size: ${(props) => props.theme.fonts.size.medium};
    color: ${(props) => props.theme.colors.notice};
  `,
  Row: Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Label: Styled.label`
    display: flex;
    font-family: ${(props) => props.theme.fonts.family.primary.regular};
    font-size: ${(props) => props.theme.fonts.size.small};
    color: ${(props) => props.theme.colors.balance};
  `,
  Value: Styled.span`
    display: flex;
    font-family: ${(props) => props.theme.fonts.family.secondary.bold};
    font-size: ${(props) => props.theme.fonts.size.small};
    color: ${(props) => props.theme.colors.notice};
  `,
};

export default SettingsView;
