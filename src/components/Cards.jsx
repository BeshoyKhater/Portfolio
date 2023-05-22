

const Cards = ({children,className,onClick}) => {
  return (
    <article className={`cards ${className}`} onClick={onClick}>
        {children}
    </article>
  )
}

export default Cards