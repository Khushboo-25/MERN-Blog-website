import Topbar from './components/Navbar/Navbar';
import Settings from './components/Pages/Settings/Settings';
import Login from './components/Pages/Login/Login';
import Home from "./components/Pages/Home/Home";
import Write from './components/Pages/Write/Write';
import Single from "./components/Pages/Single/Single";
import Register from './components/Pages/Register/Register';
import { useContext } from "react";
import { Context } from "./Context/Context";
import Footer from './components/Footer/Footer';

// import SinglePost from './components/SinglePost/SinglePost';

import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar/>
      
      <Routes>  
          <Route exact path="/"
            element={<Home />}
          />
  
          <Route path="/posts"
            element={<Home />}
            
          />

          <Route path="/register"
            element={user?<Home/>:<Register />}
          />

          <Route path="/login"
            element={user?<Home/>:<Login />}
            />

          <Route path="/post/:postId"
            element={<Single />}
            
          />

          <Route path="/write"
            element={user?<Write/>:<Login/>}
            
          />

          <Route path="/settings"
            element={user?<Settings/>:<Login /> }
          />
          </Routes>
          <Footer/>

    </Router>
    
  );
}

export default App;
