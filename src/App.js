import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Directory from './pages/Directory'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Directory />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
