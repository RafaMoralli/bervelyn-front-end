import { createBrowserRouter } from 'react-router';
import Root from './components/Root';
import Home from './pages/Home';
import Filosofia from './pages/Filosofia';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Portfolio';
import Servicos from './pages/Servicos';
import ServicoDetalhe from './pages/ServicoDetalhe';
import Depoimentos from './pages/Depoimentos';
import Biosseguranca from './pages/Biosseguranca';
import Aftercare from './pages/Aftercare';
import Agendamento from './pages/Agendamento';
import Agenda from './pages/Agenda';
import Login from './pages/Login';

export const router = createBrowserRouter([
  { path: 'login', Component: Login },
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'filosofia', Component: Filosofia },
      { path: 'sobre', Component: Sobre },
      { path: 'portfolio', Component: Portfolio },
      { path: 'servicos', Component: Servicos },
      { path: 'servicos/:id', Component: ServicoDetalhe },
      { path: 'depoimentos', Component: Depoimentos },
      { path: 'biosseguranca', Component: Biosseguranca },
      { path: 'aftercare', Component: Aftercare },
      { path: 'agendamento', Component: Agendamento },
      { path: 'agenda', Component: Agenda },
    ],
  },
]);
