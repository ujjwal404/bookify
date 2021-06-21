import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/AuthRoute/PrivateRoute';
import { AuthProvider } from './firebase/AuthContext';
import { FirestoreProvider } from './firebase/DBcontext';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <AuthProvider>
      <FirestoreProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/auth" component={Auth} />
          </Switch>
        </BrowserRouter>
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default App;
