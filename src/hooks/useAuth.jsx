import { useContext } from 'react';
//ayuda a extraer datos y auth de donde
import AuthContext from '../context/AuthProvider';

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth
