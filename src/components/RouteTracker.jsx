import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "../analytics";

const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });

    console.log("Tracked:", location.pathname);
  }, [location.pathname]);

  return null;
};

export default RouteTracker;
