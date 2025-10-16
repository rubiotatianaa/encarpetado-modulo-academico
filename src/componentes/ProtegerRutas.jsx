
import { Navigate } from 'react-router-dom';

const ProtegerRutas = ({ proteger }) => {
  const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? proteger : <Navigate to="/" />;
};

export default ProtegerRutas;
