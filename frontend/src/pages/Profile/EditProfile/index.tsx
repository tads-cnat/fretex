import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContextProfile } from "..";

const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, handleSelectTab } = useContextProfile();

  useEffect(() => {
    handleSelectTab(3)
  }, [handleSelectTab])

  if (!user) return <p>Carregando...</p>;
  if (user && user.id !== Number(id)) navigate("/login");
  return <div>EditProfile</div>;
};

export default EditProfile;
