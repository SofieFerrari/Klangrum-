import React from "react";
import { Link, useLocation } from "react-router-dom";

const breadcrumbLabels = {
  "about-me": "About Me",
  home: "Home",
  architecture: "Architecture",
  illustrations: "Illustrations",
  music: "Music",
  events: "Events",
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <>
      <hr className="border-t-2 border-white" />
      <nav
        aria-label="breadcrumb"
        className="invisible p-2 md:visible lg:visible"
      >
        <ol className="flex items-center space-x-2 text-sm pb-2 text-black/70">
          {pathnames.length === 0 ? (
            <li>
              <Link to="/home" className="font-semibold hover:text-black/35">
                Home
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/home" className="font-semibold hover:text-black/35">
                  Home
                </Link>
              </li>
              {pathnames.map((pathname, index) => {
                const isLast = index === pathnames.length - 1;
                const href = `/${pathnames.slice(0, index + 1).join("/")}`;
                const label =
                  breadcrumbLabels[pathname] ||
                  pathname.charAt(0).toUpperCase() + pathname.slice(1);

                return (
                  <React.Fragment key={href}>
                    {!isLast && (
                      <>
                        <li className="flex items-center">
                          <span className="mx-2">/</span>
                          <Link
                            to={href}
                            className="font-semibold hover:text-black"
                          >
                            {label}
                          </Link>
                        </li>
                      </>
                    )}
                    {isLast && (
                      <li className="flex items-center font-semibold">
                        <span className="mx-2">{label}</span>
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </>
          )}
        </ol>
        <hr className="mb-10 border-t-2 border-white" />
      </nav>
    </>
  );
};
