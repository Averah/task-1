import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import ButtonPageLazy from './pages/ButtonPage/ButtonPageLazy';
import UserFormPageLazy from './pages/FormPage/UserFormPageLazy';
import { MainPage } from './pages/MainPage/MainPage';
import YearCalendarPageLazy from './pages/YearCalendarPage/YearCalendarPageLazy';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback="">
        <Routes>
          <Route path={''} element={<MainPage />} />
          <Route path={'/calendar'} element={<YearCalendarPageLazy />} />
          <Route path={'/form'} element={<UserFormPageLazy />} />
          <Route path={'/button'} element={<ButtonPageLazy />} />
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
