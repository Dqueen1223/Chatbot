import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../header/Header';
import NotFoundPage from '../notFound';
import Chatbot from '../Home/HomePage';

toast.configure();
/**
 * @name App
 * @returns component
 */
const App = () => (
  <BrowserRouter>
    <Header />
    <div className="headerContainer">
      <ToastContainer
        autoClose={8000}
        position={toast.POSITION.TOP_CENTER}
        pauseOnHover
      />
    </div>
    <Switch>
      <Route exact path="/" render={() => <Chatbot />} />
      <Route path="*" render={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
export default App;
