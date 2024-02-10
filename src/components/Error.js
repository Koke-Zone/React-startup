import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-page">
      <h1>Error Page</h1>
      <p>Oops! no such page exits.</p>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
