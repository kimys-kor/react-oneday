import axios, { AxiosResponse, AxiosResponseHeaders } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../globalState/useAuthStore";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const navigate = useNavigate();

  const { accessToken, setAccessToken } = useAuthStore();

  useEffect(() => {
    let isLoggedIn = sessionStorage.getItem("is_logged");
    const booleanValue = isLoggedIn === "true";

    if (!booleanValue) {
      navigate("/");
    }

    axios
      .get("/user/refresh")
      .then((res) => {
        const head: AxiosResponseHeaders = res.headers as AxiosResponseHeaders;
        let jwtToken = head.get("Authorization") as string;
        setAccessToken(jwtToken);
      })
      .catch((err) => {
        navigate("/");
      });

    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
