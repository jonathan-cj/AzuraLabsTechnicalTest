// import logo from "./logo.svg";
import React from 'react';
import TopNav from './layouts/TopNav';
import { RenderRoutes } from './routes/RenderRoutes';
import { ROUTES } from './routes/Routes';

function App() {
  return (
    <TopNav routes={ROUTES}>
      <RenderRoutes />
    </TopNav>
  );
}

export default App;
