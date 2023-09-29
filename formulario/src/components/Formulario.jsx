import { useState } from "react";

const Formulario = ({mostrarMensaje}) =>{
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [confContrasaña, setConfConstraseña] = useState('')

    const validarForm = (e) => {
        e.preventDefault()
        if (nombre == '' || email == '' || contraseña == '' || confContrasaña == ''){
            mostrarMensaje ({
                msg:'Debes llenar tods los campos',
                color:'primary'
            })
            return
        }
        else if ( email !== ''&& contraseña !== '' && confContrasaña !==''){
            if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email)) {
                mostrarMensaje({
                    msg: 'Error el correo no es valido',
                    color: 'danger'
                })
                return
            }
            else if (contraseña !== confContrasaña){
                mostrarMensaje({
                    msg: 'Error las constraseñas no coinciden entre si',
                    color:'danger'
                })
                return
            }
        }
        mostrarMensaje({
            msg:'Registro realizado con exito 😁',
            color: 'success'
        })
        setNombre('')
        setEmail('')
        setContraseña('')
        setConfConstraseña('')
    }

    return(
        <>
            <p> Puedes registrarte con tu Email</p>
            <form onSubmit={validarForm} className="text-start">
                <div className="form-group mb-3">
                    <label>Nombre</label>
                    <input
                    className="form-control"
                    name="nombre"
                    type="text"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    ></input>
                </div>
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                    className="form-control"
                    name="email"
                    type="text"
                    onChange={(e) => setEmail (e.target.value)}
                    value={email}
                    ></input>
                </div>
                <div className="form-group mb-3">
                    <label>Confirme su contraseña</label>
                    <input
                    className="form-control"
                    name="conf-contraseña"
                    type="password"
                    onChange={(e) => setConfConstraseña (e.target.value)}
                    value={confContrasaña}
                    ></input>
                </div>
                <div className="d-grid">
                    <button className="btn btn-success" type="submit"> Registrarse </button>
                </div>
            </form>
        </>
    )
}
export default Formulario