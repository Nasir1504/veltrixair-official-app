import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        // <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
        <div className="min-h-screen flex flex-col items-center justify-center bg-bg1 text-white px-4">


            {/* 404 Text */}
            <h1 className="text-[120px] font-extrabold tracking-widest drop-shadow-lg">
                404
            </h1>

            {/* Message */}
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
                Page Not Found
            </h2>

            <p className="mt-4 text-lg text-white/90 text-center max-w-md">
                Oops! The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
                <button
                    onClick={() => navigate("/")}
                    className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-100 transition"
                >
                    Go Home
                </button>

                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-3 border border-white rounded-lg font-medium hover:bg-white hover:text-gray-800 transition"
                >
                    Go Back
                </button>
            </div>
            

            {/* Optional decorative element */}
            <div className="absolute bottom-10 text-sm text-white/70">
                Lost? Let’s get you back on track.
            </div>
        </div>
    );
};

export default NotFound;