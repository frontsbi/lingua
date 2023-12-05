import cn from "classnames"
import styles from "./Text.module.scss"

interface Props {
  children: React.ReactNode
  className?: string
  font?: string
}

function Text({ children, font, className }: Props) {
  return (
    <p className={ cn(styles.text, { [styles.font18]: font === "font18" }, className) }>{children}</p>
  )
}

export default Text
