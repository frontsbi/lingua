import cn from "classnames"
import styles from "./Section.module.scss"

interface Props {
  children: React.ReactNode
  className?: string
}

function Section({ children, className }: Props) {
  return <section className={cn("container", styles.section, className)}>{children}</section>
}

export default Section
