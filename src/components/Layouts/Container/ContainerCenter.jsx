const ContainerCenter = (props) => {
    const {children, styleContainer} = props

    return (
        <div className={`${styleContainer} container-cent w-75vw mx-auto`}>{children}</div>
    )
}

export default ContainerCenter;