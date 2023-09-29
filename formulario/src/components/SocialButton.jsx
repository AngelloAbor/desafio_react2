const SocialButton = ({redsocial1, redsocial2, redsocial3}) => {
    const redessociales = 'fa-2xl d-flex align-items-center m-2 border border-black rounded-circle'
    return(
        <>
            <div className="d-flex justify-content-around">
            < button className={`btn btn-ligth fa-brands fa-${redsocial1} ${redessociales}`} type="submit"></button>
            < button className={`btn btn-ligth fa-brands fa-${redsocial2} ${redessociales}`} type="submit"></button>
            < button className={`btn btn-ligth fa-brands fa-${redsocial3} ${redessociales}`} type="submit"></button>``
            </div>
        </>
    )
}
export default SocialButton