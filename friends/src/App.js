import Login from './components/Login'
import FriendsList from './components/FriendsList'
import {Switch, useHistory, Route, Link} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';

function App() {
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem('token')
    history.push('/login')
    console.log('Logged Out ༼ つ ◕_◕ ༽つ GoodBye')
  }

  return (
    <div className="App">
      <h1>Hi Friend</h1>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link onClick={logout}>Logout</Link>
        </li>
        <li>
          <Link to='/protected'>FriendsList</Link>
        </li>
      </ul>

      <Switch>
        {/* <Login />
        <FriendsList /> */}
        <PrivateRoute path='/protected' component={FriendsList} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
