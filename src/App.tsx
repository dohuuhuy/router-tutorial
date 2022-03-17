import HomeLayout from '@Templates/HomeLayout'
import { UrlPage } from '@utils/contants'
import { listRoute } from '@utils/listRouter'
import { Route, Routes } from 'react-router-dom'
import './common/styles/App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={UrlPage.Home} element={<HomeLayout />}>
          {listRoute.map((v) => (
            <Route key={v.id} path={v.path} element={v.element} />
          ))}
        </Route>
      </Routes>
    </div>
  )
}

export default App
