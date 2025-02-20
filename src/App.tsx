import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage'
import Quiz from './pages/quiz/Quiz'
import HistoryPage from "./pages/HistoryPage/HistoryPage"
import "./App.css"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/quiz' Component={Quiz} />
        <Route path='/history' Component={HistoryPage} />
      </Routes>
    </>
  )
}

export default App
