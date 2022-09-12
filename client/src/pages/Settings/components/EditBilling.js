import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Stripe from "../../../components/Stripe"

export default function EditBilling() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container my-5">
        <h1>
          <span>
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              {" "}
              <span>&lt;</span> Back{" "}
            </button>{" "}
            Billing Settings
          </span>
        </h1>
        <div>
          No Credit Cards Added
        </div>
      </div>
    </div>
  );
}
