import Link from 'next/link'
import styles from './Navigation.module.scss'

interface INavItem {
  id: number
  link: string
  text: string
}

interface Props {
  nav: INavItem[]
}

function Navigation({ nav }: Props) {
  return (
    <nav className={ styles.nav }>
      <ul className={ styles.list }>
        {nav.map((item: INavItem) => (
          <li key={ item.id } className={ styles.item }>
            <Link className={ styles.link } href={ item.link }>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
