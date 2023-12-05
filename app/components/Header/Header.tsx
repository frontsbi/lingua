import Image from 'next/image'
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
    <header className={ styles.header }>
      <Image src={ data.logo } alt="Lingua" width={ 110 } height={ 35 } />
    </header>
  )
}

export default Header
