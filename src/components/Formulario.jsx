
import { useState, useEffect } from 'react';
import Alerta from './Alerta';
import usePacientes from '../hooks/usePacientes';

export default function Formulario() {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [id, setId] = useState(null);


    const [alerta, setAlerta] = useState({});

    const { guardarPaciente, paciente } = usePacientes();

    useEffect( () => {
        if(paciente?.nombre){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
            setId(paciente._id)

        }
    }, [paciente])
    const handleSubmit = e => {
        e.preventDefault();

        //validar el formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }
        
        guardarPaciente({ nombre, propietario, email, fecha, sintomas, id })
        setAlerta({
            msg: 'Guardado Correctamente'
        });
        setNombre('');
        setEmail('');
        setFecha('');
        setId('');
        setSintomas('');
        setPropietario('');

    }

    const { msg } = alerta;
    return (
        <>
         <h2 className="font-black text-3xl text-center"> Administrador de pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Añade tus{' '}
                <span className="text-indigo-600 font-bold ">Pacientes y Administralos</span>
            </p>

            <form action="" className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
                onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="nombre"
                        className="font-bold text-gray-700 uppercase">
                        Nombre Mascota</label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Nombre Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="font-bold text-gray-700 uppercase"
                    >
                        Nombre Propietario</label>
                    <input
                        type="text"
                        id="propietario"
                        placeholder="Nombre Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="font-bold text-gray-700 uppercase">
                        Email Propietario</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Email Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="fecha"
                        className="font-bold text-gray-700 uppercase">
                        Fecha alta</label>
                    <input
                        type="date"
                        id="fecha"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="font-bold text-gray-700 uppercase">
                        Sintomas</label>
                    <textarea
                        id="sintomas"
                        placeholder="Describe los sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer
                    transition-colors"
                    value={id ? 'Guardar Cambios' : 'Agregar Paciente'} />

            </form>
            {msg && <Alerta alerta={alerta} />}

        </>
    )
}
