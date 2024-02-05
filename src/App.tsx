import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import UserFormPageLazy from './pages/FormPage/UserFormPageLazy';
import { MainPage } from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Suspense fallback="">
        <Header />
        <Routes>
          <Route path={''} element={<MainPage />} />
          <Route path={'/calendar'} />
          <Route path={'/form'} element={<UserFormPageLazy />} />
          <Route path={'/button'} />
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
