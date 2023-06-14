import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  
    const error = useRouteError();
    console.error(error);

  return (
    <div>
      <section className="flex items-center py-72 bg-white text-black">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <img src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif" alt="" />
            </h2>
            <p className="text-2xl font-semibold md:text-2xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-400">
            <i>{error.statusText || error.message}</i>
            </p>
           <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 font-semibold rounded bg-violet-400 dark:text-gray-900"
            >
              Back to homepage
           </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
