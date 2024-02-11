// libs
import React, { forwardRef } from 'react';
import Styled from 'styled-components';

// helpers
import { truncateString } from './../../helpers';

// img
import copyIcon from './../../assets/images/copy-link.png';

export interface Props {
  account: string;
}

const MetaMaskModal = forwardRef<HTMLDivElement>((props: Props, ref) => {
  const { account } = props;

  const isClipboardAvailable = navigator.clipboard && navigator.clipboard.writeText !== undefined;

  return (
    <MetaMaskRoot.Layout ref={ref}>
      <MetaMaskRoot.Group>
        <MetaMaskRoot.Label>Connected Account</MetaMaskRoot.Label>
        {isClipboardAvailable ? (
          <MetaMaskRoot.Row>
            <MetaMaskRoot.Value>{truncateString(account)}</MetaMaskRoot.Value>
            <MetaMaskRoot.CopyButton
              src={copyIcon}
              onClick={() => navigator.clipboard.writeText(account)}
            />
          </MetaMaskRoot.Row>
        ) : (
          <MetaMaskRoot.Value>{truncateString(account)}</MetaMaskRoot.Value>
        )}
      </MetaMaskRoot.Group>
      <MetaMaskRoot.Group></MetaMaskRoot.Group>
    </MetaMaskRoot.Layout>
  );
});

const MetaMaskRoot = {
  Layout: Styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 70px;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.core};
    border: 5px solid ${(props) => props.theme.colors.hunter};
    position: absolute;
    right: -10px;
    top: 75px;
    padding: 10px;
  `,
  Group: Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 30px;
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
  CopyButton: Styled.img`
    display: flex;
    width: 15px;
    height: 15px;
    margin-left: 5px;
    cursor: pointer;
  `,
};

export default MetaMaskModal;
