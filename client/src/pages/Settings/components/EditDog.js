import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileDog from '../../../components/ProfileDog'
import { QUERY_ONE_USER } from "../../../utils/queries";
import Auth from "../../../utils/auth";
import { useQuery, useMutation } from "@apollo/client";

export default function EditDog() {
  const navigate = useNavigate();
  const profileId = Auth.getUser().data._id;
  const { loading, data } = useQuery(QUERY_ONE_USER, {
    variables: { profileId: profileId },
  });

  const profile = data?.oneUser || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const dogProfile = profile.pet;

  return (
    <div>
      <div className="container my-5">
        <h1>
          <span>
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              {" "}
              <span>&lt;</span> Back{" "}
            </button>{" "}
            Dog Settings
          </span>
        </h1>
        <ProfileDog dogs={dogProfile} />
      </div>
    </div>
  );
}
