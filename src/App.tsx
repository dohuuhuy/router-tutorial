import { Route, Routes } from 'react-router-dom'
import HomeLayout from 'Templates/HomeLayout'
import { UrlPage } from 'utils/contants'
import './common/styles/App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={UrlPage.Home} element={<HomeLayout />}>
          {/* <Route index element={<TrangChu />} />
          <Route path={UrlPage.GioiThieu} element={<GioiThieu />} />
          <Route path={UrlPage.LienHe} element={<LienHe />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
