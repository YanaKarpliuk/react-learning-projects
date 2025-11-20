import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs.jsx';
import Loader from "../Loader/Loader.jsx";

export default function SharedLayout() {
  return (
      <div className="container">
        <Breadcrumbs />
        <Suspense  fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </div>
  );
}
