import GioiThieu from '@Pages/GioiThieu'
import LienHe from '@Pages/LienHe'
import TrangChu from '@Pages/TrangChu'
import { uniqueId } from 'lodash'
import { UrlPage } from './contants'

export const listRoute = [
  {
    id: uniqueId(),
    path: UrlPage.Home,
    element: <TrangChu />
  },
  {
    id: uniqueId(),
    path: UrlPage.GioiThieu,
    element: <GioiThieu />
  },
  {
    id: uniqueId(),
    path: UrlPage.LienHe,
    element: <LienHe />
  }
]
