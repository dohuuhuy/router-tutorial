import Container from '@Atoms/Container'
import { useLocation } from 'react-router-dom'

const LienHe = () => {
  let location = useLocation()
  const search = new URLSearchParams(location.search)

  const m = search.get('m')
  return (
    <Container>
      <p>Đây là trang liên hệ</p>
      <pre>
        {' '}
        <code>{m}</code>
      </pre>
    </Container>
  )
}
export default LienHe
