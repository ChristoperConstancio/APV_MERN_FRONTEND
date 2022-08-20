import { Link } from "react-router-dom"

export default function AdminNav() {
  return (
    <nav className="gap-3">
        <Link
            to="/admin/perfil"
            className="font-bold uppercase text-gray-800"
        >
            Perfil
        </Link>
        <Link
            to="/admin/cambiar-password"
            className="font-bold uppercase text-gray-800"
        >
            Cambiar Password
        </Link>
    </nav>
  )
}
