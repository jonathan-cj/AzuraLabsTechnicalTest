import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { ROUTES } from './Routes';

export const RenderRoutes = () => {
  return (
    <div className="h-full">
      <Routes>
        {ROUTES.map((route, i) => {
          return (
            <Route 
              key={route.key}
              path={route.path}
              exact
              element={route.element}
            />
          );
        })}
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<h1>Not Found!</h1>}/>
      </Routes>
    </div>
  )
}