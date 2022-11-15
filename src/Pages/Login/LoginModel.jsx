import React from 'react';

const LoginModel = () => {
    return (
        <section>
           <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal md:items-center items-end ">
                <div className="modal-box w-full md:w-5xl bg-orange-500 ">
                  <label htmlFor="my-modal-3" className="btn btn-sm md:btn-sm btn-circle absolute right-3 top-10 bg-red-100 md:text-6xl text-red-500">✕</label>
                  <h3 className=" text-gray-900 text-left text-xl">Welcome Back!!</h3>
                  <p className="font-bold text-gray-900 text-left text-3xl">Login</p>
                  <div className="w-full max-w-md p-8 space-y-3 rounded-xl text-gray-900">
                    <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                      <div className="space-y-1 text-sm">
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md placeholder:text-gray-400 dark:border-gray-700 bg-gray-100 text-gray-900 focus:dark:border-violet-400" />
                      </div>
                      <div className="space-y-1 text-sm">
                        <input type="text" name="password" placeholder="password" className="w-full px-4 py-3 rounded-md placeholder:text-gray-400  bg-gray-100 text-gray-900 focus:dark:border-violet-400" />
                      </div>
                      <button className="w-full p-3 text-center text-xl rounded-md bg-gray-900 text-orange-500">Login</button>
                    </form>
                </div>
                </div>
              </div>
        </section>
    );
};

export default LoginModel;