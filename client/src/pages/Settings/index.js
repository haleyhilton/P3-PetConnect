import React, { useEffect, useState } from "react";

export default function Settings() {
  const options = [
    {
      header: {
        name: "Account",
      },
      values: {
        name: "Profile Settings",
        description: "Edit your name, age and location.",
        tags: ["name", "age", "location"],
      },
    },
    {
      header: {
        name: "Billing",
      },
      values: {
        name: "Billing Settings",
        description: "Edit your credit card information",
        tags: ["credit card"],
      },
    },
  ];

  const [visibleOptions, setVisibleOptions] = useState(options);

  return (
    <div>
      <div className="container my-5">
        <h1>
          <span>
            <button className="btn btn-secondary">
              {" "}
              <span>&lt;</span> Back{" "}
            </button>{" "}
            Settings
          </span>
        </h1>

        <input type="text" className="form-control" placeholder="Search..." />

        <div>
          {visibleOptions.map((option) => (
            <div key={option.header.name}>
              <h3>{option.header.name}</h3>

              <div>
                {option.values.map((value) => (
                  <div key={value.name}>
                    <ul className="list-group">
                      <li className="list-group=item mb-2">
                        <h6>{value.name}</h6>
                        <p>{value.description}</p>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
