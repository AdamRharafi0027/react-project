import './Button.css'

const Button = props => {
  return (
    <>
        <button onClick={props.click} className={props.className}>{props.children}</button>
    </>
  )
}

export default Button