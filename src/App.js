import { Routes, Route } from 'react-router-dom';
import { routeConfig } from './config/routeConfig/routeConfig';
import './styles/index.scss';


function App() {
  return (
    <div className='app'>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <div className="page-wrapper">
              {element}
            </div>
          )}
        />
      ))}
    </Routes>
    </div>
  );
}

export default App;