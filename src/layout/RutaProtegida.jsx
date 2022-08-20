import { Outlet, Navigate } from "react-router-dom"
import Footer from "../components/Footer";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";


export default function RutaProtegida() {
    const { auth, cargando } = useAuth();
    const { } = auth;
    if (cargando) return 'cargando un momento...'
    return (
        <>
            <Header />
            {auth?._id ? (
                <main className="container mx-auto mt-10">
                <Outlet />
                </main>) : <Navigate to="/" />}
            <Footer/>
        </>
    )


}