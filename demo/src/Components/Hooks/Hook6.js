import React, { useEffect, useState } from "react";

const HookSix = () => {
  useEffect(() => {
    getUser();
  }, [true]);

  const [user, updateUser] = useState([]);

  const getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((alluser) => {
        updateUser(alluser);
      });
  };

  const [details, updateDetails] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const getDetails = (id) => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((allUser) => {
        updateDetails(allUser);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <ul className="list-group">
              <li className="list-group-item active">User List</li>
              {user.map((info, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    <a onClick={getDetails.bind(this, info.id)}>{info.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-8"></div>
          < div className="card" ></div>
        </div>
      </div>
    </>

  );
};

export default HookSix;