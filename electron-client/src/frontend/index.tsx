import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { MetaMaskProvider } from '@metamask/sdk-react';
import { HashRouter } from 'react-router-dom';

// custom components
import { QrCodeModal } from './components/modals/qr-code-modal';
import AppInit from './components/layout/appInit';
import Main from './components/layout/main';
import ChooseDirectoryModalComponent from './components/modals/chooseDirectoryModal';

// helpers
import { updateQrCode } from './helpers';
import { IpcChannel } from './../events';

// theme
import ThemeProvider from './theme/themeProvider';
import GlobalStyle from './theme/index';
import './index.css';

// root
const rootElement = document.querySelector('#root') as Element;
const root = createRoot(rootElement);

const AppRoot = () => {
  const [isModelsPathSet, setIsModelPathSet] = useState(false);
  const [modelsPathFetched, setIsModelPathFetched] = useState(false);
  const [modelsPath, setModelsPath] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  // get the status of the saved folder
  // useEffect(() => {
  //   const getPath = async () => {
  //     return await window.backendBridge.main.getFolderPath();
  //   };

  //   getPath()
  //     .then((value) => {
  //       setModelsPath(value);
  //       setIsModelPathFetched(true);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // useEffect(() => {
  //   if (modelsPath) {
  //     setIsModelPathSet(true);

  //     handleOllamaInit();
  //   }
  // }, [modelsPath]);

  // useEffect(() => {
  //   window.backendBridge.main.onInit((result: boolean) => setIsInitialized(result));

  //   return () => {
  //     window.backendBridge.removeAllListeners(IpcChannel.AppInit);
  //   }
  // });

  useEffect(() => {
    handleOllamaInit();
  }, []);

  const handleOllamaInit = async () => {
    const ollamaInit = await window.backendBridge.ollama.init();

    if (ollamaInit) {
      const model = await window.backendBridge.ollama.getModel('mistral');

      if (model) {
        setIsInitialized(true);

        return;
      } else {
        console.error(`Something went wrong with pulling model ${'mistral'}`);
      }
    }

    console.error(`Couldn't initialize Ollama correctly.`);
  };

  const handleSelectFolderClicked = async () => {
    const result = await window.backendBridge.main.setFolderPath();

    if (result) {
      window.backendBridge.main.sendInit();
    }
  };

  return (
    <React.StrictMode>
      <ThemeProvider>
        <MetaMaskProvider
          debug={false}
          sdkOptions={{
            logging: {
              developerMode: false,
            },
            communicationServerUrl: 'https://metamask-sdk-socket.metafi.codefi.network/',
            checkInstallationImmediately: false,
            i18nOptions: {
              enabled: true,
            },
            dappMetadata: {
              name: 'MorpheusAI SubMod',
              url: window.location.host,
            },
            modals: {
              install: ({ link }) => {
                let modalContainer: HTMLElement;

                return {
                  mount: () => {
                    if (modalContainer) return;

                    modalContainer = document.createElement('div');

                    modalContainer.id = 'meta-mask-modal-container';

                    document.body.appendChild(modalContainer);

                    ReactDOM.render(
                      <QrCodeModal
                        onClose={() => {
                          ReactDOM.unmountComponentAtNode(modalContainer);
                          modalContainer.remove();
                        }}
                      />,
                      modalContainer,
                    );

                    setTimeout(() => {
                      updateQrCode(link);
                    }, 100);
                  },
                  unmount: () => {
                    if (modalContainer) {
                      ReactDOM.unmountComponentAtNode(modalContainer);

                      modalContainer.remove();
                    }
                  },
                };
              },
            },
          }}
        >
          {!isInitialized && <AppInit />}
          {isInitialized && <Main />}
          {/* {modelsPathFetched && !isModelsPathSet && <ChooseDirectoryModalComponent onClick={async () => await handleSelectFolderClicked()} />} */}
        </MetaMaskProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

root.render(
  <HashRouter>
    <GlobalStyle />
    <AppRoot />
  </HashRouter>,
);
