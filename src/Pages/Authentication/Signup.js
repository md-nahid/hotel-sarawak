import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormControl from "../../Components/FormControl/FormControl";
import CustomSelect from "../../Components/Select/Select";
import { countryOptions } from "../../Components/Alldata/Select.data";
import Checkbox from "../../Components/Checkbox/Checkbox";
// import images and icons
// import { Icon } from "@iconify/react";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    mailNo: "",
    streetAddress: "",
    terms: false,
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
              <label className="font-semibold font-lato mb-1 block">Select Country</label>
              <CustomSelect options={countryOptions} />
            </div>
            <FormControl
              htmlFor="streetaddress"
              type="text"
              label="Street address"
              placeholder=""
              value={formData.streetAddress}
              onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
            />
            <div>
              <Checkbox
                htmlFor="checkbox"
                label="Aggree to our Terms and Conditions."
                checked={formData.terms}
                onChange={() => setFormData({ ...formData, terms: !formData.terms })}
              />
            </div>
            <div className="text-right mt-4">
              <button className="py-2 w-full px-5 text-lg bg-white text-red-600 font-semibold rounded-md border-2 border-transparent hover:bg-transparent duration-300 hover:text-white hover:border-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
