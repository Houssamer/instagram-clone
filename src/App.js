import { useState  } from 'react'
import './App.css';
import Auth from './Auth/Auth'
import { auth } from './firebase';
import Insta from './insta/Insta';

function App() {

  const [User, setUser] = useState('');
  const [open, setOpen] = useState(false);
  

  function Logout(event) {
    event.preventDefault();
    setOpen(false);
    auth.signOut();
  }

  return (
    <div className="App">
      <div className="app__auth" style={{display : !User ? 'flex' : 'none'}}>
        <Auth setUser={setUser} User={User} />
      </div>
      <div className="app__insta" style={{display : User ? 'block' : 'none'}}>
        <Insta Logout={Logout} open={open} setOpen={setOpen} user={User} />
      </div>
    </div>
  );
}

export default App;
