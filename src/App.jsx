import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import SignUpPage from './pages/SignUpPage/SignUpPage.jsx';
import SignInPage from './pages/SignInPage/SignInPage.jsx';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { GlobalStyle } from './GlobalSyles.js';


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />}>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
}
export default App;
