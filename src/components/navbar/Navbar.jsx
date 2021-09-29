import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import {  GoogleLogout } from 'react-google-login';

const clientId =
  '506191014256-cmahv38l886a2filfp3mlonitnml20re.apps.googleusercontent.com';
   
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useContext(UserContext);

  const onSignoutSuccess = () => {
    alert('You have been logged out successfully');
    setUser(null);
    localStorage.removeItem('Authorization');
  };
  return (
    <div>
      <div className="bg-gray-100 ">
        <div className="lg:mx-7 lg:py-2 flex flex-col md:flex-row">
          <div className="flex justify-between items-center px-4 py-2  md:py-0 border-b md:border-b-0 border-gray-400">
            <div>
              <Link to="/">
                <img
                  src="/Images/logo.png"
                  alt="logo"
                  className="w-48 md:w-80"
                />
              </Link>
            </div>
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none block md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    className={!isOpen ? 'block' : 'hidden'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                  <path
                    className={isOpen ? 'block' : 'hidden'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex flex-col md:flex-row justify-between w-full py-4 lg:py-0`}
          >
            <div className="flex flex-col md:flex-row text-sm md:text-base">
              <Link
                to="/shop"
                className="block md:mt-4 py-2 md:py-5 px-5 text-black hover:text-gray-600"
              >
                Shop
              </Link>
              <Link
                to="/taman"
                className="block md:mt-4 py-2 md:py-5 px-5 text-black hover:text-gray-600"
              >
                Pembuatan Taman
              </Link>
              <Link
                to="/inspirasi"
                className="block md:mt-4 py-2 md:py-5 px-5 text-black hover:text-gray-600"
              >
                Galeri & Inspirasi{' '}
              </Link>
            </div>
            <div>
              {user ? (
                <p className="block md:mt-3 py-5 px-5 text-black hover:text-gray-600">
                  {user.name}
                </p>
              ) : (
                <Link
                  to="/login"
                  className="block md:mt-3 py-5 px-5 text-black hover:text-gray-600"
                >
                  login
                </Link>
              )}
            </div>
            <div className="block md:mt-3 py-5 px-5 text-black hover:text-gray-600">
                {user ?(
              <GoogleLogout
                clientId={clientId}
                buttonText="Sign Out"
                onLogoutSuccess={onSignoutSuccess}
              ></GoogleLogout>
              ) : (<div></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
