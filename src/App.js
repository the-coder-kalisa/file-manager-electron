import { HashRouter,  Route, Routes } from "react-router-dom";
import Directory from './pages/Directory'
function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Directory />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
