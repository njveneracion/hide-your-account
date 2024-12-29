import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        username,
        password,
      });
      navigate("/");
      toast.success("Successfully registered");
    } catch (error) {
      toast.error("Failed to register ");
    }
  };

  return (
    <div className="text-center w-25 mx-auto mt-5 card p-4 rounded-3 shadow">
      <form onSubmit={handleSubmit}>
        <h1 className="fw-bold mb-4">Sign up</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-2"
            id="floatingInput"
            placeholder="name@example.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
          Sign up
        </button>
        <p className=" mb-3 text-body-secondary">
          Already have an account? <Link to="/">Sign in</Link>
        </p>
        <p className="mt-5 mb-3 text-body-secondary">© 2024 Nj Veneracion</p>
      </form>
    </div>
  );
};

export default Register;
