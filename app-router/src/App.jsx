import { BrowserRouter, Route, Routes} from 'react-router'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import DashBoard from './pages/DashBoard'
import BoardList from './pages/BoardList'
import GalleryList from './pages/GalleryList'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<MainPage/>}/> 
              path='/' 와 index 는 똑같은 의미. */}
          <Route index element={<MainPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/dash' element={<DashBoard/>}>
            <Route path='board' element={<BoardList/>}/>
            <Route path='gall' element={<GalleryList/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
