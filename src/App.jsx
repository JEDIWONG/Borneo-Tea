import Layout from "./component/Layout"
import Header from "./component/header"
import Home from "./screen/Home" 
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
          </Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
