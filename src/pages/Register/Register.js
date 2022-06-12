import { FormikConsumer, useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { signupAction } from "../../redux/actions/JiraActions";
// import { history } from "../../App";
export default function Register(props) {
  
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      const action = signupAction(values.email, values.password, values.name, values.phoneNumber);
      dispatch(action);
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Password is required!').min(6,'password must have min 6 characters').max(32,'Password have max 32 characters'),
      confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords do not match").required("Confirm password is required!"),
      email: Yup.string().matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Email is invalid!"
      ).required("Email is required!"),
      phoneNumber: Yup.string().matches(
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        "You must enter the number"
      ).required("Phone number is required!"),
      name: Yup.string().required("Name is required!")

    })
  });
  
  console.log(formik.values);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="container" style={{ height: window.innerHeight }}
    >
      <div style={{paddingLeft:'20px', paddingRight:'0'}}  className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          style={{ marginTop: "0" }}
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold"
        >
          Register
        </h2>
        <div className="mt-10">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Email
              </div>
              <input
                type="text"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Nhập vào tài khoản"
              />
              {formik.errors.email  && (<p style={{color:'red'}}>{formik.errors.email}</p>)}
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Password
                </div>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter password"
              />
              {formik.errors.password  && (<p style={{color:'red'}}>{formik.errors.password}</p>)}

            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Confirm Password
                </div>
              </div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter confirm password"
              />
              {formik.errors.confirmPassword  && (<p style={{color:'red'}}>{formik.errors.confirmPassword}</p>)}

            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Name:
                </div>
              </div>
              <input
                name="name"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your name"
              />
              {formik.errors.name  && (<p style={{color:'red'}}>{formik.errors.name}</p>)}

            </div>
            
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Phone number:
                </div>
              </div>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your phone number"
              />
              {formik.errors.phoneNumber  && (<p style={{color:'red'}}>{formik.errors.phoneNumber}</p>)}

            </div>  
            <div className="mt-10">
              <button
                type="submit"
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg"
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          Do you already have an account ?{" "}
            <NavLink
              to="login"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </form>
    
  );
}
