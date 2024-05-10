import React from "react";

const Inputfield = ({ formik, data }) => {
  const { label, type, name } = data;

  return (
    <div className={formik.touched[name]&& formik.errors[name] && "error"}>
      <label>{label}</label>
      <input
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        className="form-control mt-3"
        type={type}
      />


      <span> {formik.errors[name]}.</span>
    </div>
  );
};

export default Inputfield;
