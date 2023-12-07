import cn from "classnames"
import styles from "./Heading.module.scss"

interface Props {
  children: React.ReactNode
  className?: string
  hlevel: string
  isBold?: boolean
}

function Heading({ children, className, hlevel, isBold }: Props) {
  switch (hlevel) {
    case "h1":
      return <h1 className={ cn(styles.h1, { [styles.bold]: isBold }, className) }>{children}</h1>
    case "h2":
      return <h2 className={ cn(styles.h2, { [styles.bold]: isBold }, className) }>{children}</h2>
    default: return  
  }
}

export default Heading
