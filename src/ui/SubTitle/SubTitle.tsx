import cn from "classnames"
import { IDefaultTypes } from '@/types/defaultTypes'
import styles from "./SubTitle.module.scss"

function SubTitle({ children, className }: IDefaultTypes) {
  return <div className={ cn(styles.subtitle, className) }>{children}</div>
}

export default SubTitle
