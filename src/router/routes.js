import { Home, NotFound, Todos, Units } from '../pages';

const routes = [
  {
    title: 'Home Page',
    path: '/',
    exact: true,
    element: <Home />,
    children: []
  },
  {
    title: 'Todos',
    path: '/todos',
    exact: true,
    element: <Todos />,
    children: []
  },
  {
    title: 'Units Page',
    path: '/units',
    exact: true,
    element: <Units />,
    children: []
  },
  {
    title: 'Not Found',
    path: '*',
    exact: true,
    element: <NotFound />,
    children: []
  }
];

export default routes;
