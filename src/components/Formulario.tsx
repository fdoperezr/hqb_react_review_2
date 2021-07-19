import React, { useEffect, useState } from 'react'

export type Usuario = {
    nombreUsuario: string,
    nombre?: string,
    apellido?: string,
    estado?: boolean
}

export default function Formulario() {
    const [usuario, setUsuario] = useState<Usuario>({
        nombreUsuario: 'Nombre de prueba',
    });
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (usuario.estado) {
            setMensaje('El usuario está activo');
        }
        else {
            setMensaje('El usuario no está activo');
        }
    }, [usuario.estado]);

    const hanlderInput = (event: any): void => {
        setUsuario({
            ...usuario,
            [event.target.name]: event.target.value
        })

    };

    const handleOnClick = () => {
        alert(mensaje);
    };

    const handlerCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario({
            ...usuario,
            estado: event.target.value === 'true'
        });
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="col-6">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Usuario</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" disabled={true} value={usuario.nombreUsuario} onChange={hanlderInput}
                            name="nombreUsuario" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="exampleFormControlInput2" value={usuario.nombre} onChange={hanlderInput}
                            name="nombre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput3" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="exampleFormControlInput3" value={usuario.apellido} onChange={hanlderInput}
                            name="apellido" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput4" className="form-label">Estado</label>
                        <br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={'true'} checked={usuario.estado} onChange={handlerCheck} />
                            <label className="form-check-label" htmlFor="inlineRadio1">SI</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={'false'} checked={!usuario.estado} onChange={handlerCheck}/>
                            <label className="form-check-label" htmlFor="inlineRadio2">NO</label>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleOnClick}>Enviar</button>
                </div>
            </div>
        </div>
    )
}
