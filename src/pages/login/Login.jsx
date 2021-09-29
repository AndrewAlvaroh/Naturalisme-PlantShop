import React, {  useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const clientId =
  '506191014256-cmahv38l886a2filfp3mlonitnml20re.apps.googleusercontent.com';

function Login() {
  let history = useHistory();
  const [user, setUser] = useContext(UserContext);

  const onLoginSuccess = res => {
    console.log('Login Success:', res.profileObj);
    setUser(res.profileObj);
    localStorage.setItem('Authorization', JSON.stringify(res.profileObj));
    history.push('/');
  };

  const onLoginFailure = res => {
    console.log('Login Failed:', res);
  };
  return (
    <div>
      <div>
        <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
          <div
            className=" text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
            style={{ maxWidth: '1000px' }}
          >
            <div className="md:flex w-full">
              <div className="hidden md:block w-1/2 py-10 px-10">
                <img src="/Images/login.png" alt="login" />
              </div>
              <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                  <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                  <p>Sign in to access your account</p>
                </div>
                <div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label htmlFor className="text-base font-semibold px-1">
                        Email
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          type="email"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                          placeholder="example@gmail.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-7">
                      <label htmlFor className="text-base font-semibold px-1">
                        Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                        </div>
                        <input
                          type="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                          placeholder="************"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <button className="block w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold">
                        LOGIN
                      </button>
                      <div className="text-center my-5">OR</div>
                      <div className="text-center flex justify-center">
                        <GoogleLogin
                          clientId={clientId}
                          buttonText="Sign In"
                          onSuccess={onLoginSuccess}
                          onFailure={onLoginFailure}
                          cookiePolicy={'single_host_origin'}
                          isSignedIn={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    Belum punya akun?
                    <Link
                      to="/register"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      {' '}
                      Daftar disini
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
