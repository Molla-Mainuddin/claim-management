import React, { useState } from 'react'
import { LoginApi } from '../../../apis/auth';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async () => {
        try {
            var req = {
                "username": userName,
                "password": password
            }
            LoginApi(req).then(res => {
                const result = res;
                // console.log(result);
                if (result !== undefined) {
                    if (result.jwtAuthToken !== undefined) {
                        sessionStorage.setItem("token", result.jwtAuthToken)
                        console.log("Login successful");
                        setUserName("");
                        setPassword("");
                        // history.push("/billList")
                    }
                    else {
                        setUserName("")
                        setPassword("")
                    }
                }
                else {
                    setUserName("")
                    setPassword("")
                }
            }).catch();

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className='h-screen flex justify-center items-center'>
            {/*This is container div*/}
            <div className="container-div border w-2/3 h-3/4 flex flex-row box-border rounded-xl shadow-2xl">
                {/* This is image div */}
                <div className="w-1/2 h-full p-4">
                    <img
                        src="assets/claim.jpg"
                        alt="broken pic"
                        className="w-full h-full"
                    />
                </div>

                {/* This is form div */}
                <div className="bg-teal-500 h-full w-1/2 rounded-r-xl px-16 py-6">
                    <div className="space-y-3">
                        <h3 className="text-xl font-medium text-white">LogIn</h3>
                        <div>
                            <label
                                htmlFor="username"
                                className="block mb-2 text-sm font-medium text-gray-300"
                            >
                                User Name
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm outline-none
                                    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="User Name"
                                required
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-300"
                            >
                                Your password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm outline-none
                            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>


                        <button
                            type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
                            text-sm px-5 py-2.5 text-center"
                            onClick={onSubmit}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;