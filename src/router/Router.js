import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import Navbar from '../components/organisms/Navbar';

function Router() {
  return (
    <Routes>
      {routes.map((routeItem) => {
        const { path, exact, element, title } = routeItem;

        const RenderPrivateRouteElement = () => {
          return (
            <div className="app-container">
              <Navbar title={title} />
              {element}
            </div>
          );
        };
        return (
          <Route key={path} path={path} exact={exact} element={<RenderPrivateRouteElement />} />
        );
      })}
    </Routes>
  );
}

export default Router;
