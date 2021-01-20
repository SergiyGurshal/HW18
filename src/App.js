import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Posts from './posts/Posts'
import Home from './home/Home'
import Contacts from './contacts/Contacts'
import Photos from './photos/Photos'

import NavBar from './navBar/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/home" component={Home} exact={true} />
        <Route path="/" component={Home} exact={true} />
        <Route path="/photos" component={Photos} exact={true} />
        <Route path="/posts" component={Posts} exact={true} />
        <Route path="/contacts" component={Contacts} exact={true} />
      </Router>
    </div>
  )
}

export default App
