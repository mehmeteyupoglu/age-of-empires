import { Home, NotFound, UnitDetails, Units } from '../pages';

const routes = [
  {
    title: 'Home Page',
    path: '/',
    exact: true,
    element: <Home />,
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
    title: 'Unit Details Page',
    path: '/units/:id',
    exact: true,
    element: <UnitDetails />,
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
