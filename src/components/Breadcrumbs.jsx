import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className="p-4">
      <ol className="flex space-x-2">
        <li>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
        </li>
        {pathnames.map((pathname, index) => {
          const isLast = index === pathnames.length - 1;
          const href = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <React.Fragment key={href}>
              <li>
                <span className="text-gray-500">/</span>
                {isLast ? (
                  <span className="text-gray-700">{pathname}</span>
                ) : (
                  <Link to={href} className="text-blue-600 hover:text-blue-800">
                    {pathname}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
