import React, { FormEvent, useEffect, useState } from 'react';
import { OllamaChannel } from './../../events';
import Styled from 'styled-components';
import { isTransactionIntiated, buildTransaction } from '../utils/transaction';
import { useSDK } from '@metamask/sdk-react';

export interface DialogueEntry {
  question: string;
  answer?: string;
  answered: boolean;
}

const ChatView = (): JSX.Element => {
  const [selectedModel, setSelectedModel] = useState('mistral');
  const [dialogueEntries, setDialogueEntries] = useState<Array<DialogueEntry>>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState<DialogueEntry>();
  const { ready, sdk, connected, connecting, provider, chainId, account, balance } = useSDK();

  useEffect(() => {
    window.backendBridge.ollama.onAnswer((response) => {
      setDialogueEntries([
        ...dialogueEntries,
        { question: inputValue, answer: response.message.content, answered: true },
      ]);

      setInputValue('');
    });

    return () => {
      window.backendBridge.removeAllListeners(OllamaChannel.OllamaAnswer);
    };
  });

  const handleQuestionAsked = async (question: string) => {
    const dialogueEntry = {
      question: question,
      answered: false,
    };

    setCurrentQuestion(dialogueEntry);
    setInputValue('');

    const response = await window.backendBridge.ollama.question({
      model: selectedModel,
      query: question,
    });

    console.log(response.message.content)
    const json = JSON.parse(response.message.content);
    const message = json.response;
    const transaction = json.transaction;


    if (response) {
      setCurrentQuestion(undefined);
      setDialogueEntries([
        ...dialogueEntries,
        { question: question, answer: message, answered: true },
      ]);
      if (response) {
        setCurrentQuestion(undefined);
        setDialogueEntries([
          ...dialogueEntries,
          { question: question, answer: message, answered: true },
        ]);
        if(isTransactionIntiated(transaction)){
          const gasPrice = await provider?.request({
            "method": "eth_gasPrice",
            "params": []
          })
          const builtTx = buildTransaction(transaction, account, gasPrice)
          console.log(builtTx)
          provider?.request(builtTx)
        }
      }
    }

  };

  const handleQuestionChange = (e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <Chat.Layout>
      <Chat.Main>
        {dialogueEntries.map((entry, index) => {
          return (
            <Chat.QuestionWrapper
              key={`dialogue-${index}`}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {entry.question && <Chat.Question>{`> ${entry.question}`}</Chat.Question>}
              {entry.answer && <Chat.Answer>{entry.answer}</Chat.Answer>}
            </Chat.QuestionWrapper>
          );
        })}
        {currentQuestion && <Chat.Question>{`> ${currentQuestion.question}`}</Chat.Question>}
      </Chat.Main>
      <Chat.Bottom>
        <Chat.InputWrapper>
          <Chat.Arrow>&gt;</Chat.Arrow>
          <Chat.Input
            value={inputValue}
            onChange={handleQuestionChange}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') {
                handleQuestionAsked(inputValue);
              }
            }}
          />
          <Chat.SubmitButton onClick={() => handleQuestionAsked(inputValue)} />
        </Chat.InputWrapper>
      </Chat.Bottom>
      {/* <div onClick={() => handleQuestionAsked('How much is 5 times 5?')}>Ask Olama</div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {currentQuestion && <span style={{ backgroundColor: 'yellow' }}>{currentQuestion}</span>}
      </div> */}
    </Chat.Layout>
  );
};

const Chat = {
  Layout: Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.core};
  `,
  Main: Styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    flex-direction: column;
    padding: 20px;
  `,
  QuestionWrapper: Styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  `,
  Question: Styled.span`
    display: flex;
    color: ${(props) => props.theme.colors.notice};
    font-family: ${(props) => props.theme.fonts.family.primary.regular};
    font-size: ${(props) => props.theme.fonts.size.small};
    margin-bottom: 5px;
  `,
  Answer: Styled.span`
    display: flex;
    color: ${(props) => props.theme.colors.emerald};
    font-family: ${(props) => props.theme.fonts.family.primary.regular};
    font-size: ${(props) => props.theme.fonts.size.small};
    margin-left: 20px;
  `,
  Bottom: Styled.div`
    display: flex;
    width: 100%;
    height: 20%;
    background: ${(props) => props.theme.colors.core};
    justify-content: center;
  `,
  InputWrapper: Styled.div`
    display: flex;
    width: 90%;
    height: 40px;
    position: relative;
    align-items: center;
  `,
  Input: Styled.input`
    display: flex;
    width: 100%;
    height: 40px;
    border-radius: 30px;
    padding: 0 25px;
    background: ${(props) => props.theme.colors.core};
    border: 2px solid ${(props) => props.theme.colors.hunter};
    color: ${(props) => props.theme.colors.notice};
    font-family: ${(props) => props.theme.fonts.family.primary.regular};
    font-size: ${(props) => props.theme.fonts.size.small};
  `,
  Arrow: Styled.span`
    display: flex;
    color: ${(props) => props.theme.colors.notice};
    font-family: ${(props) => props.theme.fonts.family.primary.regular};
    font-size: ${(props) => props.theme.fonts.size.small};
    position: absolute;
    left: 10px;
  `,
  SubmitButton: Styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 25px;
    background: ${(props) => props.theme.colors.hunter};
    position: absolute;
    right: 5px;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors.emerald};
    }
  `,
};

export default ChatView;
