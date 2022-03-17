import Button from '@Atoms/Button'
import Container from '@Atoms/Container'
import { FaRegGrinTongueSquint } from 'react-icons/fa'
import styles from './styles.module.scss'

const Banner = () => {
  return (
    <Container tag='section' className={styles.banner}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <h2>Chào mừng </h2>
          <h3>Thử nghiệm router-dom-v6, typescript, css module</h3>
          <h4>Bạn đến với Non, Bạn đã sẳn sàng trải nghiệm Non chưa?</h4>

          <p>
            Thực tế, uy tín của những sản phẩm "made in Vietnam" vốn đã được
            khẳng định trên thị trường quốc tế những năm qua, lại càng được nâng
            lên trong giai đoạn khó khăn do dịch bệnh Covid-19 vừa qua.
          </p>

          <Button className={styles.btn} icon={<FaRegGrinTongueSquint />}>
            Bắt đầu
          </Button>
        </div>
      </div>
    </Container>
  )
}
export default Banner
