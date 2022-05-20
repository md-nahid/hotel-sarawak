import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormControl from "../../Components/FormControl/FormControl";
import Select from "react-select";
// import images and icons
// import { Icon } from "@iconify/react";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    mailNo: "",
  });
  return (
    <div>
      <div className="max-w-xl w-full m-auto mt-20">
        <div className="text-center">
          <h2 className="text-xl font-semibold font-meriweather my-3">Sign up is free</h2>
          <p>Already have an account</p>
          <p>
            <Link to="signup" className="text-green-500 hover:text-red-500 duration-200">
              Login now
            </Link>
          </p>
        </div>
        <div className="rounded-md bg-DarkOrange shadow-md px-2 py-5 sm:px-10 sm:py-10 text-white mt-5">
          <div className="grid grid-cols-1 gap-5">
            <FormControl
              htmlFor="fullname"
              type="text"
              label="Full Name"
              placeholder="your full name ..."
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <FormControl
              htmlFor="email"
              type="email"
              label="Email Address"
              placeholder="your mail address ..."
              value={formData.mailNo}
              onChange={(e) => setFormData({ ...formData, mailNo: e.target.value })}
            />
            <div>
              <Select options={countryNames} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const countryNames = {
  label: "",
  value: "",
};
