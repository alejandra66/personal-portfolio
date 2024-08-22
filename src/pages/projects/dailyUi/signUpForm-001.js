import React from 'react';

const button = 'bg-purple-500 border-2 border-purple-600 text-white p-4 m-4 rounded-full'

const SignUpForm001 = () => {
    return (
        <div className="flex justify-center items-center h-screen relative">

            <div className="bowArrow absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-full z-10">
                <div className="relative animate-bounce font-bold bg-white border-2 border-blue-300 text-black p-4 rounded shadow-xl">
                    <p>Click me!</p>
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
                </div>
            </div>

            <div className="blueBackground text-center bg-blue-100 border-2 border-blue-300  rounded-xl shadow-xl w-96">
                <div className="buttonDiv flex justify-center items-center w-full">
                    <div className="flex flex-col pt-60 pb-40 w-48">
                        <h1 className="text-3xl font-extrabold pb-40 w-full text-center">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome!</span>
                        </h1>
                        <button className={button} onClick="">Sign In</button>
                        <button className={button} onClick="">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignUpForm001;
