/** @format */

import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
const LoginComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = async () => {
    const base64EmailAndPW = btoa(email + ":" + password);
    const resp = await fetch("http://localhost:9001/users/me", {
      headers: {
        Authorization: "Basic " + base64EmailAndPW,
      },
    });

    if (resp.ok) {
      localStorage.setItem("base64", base64EmailAndPW);
      history.push("/profile");
    }
  };

  return (
    <>
      <div id="containur">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success is-fullwidth" onClick={login}>
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
