// libs
import React from 'react';
import Styled from 'styled-components';

// custom
import BackDropComponent from './backdrop';
import RoundButton from '../buttons/roundButton';

export interface Props {
  onClick: () => void;
}

const ChooseDirectoryModalComponent = ({ onClick }: Props) => {
  return (
    <BackDropComponent>
      <ChooseDirectoryModal.Layout>
        <ChooseDirectoryModal.Title>Welcome to MorpheusAI</ChooseDirectoryModal.Title>
        <ChooseDirectoryModal.Description>
          Welcome to Morpheus client, this tool utilizes AI LLM models, which can be big in file
          size. Please select a folder you would like them to reside in.
        </ChooseDirectoryModal.Description>
        <ChooseDirectoryModal.ButtonRow>
          <RoundButton value="select folder" onClick={onClick} />
        </ChooseDirectoryModal.ButtonRow>
      </ChooseDirectoryModal.Layout>
    </BackDropComponent>
  );
};

const ChooseDirectoryModal = {
  Layout: Styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${(props) => props.theme.colors.core};
    width: 450px;
    height: 300px;
    border-radius: 30px;
    border: 5px solid ${(props) => props.theme.colors.hunter};
    padding: 20px;
  `,
  Title: Styled.h2`
    display: flex;
    color: ${(props) => props.theme.colors.emerald};
    font-size: ${(props) => props.theme.fonts.size.medium};
    font-family: ${(props) => props.theme.fonts.family.primary.bold};
    margin-bottom: 10px;
  `,
  Description: Styled.p`
    display: flex;
    color: ${(props) => props.theme.colors.emerald};
    font-size: ${(props) => props.theme.fonts.size.small};
    font-family: ${(props) => props.theme.fonts.family.primary.regular};
    text-align: center;
  `,
  ButtonRow: Styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 20px;
  `,
};

export default ChooseDirectoryModalComponent;
