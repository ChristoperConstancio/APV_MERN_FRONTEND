import { useContext } from 'react';
//ayuda a extraer datos y auth de donde
import PacientesContext from '../context/PacientesProvider';

const usePacientes = () => {
    return useContext(PacientesContext);
}

export default usePacientes
