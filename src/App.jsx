import './App.css'
import ShowDetails from '../Components/ShowDetails';
import ShowList from '../Components/ShowList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
          <Route exact path='/' Component={ShowList} />
          <Route exact path='show/:id' Component={ShowDetails} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
