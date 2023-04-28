import Home from "./pages/Home/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import Upload from "./pages/Upload/Upload";
import { Display } from "./pages/Display/Display";
import Test from "./pages/Test/Index";

function App() {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/" element={<Navigate replace to="/home" />} />
      <Route exact path="/upload" element={<Upload />}></Route>
      <Route exact path="/display" element={<Display />}></Route>
      <Route exact path="/Test" element={<Test />}></Route>

    </Routes>
  );
}

export default App;
