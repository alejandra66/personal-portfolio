import React from 'react';

const signUpButton = 'bg-purple-500 text-white p-4 m-4 rounded-full w-full'

const SignUpForm001 = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="blueBackground text-center m-4 p-8 border-2 border-blue-100 bg-blue-100 rounded-xl shadow-xl w-1/2">
                <div className="buttonDiv flex justify-center items-center w-full">
                    <div className="flex flex-col pt-40 pb-40 w-48">
                        <h1 className="font-mono text-black text-xl font-semibold pb-40 w-full text-center">
                            Welcome!
                        </h1>
                        <button className={signUpButton} onClick="">Sign In</button>
                        <button className={signUpButton} onClick="">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm001;
