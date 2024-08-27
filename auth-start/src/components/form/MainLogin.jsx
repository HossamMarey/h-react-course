import axios from "axios";
import React, { useCallback } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const MainLogin = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    validateOnMount: false,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required().email(),
      password: Yup.string().required(),
      // .min(8, ERRORS_STR.FORM_PASSWORD).matches(PASSWORD_REGEX, ERRORS_STR.FORM_PASSWORD)
    }),
    onSubmit: async (values) => {
      ///
      console.log(values);
    },
  });

  return (
    <div className="flex items-center justify-center py-12 min-h-screen ">
      <div className="w-full max-w-md bg-amber-950/20 border border-amber-500/50 rounded-lg shadow-lg p-6">
        <h1 className="text-xl text-center font-bold"> Login </h1>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 mt-4"
        >
          <div>
            <label htmlFor="email"> Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full p-2 border  rounded-lg 
                ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500/50"
                    : "border-amber-500/50"
                }
                `}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="password"> Password *</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full p-2 border  rounded-lg 
                ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500/50"
                    : "border-amber-500/50"
                }
                `}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-amber-500/50 rounded-lg mt-3"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainLogin;
