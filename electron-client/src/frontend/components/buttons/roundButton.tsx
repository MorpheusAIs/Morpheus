// libs
import React from 'react';
import Styled, { useTheme } from 'styled-components';
import { TailSpin } from 'react-loader-spinner';

export interface Props {
  value: string;
  logo?: string;
  inProgress?: boolean;
  onClick: () => void;
}

const RoundButton = ({ value, inProgress, onClick }: Props) => {
  const theme = useTheme();

  return (
    <Button.Wrapper onClick={onClick}>
      {!inProgress && value}
      {inProgress && (
        <Button.Loader width="20" color={theme.colors.notice} strokeWidth={4} visible={true} />
      )}
    </Button.Wrapper>
  );
};

const Button = {
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
    font-family: ${(props) => props.theme.fonts.family.primary.regular};
    font-size: ${(props) => props.theme.fonts.size.small};
    color: ${(props) => props.theme.colors.notice};

    &:hover {
      border: 2px solid ${(props) => props.theme.colors.emerald};
    }
  `,
  Loader: Styled(TailSpin)`
    display: flex;
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export default RoundButton;
