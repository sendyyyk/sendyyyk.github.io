const Button = (props) => {
    const { children, styleBtn, typeBtn, title, onclick, disabled } = props;

    return (
        <button type={typeBtn} className={styleBtn} onClick={onclick} disabled={disabled} title={title}>
            {children}
        </button>
    )
}

export default Button;