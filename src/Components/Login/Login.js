import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

// <FontAwesomeIcon icon={faHome} />

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const adminData = {
      adminName: data.adminName,
      adminEmail: data.adminEmail,
    };

    const url = ``;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminData),
    }).then((res) => {
      alert("Admin Added Successfully");
      window.location.reload();
    });
  };

  return (
                <main className="login-container">
                <div>
                    <Link to="/">
                    <button className="btn fs-4 home-back-button">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Home
                    </button>
                    </Link>
                </div>
                <div className="signup-container">
                    <div className="signup-form-container p-4">
                    <h2 className="text-center p-1">Create New Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                        <div className="form-group">
                        <div>
                            <label for="name" className="w-100">
                            <h6>Name: </h6>
                            <input
                                type="text"
                                {...register("name")}
                                id="name"
                                name="name"
                                placeholder="Mike Pops"
                                className="form-control m-2"
                                required
                            />
                            {errors.name && (
                                <span className="text-danger">This field is required</span>
                            )}
                            </label>
                        </div>

                        <div>
                            <label for="email" className="w-100">
                            <h6>Email: </h6>
                            <input
                                type="email"
                                id="email"
                                {...register("email")}
                                name="email"
                                placeholder="mikepops02@gmail.com"
                                className="form-control m-2"
                                required
                            />
                            {errors.email && (
                                <span className="text-danger">This field is required</span>
                            )}
                            </label>
                        </div>

                        <div>
                            <label for="password" className="w-100">
                            <h6>Password: </h6>
                            <input
                                type="password"
                                id="password"
                                {...register("password")}
                                name="password"
                                placeholder="u<9(2R{AXs0#I"
                                className="form-control m-2"
                                required
                            />
                            {errors.password && (
                                <span className="text-danger">This field is required</span>
                            )}
                            </label>
                        </div>

                        <div>
                            <label for="re-password" className="w-100">
                            <h6>Re-type Password: </h6>
                            <input
                                type="password"
                                id="re-password"
                                {...register("re-password")}
                                name="re-password"
                                placeholder="u<9(2R{AXs0#I"
                                className="form-control m-2"
                                required
                            />
                            {errors.password && (
                                <span className="text-danger">This field is required</span>
                            )}
                            </label>
                        </div>
                        </div>
                        <div className="form-group text-right">
                        <button type="submit" className="stylish-btn btn m-2 w-100">
                            Sign Up
                        </button>
                        </div>
                    </form>
                    <div className="separator fs-5">or</div>
                        <button type="submit" className="stylish-btn2 btn m-2 w-100">
                        Continue with Google
                        </button>
                        <button type="submit" className="stylish-btn btn m-2 w-100">
                        Continue with Facebook
                        </button>
                    </div>
                </div>
                </main>
  );
};

export default Login;
