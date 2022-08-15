import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import Login from "./pages/Login"
import LogOut from "./pages/LogOut"
import { useState } from "react"
import MyPosts from "./pages/MyPosts"
import LinkTag from "./components/LinkTag"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') === 'true' || false)

  return (
    <div className="App">
      <Router>
        <div className="h-16 flex justify-between items-center mx-10">
          <nav className="flex h-full gap-5 items-center flex-1">
            <LinkTag to='/'>Home</LinkTag>
            {!isAuth? <LinkTag to='/login'>Login</LinkTag> : <>
            <LinkTag to='/posts/create'>Create</LinkTag>
            <LinkTag to='/posts/mine'>My post</LinkTag></>}
          </nav>
          <div>
            {isAuth && <LogOut setIsAuth={setIsAuth} />}
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/posts/create" element={<CreatePost/>} />
          <Route path="/posts/mine" element={<MyPosts isAuth={isAuth}/>} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
