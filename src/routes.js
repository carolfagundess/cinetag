import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "pages/Inicio";

function AppRoutes() {
  //criando rotas entre paginas
  return (
    //BP avisando que vai ter rotas// routes troca as rotas// route cria uma rota
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
