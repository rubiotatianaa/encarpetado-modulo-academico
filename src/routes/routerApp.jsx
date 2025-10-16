import Login from "../pages/Login";
import Notas from "../pages/Notas";
import Home from "../pages/Home";
import ProtegerRutas from "../componentes/ProtegerRutas";

export const routerApp = [
  {
    path: "/",
    element: <Login />,
  },
  
  {
    path: "/home",
    element: <ProtegerRutas proteger={<Home />} />,
  },
  {
    path: "/notas",
    element: <ProtegerRutas proteger={<Notas />} />,
  },
];
