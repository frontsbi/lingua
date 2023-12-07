import cn from "classnames"
import { IDefaultTypes } from "@/types/defaultTypes"

function Section({ children, className }: IDefaultTypes) {
  return <section className={ cn('container', className) }>{children}</section>
}

export default Section
