import { Outlet} from 'react-router-dom'

export const AuthLayout = () => {
    return (
        <>
            {/* Outlet nos ayuda a inyectar la ruta del login */}
            <main className="container mx-auto md:grid md:grid-cols-2 mt-14 gap-10 p-5 items-center">
                <Outlet/>
            </main>
            
        </>
  )
}
