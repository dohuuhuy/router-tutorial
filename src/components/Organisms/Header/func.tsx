import { FaRegHandScissors } from 'react-icons/fa'
import { FaRegGrinSquintTears } from 'react-icons/fa'
import { GoHome } from 'react-icons/go'
import { UrlPage } from 'Utils/contants'

export const menu: Menu[] = [
  {
    slug: UrlPage.Home,
    label: 'Trang chủ',
    icon: <GoHome />
  },
  {
    slug: UrlPage.GioiThieu,
    label: 'Giới thiệu',
    icon: <FaRegGrinSquintTears />
  },
  {
    slug: UrlPage.LienHe,
    label: 'Liên hệ',
    icon: <FaRegHandScissors />
  }
]

export interface Menu {
  slug: string
  label: string
  icon: any
}
