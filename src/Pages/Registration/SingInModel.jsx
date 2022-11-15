import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';


const SingInModel = () => {
  const {createUserEmailPassword, user} = useContext(AuthContext)
  const [errorMassage, setErrorMassage] = useState('')

  

  const handelRegistration = e => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password)
    createUserEmailPassword(email, password)
  .then((currentUser) => {
    console.log(user)
  })
  .catch((error) => {
    setErrorMassage(error.message);
  });
  console.log(user)
  console.log(errorMassage)

  }
    return (
        <section>
           <input type="checkbox" id="sing-in-model" className="modal-toggle" />
              <div className="modal md:items-center items-end ">
                <div className="modal-box rounded-none rounded-t-3xl  w-full md:w-5xl bg-orange-500 ">
                  <label htmlFor="sing-in-model" className="btn btn-sm md:btn-sm btn-circle absolute right-3 top-10 bg-red-100 md:text-6xl text-red-500">✕</label>
                  <h3 className=" text-gray-900 text-left text-xl">Hello...</h3>
                  <p className="font-bold text-gray-900 text-left text-3xl">Register</p>
                  {errorMassage&& <p className='text-gray-900 mt-1 -mb-3'>{errorMassage}</p>}
                  <div className="w-full max-w-md p-8 space-y-1 rounded-xl text-gray-900">
                    <form onSubmit={handelRegistration} className="space-y-6 ng-untouched ng-pristine ng-valid">
                      <div className="space-t-1 text-sm">
                        <input type="text" name="name" placeholder="Full Name" className="w-full px-4 py-3 rounded-md placeholder:text-gray-400 dark:border-gray-700 bg-gray-100 text-gray-900 focus:dark:border-violet-400" />
                      </div>
                      <div className="space-y-1 text-sm">
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md placeholder:text-gray-400 dark:border-gray-700 bg-gray-100 text-gray-900 focus:dark:border-violet-400" />
                      </div>
                      <div className="space-y-1 text-sm">
                        <input type="text" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md placeholder:text-gray-400  bg-gray-100 text-gray-900 focus:dark:border-violet-400" />
                      </div>
                      <div className="space-y-1 text-sm">
                        <input type="text" name="Confirm" placeholder="Confirm" className="w-full px-4 py-3 rounded-md placeholder:text-gray-400  bg-gray-100 text-gray-900 focus:dark:border-violet-400" />
                      </div>
                      <button className="w-full p-3 text-center text-xl rounded-md bg-gray-900 text-orange-500">Registration</button>
                    </form>
                </div>
                </div>
              </div>
        </section>
    );
};

export default SingInModel;