import { Link } from "react-router-dom"
import { useState } from "react"
import clienteAxios from "../config/axios"
import Alerta from "../components/Alerta"

  

function OlvidePassword() {
  const [email, setEmail] = useState('');
  const [alerta, setAlerta ]  = useState({});

  const handleSubmit = async e => {
    e.preventDefault();
    if(email === '' || email.length < 6){
      // se setea el state con un objeto que tiene un mensaje y un boleano para despues verificar si tiene mensaje que lo muestre
      setAlerta({msg: "El Email es obligatorio", error: true})
      return
    }
    try {
      // extraemos los datos del post -- al final el email lo pedimos en objeto porque se hizo en JSON en el bakcend
      const { data } = await clienteAxios.post('/veterinarios/olvide-password',{ email })
      console.log(data);

      setAlerta({ msg: data.msg})
    } catch (error) {
      setAlerta({
        // este mensaje lo mandara el backend
        msg: error.response.data.msg,
        error: true
      })
    }
  }
  const {msg } = alerta;
  return (
    <>

      <div>
        <div>
          <h1 className="text-indigo-600 font-black text-6xl">Recupera tu accesso y no Pierdas a {""}
            <span className="text-black">tus Pacientes</span>
          </h1>
        </div>
      </div>
      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
      {msg && <Alerta
          alerta={alerta}
        />}
        <form action="" onSubmit={handleSubmit}>
          <div className="my-5">
            <label htmlFor=""
              className="uppercase text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input type="email"
              placeholder="Tu Email"
              className="border  w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange= { e => setEmail(e.target.value)}
            />
        </div>
        <input type="submit"
                   value="Enviar Instrucciones"
                   className="bg-indigo-700 w-full py-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md: w-2/5" />

        </form>
        <nav className='mt-10 lg:flex lg:justify-between'>
            <Link className='block text-center my-5 text-gray-500' 
                  to="/">Tienes una cuenta? Inicia Sesion  </Link>
            <Link className='block text-center my-5 text-gray-500' 
                  to="/registrar">No tienes Cuenta? Registrate  </Link>

          </nav>
      </div>

    </>
  )
}

export default OlvidePassword