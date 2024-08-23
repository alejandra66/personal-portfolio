import React, { useState } from 'react';



const SignUpForm001 = () => {
    const button = 'bg-purple-500 border-2 border-purple-600 text-white p-4 m-4 rounded-full w-40';
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(true);
    };

    const handleUnflip = () => {
        setIsFlipped(false);
    };

    return (
        <div className="flex justify-center items-center bg-gradient-to-r to-emerald-600 from-sky-400">
                <div className={`relative preserve-3d duration-1000 ${isFlipped ? 'my-rotate-y-180' : ''}`}>
                    {/* Front Side */}
                    <div className="absolute backface-hidden w-full h-full">
                        <div className="flex justify-center items-center h-screen relative">
                            <div className="bowArrow absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-full z-10">
                                <div className="relative animate-bounce font-bold bg-white border-2 border-blue-300 text-black w-full p-10 rounded shadow-xl">
                                    <p>Click me!</p>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
                                </div>
                            </div>

                            <div className="blueBackground text-center bg-blue-100 border-2 border-blue-300 rounded-xl shadow-xl w-96">
                                <div className="buttonDiv flex flex-col px-20 py-40 flex justify-center items-center">
                                        <h1 className="text-3xl font-extrabold pb-72 w-full text-center text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                                            Welcome!
                                        </h1>
                                        <button className={button}>Sign In</button>
                                        <button className={button} onClick={handleFlip}>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>

                     {/*Back Side */}
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
                        {/* Back content */}
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
                                        <button className={button} onClick={handleUnflip}>Sign In</button>
                                        <button className={button} onClick={handleUnflip}>Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SignUpForm001;

