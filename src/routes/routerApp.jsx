import Registro from "../pages/Registro";
import Login from "../pages/Login";
import Notas from "../pages/Notas";
import Home from "../pages/Home";
import Graficos from "../pages/Graficos"; 
import ProtegerRutas from "../componentes/ProtegerRutas";


export const routerApp = [
  {
    path: "/",
    element: <Registro/>,
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <ProtegerRutas proteger={<Home />} />,
  },
  {
    path: "/notas",
    element: <ProtegerRutas proteger={<Notas />} />,
  },
  {
    path:"/graficos",
    element:<ProtegerRutas proteger={<Graficos/>}/>,
  }
];
