import { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  theme?: 'secondary' | 'ghost'
  size?: 'large' | 'small'
}

function Button({ children, className, theme, size, ...props }: Props): JSX.Element {
  return (
    <button
      type='button'
      className={ cn(
        styles.button,
        { [styles.secondary]: theme === 'secondary' },
        { [styles.ghost]: theme === 'ghost' },
        { [styles.small]: size === 'small' },
        className
      ) }
      { ...props }
    >
      {children}
    </button>
  )
}

export default Button
