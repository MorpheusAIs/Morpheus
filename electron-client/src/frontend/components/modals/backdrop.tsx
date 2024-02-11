// libs
import React from 'react';
import Styled from 'styled-components';

export interface Props {
  children: React.ReactNode;
}

const BackDropComponent = ({ children }: Props) => {
  return <BackDrop.Layout>{children}</BackDrop.Layout>;
};

const BackDrop = {
  Layout: Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s;
  `,
};

export default BackDropComponent;
