import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthLayout } from "./layout/AuthLayout"
import Login from "./pages/Login"
import Registrar from "./pages/Registrar"
import OlvidePassword from "./pages/OlvidePassword"
import ConfirmarCuenta from "./pages/ConfirmarCuenta"
import NuevoPassword from "./pages/NuevoPassword"
import RutaProtegida from "./layout/RutaProtegida"
import AdministrarPacientes from "./pages/AdministrarPacientes"
import EditarPerfil from "./pages/EditarPerfil"
import CambiarPassword from "./pages/CambiarPassword"
import { AuthProvider } from './context/AuthProvider'
import { PacientesProvider } from './context/PacientesProvider'


function App() {
  console.log(import.meta.env.VITE_BACKEND_URL)
  console.log(import.meta.env.IMAGENES_URL)


  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <Routes>
            {/* el path es la pantalla principal de la pagina, las siguientes routes nos indicaran la siguiente direccion a la que sera dirigido el usuario por ejemplo en una ruta hija podemos decirlque el path de nosotros que sera dirigido a la pagina de nosotros */}
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />} />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />

            </Route>

            <Route path="/admin" element={<RutaProtegida />}>
              <Route index element={<AdministrarPacientes />} />
              <Route path="perfil" element={<EditarPerfil />} />
              <Route path="cambiar-password" element={<CambiarPassword />} />


            </Route>

          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
