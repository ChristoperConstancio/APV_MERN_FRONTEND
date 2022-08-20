import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

//Create context nos permite entrar a los use de forma global

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});
    const [ cargando, setCargando ] = useState(true);

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setCargando(false);
                return 
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const { data} = await clienteAxios('/veterinarios/perfil',
                config);

                setAuth(data.perfil);
            } catch (error) {
                console.log(error.response.data.msg)
                setAuth({});
            }
            setCargando(false);
        }
        autenticarUsuario()
    },[])

    const cerrarSesion = () => {
        localStorage.removeItem('token')
        setAuth({});

    }

    const actualizarPerfil = async datos => {
        const token = localStorage.getItem('token');

        if (!token) {
            setCargando(false);
            return 
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const url = `/veterinarios/perfil/${datos._id}`;

            const data = await clienteAxios.put(url, datos, config);

            return {
                msg: 'Almacenado Correctamente'  
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true
            }
        }
    }

    const guardarPassword = async datos => {
        const token = localStorage.getItem('token');

        if (!token) {
            setCargando(false);
            return 
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const url = `/veterinarios/actualizar-password`;

            const data = await clienteAxios.put(url, datos, config)
            
            return {
                msg : data.data.msg
            }
        } catch (error) {
            return{
                msg: error.response.data.msg,
                error: true
            }
        }
    }
    return (
        <AuthContext.Provider
            value={{
                // haces visibles y disponibles para los componentes
                auth,
                setAuth,
                cargando,
                cerrarSesion,
                actualizarPerfil,
                guardarPassword
            }}>
            {/* componentes que estan adentro de la app */}
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}
export default AuthContext;