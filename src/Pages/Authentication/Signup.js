import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FormControl from '../../Components/FormControl/FormControl';
import CustomSelect from '../../Components/Select/Select';
import { countryOptions } from '../../Components/Alldata/Select.data';
import Checkbox from '../../Components/Checkbox/Checkbox';
import cn from 'classnames';
// import icons
import { Icon } from '@iconify/react';

export default function Signup() {
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    pass: '',
    viewPass: false,
    mailNo: '',
    streetAddress: '',
    country: '',
    terms: false,
  });
  useEffect(() => {
    if (
      formData.fullName !== '' &&
      formData.mailNo !== '' &&
      formData.pass !== '' &&
      formData.streetAddress !== '' &&
      formData.country !== '' &&
      formData.terms
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="max-w-xl w-full m-auto mt-20">
        <div className="text-center">
          <h2 className="text-xl font-semibold font-meriweather my-3">Please, Fillout the Form</h2>
          <p>Already have an account</p>
          <p>
            <Link to="/auth" className="text-green-500 hover:text-red-500 duration-200">
              Login now
            </Link>
          </p>
        </div>
        <div className="rounded-md bg-slate-300 shadow-md px-2 py-5 sm:px-10 sm:py-10 text-orange-600 mt-5">
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
              htmlFor="password"
              label="Password"
              type={formData.viewPass ? 'text' : 'password'}
              placeholder="Password"
              value={formData.pass}
              icon={formData.viewPass ? <Icon icon="charm:eye-slash" /> : <Icon icon="charm:eye" />}
              onClick={() => setFormData({ ...formData, viewPass: !formData.viewPass })}
              onChange={(e) => setFormData({ ...formData, pass: e.target.value })}
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
              <CustomSelect
                options={countryOptions}
                onChange={(v) => setFormData({ ...formData, country: v.value })}
              />
            </div>
            <FormControl
              htmlFor="streetaddress"
              type="text"
              label="Street address"
              placeholder=""
              value={formData.streetAddress}
              onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
            />
            <div className="font-semibold">
              <Checkbox
                htmlFor="checkbox"
                label="Aggree to our Terms and Conditions."
                checked={formData.terms}
                onChange={() => setFormData({ ...formData, terms: !formData.terms })}
              />
            </div>
            <div className="text-right mt-4">
              <button
                disabled={disabled}
                type="submit"
                className={cn(
                  'py-3 border-0 w-full rounded-md font-bold transition-all duration-700',
                  disabled ? 'bg-slate-200 cursor-not-allowed' : 'bg-DarkOrange text-white border-2'
                )}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
