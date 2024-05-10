import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginpageController from "./controller/LoginpageController";
import Mainpagecontroller from "./controller/Mainpagecontroller";
import Headerview from "./views/Headerview";

function App() {
  return(



  <BrowserRouter>
  <Headerview/>
    <Routes>
      <Route path="/" element={<LoginpageController />} />
      <Route path="/home" element={<Mainpagecontroller  />} />
    </Routes>
  </BrowserRouter>
 )}

export default App;
