

export default function Alerta({alerta}) {
  return (
    <div className={`${alerta.error ? 'from-red-500 to-red-600' : 'from-indigo-600 to-indigo-400'} bg-gradient-to-r text-center p-3 rounded-xl text-sm text-white uppercase mb-6 font-bold ` }>
        {alerta.msg}
    </div>
  )
}
