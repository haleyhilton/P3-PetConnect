import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ONE_PET } from "../../utils/queries";
import PetCloudinary from "../../components/PetCloudinary";

const PetGallery = () => {
  return <PetCloudinary />;
};

export default PetGallery;
