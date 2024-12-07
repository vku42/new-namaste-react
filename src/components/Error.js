import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Opps!!! {err.status} Error</h1>
      <p>{err.statusText}</p>
    </div>
  );
};

export default Error;
