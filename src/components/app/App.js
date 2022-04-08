import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../notFound';
import Chatbot from '../Home/HomePage';

toast.configure();
/**
 * @name App
 * @returns component
 */
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Chatbot />} />
      <Route path="*" render={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
export default App;
