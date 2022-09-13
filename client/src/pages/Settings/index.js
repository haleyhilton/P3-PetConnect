import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Auth from "../../utils/auth";
import './style.css'

export default function Settings() {
  const navigate = useNavigate();
  const options = [
    {
      header: {
        name: "Account",
      },
      values: [
        {
          name: "Profile Settings",
          description: "Edit your name, age and location.",
          tags: ["name", "age", "location"],
          link: "/edit-user",
        },
        {
          name: "Profile Picture Settings",
          description: "Edit your picture or set a new one as default.",
          tags: ["profile", "picture"],
          link: `/gallery/${Auth.getUser().data._id}`,
        },
        {
          name: "Dog Settings",
          description: "Edit your dog's settings",
          tags: ["dog"],
          link: "/edit-dog",
        },
      ],
    },
    {
      header: {
        name: "Billing",
      },
      values: [
        {
          name: "Billing Settings",
          description: "Edit your credit card information",
          tags: ["credit card"],
          link: "/edit-billing",
        },
      ],
    },
  ];

  const [visibleOptions, setVisibleOptions] = useState(options);

  const onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);

    if (value.trim().length === 0) {
      setVisibleOptions(options);
      return;
    }

    const returnedItems = [];
    visibleOptions.forEach((option, index) => {
      const foundOptions = option.values.filter((item) => {
        return (
          item.name.toLocaleLowerCase().search(value.trim().toLowerCase()) !==
            -1 ||
          item.description
            .toLocaleLowerCase()
            .search(value.trim().toLowerCase()) !== -1
        );
      });

      returnedItems[index] = {
        header: {
          name: option.header.name,
        },
        values: foundOptions,
      };

      if (
        option.header.name
          .toLocaleLowerCase()
          .search(value.trim().toLowerCase()) !== -1
      ) {
        returnedItems[index] = {
          header: {
            name: option.header.name,
          },
          values: options[index].values,
        };
      }

      setVisibleOptions(returnedItems);
    });
  };

  return (
    <div>
      <div className="container my-5">
        <h1>
          <span>
            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              {" "}
              <span>&lt;</span> Back{" "}
            </button>{" "}
            Settings
          </span>
        </h1>

        <input
          type="text"
          className="form-control mt-5"
          onChange={onChange}
          placeholder="Search..."
        />

        <div>
          {visibleOptions.map((option) => (
            <div key={option.header.name} className="mt-5 mt-2">
              <h3 className="settings-header">{option.header.name}</h3>

              <div>
                {option.values.map((value) => (
                  <div key={value.name}>
                    <ul className="list-group">
                      <li className="list-group-item mb-2">
                      <Link to={value.link} className="link-group">
                        <h5 className="settings-header">{value.name}</h5>
                        <h6>{value.description}</h6>
                      </Link>
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
