
import Login from "../pages/Login";
import Notas from "../pages/Notas";
import ProtegerRutas from "../components/ProtegerRuta";

export const routerApp = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/notas",
    element: <ProtegerRutas proteger={<Notas />} />,
  },
];
