import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginpageController from "./controller/LoginpageController";
import Mainpagecontroller from "./controller/Mainpagecontroller";
import Headerview from "./views/Headerview";
import Detailcontroller from "./controller/Detailcontoller";

function App() {
  return(



  <BrowserRouter>
  <Headerview/>
    <Routes>
      <Route path="/" element={<LoginpageController />} />
      <Route path="/home" element={<Mainpagecontroller  />} />
      <Route path="/coin/:id" element={<Detailcontroller/>}/>
    </Routes>
  </BrowserRouter>
 )}

export default App;
