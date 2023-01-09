import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import Userpage from "./Components/Userpage";
import VideoGamePage from "./Components/VideoGamePage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/userpage" element={<Userpage/>}/>
        <Route path="/videogames" element={<VideoGamePage/>}/>
      </Routes>
    </>
  );
}

export default App;
