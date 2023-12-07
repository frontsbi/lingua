import Image from 'next/image'
import Navigation from '@/components/Navigation/Navigation'
import Button from '@/ui/Button/Button'
import styles from './Header.module.scss'
import Link from 'next/link'

interface Props {
  data: {
    logo: {
      link: string,
      image: string
    }
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
      <Link href={ data.logo.link }>
        <Image src={ data.logo.image } alt="Lingua" width={ 110 } height={ 35 } />
      </Link>
      <Navigation nav={ data.nav } />
      <Button theme="secondary" size="small">
        {data.button}
      </Button>
    </header>
  )
}

export default Header
