import {Route, Routes} from "react-router-dom"
import './App.css';
import {Box} from "@mui/material"
import Navbar from "./components/Navbar"
import ExerciseDetail from "./Pages/ExerciseDetail";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    
      <Box width="400px" sx={{width:{xl:"1488px"}}} m="auto" bgcolor="#C4CCD4">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}></Route>
      </Routes>
      <Footer></Footer>
    </Box>
    
  );
}

export default App;
