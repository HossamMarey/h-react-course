import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import * as yup from "yup";

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
    },
    validateOnMount: true,
    validationSchema: yup.object().shape({
      username: yup
        .string()
        .required("username is Required!!")
        .min(4, "username must be more than 3 chars!!!"),
      email: yup.string().required().email(),
    }),
    // validate: (values) => {
    //   const errors = {};

    //   if (!values?.username?.trim()) {
    //     errors.username = "username is Required";
    //   } else if (values?.username?.trim()?.length < 4) {
    //     errors.username = "username must be more than 3 chars ";
    //   }

    //   if (!values?.email?.trim()) {
    //     errors.email = "email is Required";
    //   }

    //   if (!values?.email?.trim()?.isMatch((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))) {
    //     errors.email = "email is Required";
    //   }

    //   return errors;
    // },
    onSubmit: (values) => {
      console.log(values);
      /// login
      formik.resetForm();
    },
  });
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  console.log("formik", formik);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // onBlur={() => {
            //   formik.setFieldTouched("username", true);
            // }}
          />
          {formik.errors.username && formik.touched.username && (
            <small className="text-red-500"> {formik.errors.username} </small>
          )}
          <input
            type="text"
            placeholder="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <small className="text-red-500"> {formik.errors.email} </small>
          )}
          <div></div>
        </div>

        <button type="submit" disabled={!formik.isValid}>
          {" "}
          Submit
        </button>
      </form>
      <div>
        <ul>
          {/* <li> Value: {value}</li>
          <li> Touched: {touched ? "true" : "false"}</li>
          <li> valid: {valid ? "true" : "false"}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default BasicForm;
