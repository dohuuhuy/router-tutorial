import Button from '@Atoms/Button'
import Container from '@Atoms/Container'
import Banner from '@Organisms/Banner'
import { UrlPage } from '@utils/contants'
import { find, first } from 'lodash'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { listDemo } from './func'
import styles from './styles.module.scss'

const TrangChu = () => {
  const navigate = useNavigate()
  const onDirect = () => {
    navigate(UrlPage.LienHe + '?m=6', {
      state: {
        a: 1,
        b: 2
      }
    })
  }

  const [state, setstate] = useState<any>({ selectedItem: first(listDemo) })

  const onChange = (event: any) => {
    console.log({ event })

    const { value } = event.target
    setstate((v: any) => ({
      ...v,
      selectedItem: find(listDemo, { name: value })
    }))
  }

  const clear = () => {
    setstate((v: any) => ({ ...v, selectedItem: null }))
  }

  console.log('state', state)
  return (
    <>
      <Banner />
      <Container>
        <p>Đây là trang chủ</p>
        <Button onClick={onDirect}>push state</Button>

        <div className={styles.divSelect}>
          <label>Select dvd </label>
          <input
            id='shit'
            onChange={onChange}
            value={state?.selectedItem?.name || ''}
            onFocus={clear}
            style={{ width: '300px' }}
            type='search'
            list='listDemo'
            placeholder='chọn gì đi'
            className={styles.selectSearch}
          />
          <datalist id='listDemo'>
            {listDemo.map((v, i) => {
              return (
                <option id='huyi' data-test={v.id} key={i}>
                  {v.name}
                </option>
              )
            })}
          </datalist>
        </div>
      </Container>
    </>
  )
}
export default TrangChu
