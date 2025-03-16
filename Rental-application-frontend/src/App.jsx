import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
import { About } from './pages/About';

function App() {

  return (
    <BrowserRouter>
      <div className="App text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
