import React, { useState } from 'react'

export type Usuario = {
    nombreUsuario: string,
    nombre?: string,
    apellido?: string,
    estado?: boolean
}

export default function Formulario() {
    const [usuario, setUsuario] = useState<Usuario>({
        nombreUsuario: 'Nombre de prueba'
    })
    const [mensaje, setMensaje] = useState('')
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="col-6">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Usuario</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" disabled={true} value={usuario.nombreUsuario}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="exampleFormControlInput2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput3" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="exampleFormControlInput3" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput4" className="form-label">Estado</label>
                        <br/>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label className="form-check-label" htmlFor="inlineRadio1">SI</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label className="form-check-label" htmlFor="inlineRadio2">NO</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
