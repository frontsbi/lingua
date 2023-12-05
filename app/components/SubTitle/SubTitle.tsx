import cn from "classnames"
import styles from "./SubTitle.module.scss"

interface Props {
  children: React.ReactNode
  className?: string
}

function SubTitle({ children, className }: Props) {
  return <div className={cn(styles.subtitle, className)}>{children}</div>
}

export default SubTitle
