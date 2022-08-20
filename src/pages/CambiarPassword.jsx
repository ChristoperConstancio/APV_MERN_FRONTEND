import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function CambiarPassword() {

    const { guardarPassword} = useAuth();

    const [alerta, setAlerta] = useState({});

    const[password, setPassword] = useState({
        pwd_actual : '',
        pwd_nuevo : ''
    });

    const handleSubmit = async e => {
        e.preventDefault();
        if(Object.values(password).some( campo => campo === '')){
            setAlerta({
                msg: 'Todos los campos son Obligatorios',
                error: true
            })

            return
        }
        if(password.pwd_nuevo.length < 6){
            setAlerta({
                msg: 'El password debe tener minimo 6 caracteres',
                error: true
            })

            return
        }

        const respuesta = await guardarPassword(password)
        setAlerta(respuesta)
    }
    const { msg } = alerta;
    return (
        <>
            <AdminNav />
            <h2 className="font-black text-3xl text-center mt-10">Cambiar Password</h2>
            <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''} <span className="text-indigo-600 font-bold">Password Aqui</span></p>
            <div className="justify-center flex">
                <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
                    {msg && <Alerta alerta={alerta} />}
                    <form action="" onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label htmlFor="" className="uppercase font-bold text-gray-600">Password Actual</label>
                            <input
                                type="password"
                                name="pwd_actual"
                                className="border bg-gray-100 w-full p-2 mt-5 rounded-lg"
                                placeholder="Escribe tu Password Actual"
                                onChange={ e => setPassword( {
                                    ...password,
                                    [e.target.name] : e.target.value
                                })}
                               
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="" className="uppercase font-bold text-gray-600">Nuevo Password</label>
                            <input
                                type="password"
                                name="pwd_nuevo"
                                className="border bg-gray-100 w-full p-2 mt-5 rounded-lg"
                                placeholder="Escribe tu nuevo password"
                                onChange={ e => setPassword( {
                                    ...password,
                                    [e.target.name] : e.target.value
                                })}
                                 />
                        </div>
                       
                        <button
                            type="submit "
                            className="bg-indigo-500 hover:bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5" value="Guardar Cambios">
                            Guardar Password
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
