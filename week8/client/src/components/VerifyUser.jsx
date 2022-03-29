import React, { useEffect } from "react";
import { useAuthToken } from "../AuthTokenContext";
import { useNavigate } from "react-router-dom";
import "../style/appLayout.css";

export default function VerifyUser() {
  const navigate = useNavigate();
  const { accessToken } = useAuthToken();

  useEffect(() => {
    async function verifyUser() {
      const data = await fetch(`${process.env.REACT_APP_API_URL}/verify-user`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const user = await data.json();

      if (user.auth0Id) {
        navigate("/app");
      }
    }

    if (accessToken) {
      verifyUser();
    }
  }, [accessToken, navigate]);

  return <div className="loading">Loading...</div>;
}
