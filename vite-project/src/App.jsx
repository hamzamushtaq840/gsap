import { Route, Routes } from "react-router-dom"
import ScrollTriggers from "./components/ScrollTriggers"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ScrollTriggers />}></Route>
      </Routes>
    </>
  )
}

export default App
