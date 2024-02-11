// libs
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Styled from 'styled-components';

// views
// import HomeView from './views/home';
import SettingsView from './views/settings';
import ChatView from './views/chat';

export const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/chat" />} />
      <Route path="/settings" Component={SettingsView} />
      <Route path="/chat" Component={ChatView} />
    </Routes>
  );
};

export const MainRouter = () => {
  return (
    <Router>
      <RoutesWrapper />
    </Router>
  );
};

const Router = Styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
