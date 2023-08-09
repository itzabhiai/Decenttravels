import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectOnBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopstate = () => {
      navigate(window.location.pathname, { replace: true });
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [navigate]);

  return null;
};

export default RedirectOnBack;
