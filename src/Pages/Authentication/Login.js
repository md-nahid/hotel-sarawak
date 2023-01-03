import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FormControl from '../../Components/FormControl/FormControl';
import cn from 'classnames';
// import images
import { Icon } from '@iconify/react';
import Checkbox from '../../Components/Checkbox/Checkbox';

export default function Login() {
  const [disabled, setDisabled] = useState(true);
  let [userInfo, setUserInfo] = useState({
    email: '',
    pass: '',
    viewPass: false,
    rmMe: false,
  });

  useEffect(() => {
    if (userInfo.email !== '' && userInfo.pass !== '' && userInfo.rmMe !== false) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userInfo]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-xl w-full m-auto mt-20">
        <div className="text-center">
          <h2 className="text-xl font-semibold font-meriweather my-3">Sign in to your account</h2>
          <p>Or New to Hotel-sarawak</p>
          <p>
            <Link to="signup" className="text-green-500 hover:text-red-500 duration-200">
              Register Now
            </Link>
          </p>
        </div>
        <div className="rounded-md bg-slate-300 shadow-md px-2 py-5 sm:px-10 sm:py-10 text-orange-600 mt-5">
          <FormControl
            htmlFor="username"
            label="Email Address"
            type="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
          <div className="mt-5">
            <FormControl
              htmlFor="password"
              label="Password"
              type={userInfo.viewPass ? 'text' : 'password'}
              placeholder="Password"
              value={userInfo.pass}
              icon={userInfo.viewPass ? <Icon icon="charm:eye-slash" /> : <Icon icon="charm:eye" />}
              onClick={() => setUserInfo({ ...userInfo, viewPass: !userInfo.viewPass })}
              onChange={(e) => setUserInfo({ ...userInfo, pass: e.target.value })}
            />
          </div>
          <div className="flex justify-between items-center mt-5">
            <Checkbox
              type="checkbox"
              value={userInfo.rmMe}
              checked={userInfo.rmMe}
              onChange={() => setUserInfo({ ...userInfo, rmMe: !userInfo.rmMe })}
              label="Remember me"
            />
            <Link to="/" className="underline">
              Forgot Password?
            </Link>
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
          <p className="mt-8 border-t border-slate-50 relative">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-300 px-4">
              Or Continue with
            </span>
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8 text-xl">
            <a
              href="https:www.facebook.com"
              className="py-3 border-0 bg-white rounded-md flex justify-center hover:bg-DarkOrange hover:text-white transition-all duration-700"
            >
              <Icon icon="eva:facebook-fill" />
            </a>
            <a
              href="https:www.twitter.com"
              className="py-3 border-0 bg-white rounded-md flex justify-center hover:bg-DarkOrange hover:text-white transition-all duration-700"
            >
              <Icon icon="akar-icons:twitter-fill" />
            </a>
            <a
              href="https:www.github.com"
              className="py-3 border-0 bg-white rounded-md flex justify-center hover:bg-DarkOrange hover:text-white transition-all duration-700"
            >
              <Icon icon="akar-icons:github-fill" />
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}
