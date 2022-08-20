import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"


export default function Header() {
  const { cerrarSesion} = useAuth();
  return (
    <header className="py-10 bg-indigo-600">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-bold text-2xl text-indigo-200 text-center">Administrador de Pacientes de {''} 
                <span className="text-white"> Veterinaria</span>
            </h1>
            <nav className="flex gap-4 flex-col lg:flex-row mt-5 items-center lg:mt-0">
                <Link to={"/admin/pacientes"} className="text-white text-lg uppercase font-bold"> Pacientes</Link>
                <Link to={"/admin/perfil"} className="text-white text-lg uppercase font-bold"> Perfil</Link>
                <button
                    type="button"
                    className="text-white text-lg uppercase font-bold"
                    onClick={cerrarSesion}> 
                    Cerrar Sesion
                    </button>
            </nav>
        </div>
    </header>
  )
}
