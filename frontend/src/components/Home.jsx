import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center w-25 mx-auto mt-5 card p-4 rounded-3 shadow">
      <form>
        <h1 className="fw-bold mb-4">Login</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control mb-2"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
          Sign in
        </button>
        <p className=" mb-3 text-body-secondary">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        <p className="mt-5 mb-3 text-body-secondary">© 2024 Nj Veneracion</p>
      </form>
    </div>
  );
};

export default Home;
