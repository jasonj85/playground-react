import React from "react";

import User from "../../components/User";

const authIndexPage = (props) => (
  <div>
    <h1>The Auth Index Page - {props.appName}</h1>
    <User name="Jason" age={32} />
  </div>
);

authIndexPage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Amazing App (Auth)" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
