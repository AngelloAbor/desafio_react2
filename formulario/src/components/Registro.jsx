import SocialButton from "./SocialButton"
import Formulario from "./Formulario"
import Alert from "./Alert"

const Registro = ({validacion,mensaje}) => {
    return(
        <>
            <div className="bg-light formulario p-4 rounded-5">
                <h1 className="fs-1">Crea una nueva cuenta</h1>
                <SocialButton>
                redsocial1 = 'Facebook'
                redsocial2 = 'Github'
                redsocial3 = 'Linkedin'
                </SocialButton>
                <Formulario mostrarMensaje={validacion}></Formulario>
                <Alert>
                mensaje = {mensaje.msg}
                color = {mensaje.color}
                </Alert>
            </div>
        </>
    )
}
export default Registro