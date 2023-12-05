import Image from 'next/image'
import Navigation from '@/components/Navigation/Navigation'
import Button from '@/components/Button/Button'
import styles from './Header.module.scss'

interface Props {
  data: {
    logo: string
    nav: INavItem[]
    button: string
  }
}

interface INavItem {
  id: number
  link: string
  text: string
}

function Header({ data }: Props) {
  return (
    <header className={styles.header}>
      <Image src={data.logo} alt="Lingua" width={110} height={35} />
      <Navigation nav={data.nav} />
      <Button theme="secondary" size="small">
        {data.button}
      </Button>
    </header>
  )
}

export default Header
