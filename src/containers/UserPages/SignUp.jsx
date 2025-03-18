import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useDispatch, useSelector } from "react-redux";
import { replace, useNavigate } from "react-router-dom";
import { registerUser } from "../../features/auth/authSlice";

import { createUseStyles } from "react-jss";
import styles from './userPages-jss'; 
const useStyles = createUseStyles(styles);
function SignUp() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, isAuthenticated, user } = useSelector((state) => state.auth);

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        terms: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        dispatch(registerUser({ 
            name: `${formData.firstName} ${formData.lastName}`, 
            email: formData.email, 
            password: formData.password
        }));
    };


    // Rediriger l'utilisateur après la connexion
    useEffect(() => {
        if (isAuthenticated && user) {
            if(!user.entreprise_id) {
                navigate("/create-entreprise");
                return;
            }
            switch (user.type) {
                case "ADMIN":
                    navigate("/admin/dashboard");
                break;
                case "USER":
                    navigate("/user/dashboard");
                break;
                default:
                    // navigate("/");
            }
        }
    }, [isAuthenticated, user, navigate]);

    return (
        <div className="w-full lg:w-1/2 p-8 md:p-12 flex items-center justify-center">
            <div className="w-full max-w-md space-y-8">
            <div className="text-center lg:text-left">
                <h2 className="text-3xl font-semibold text-white mb-2">Create an account</h2>
                <p className="text-gray-400">
                Already have an account?{' '}
                <span onClick={() => navigate("/login", { replace: true })} className="text-purple-400 hover:text-purple-300"  style={{cursor: "pointer"}}>Log in</span>
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                <div>
                    <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2333] text-white border border-[#3d3547] focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 outline-none transition-all"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                </div>
                <div>
                    <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2333] text-white border border-[#3d3547] focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 outline-none transition-all"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                </div>
                </div>

                <div>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2333] text-white border border-[#3d3547] focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                </div>

                <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2333] text-white border border-[#3d3547] focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 outline-none transition-all"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
                </div>

                <div className="flex items-center">
                <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 rounded border-gray-600 text-purple-500 focus:ring-purple-500 focus:ring-opacity-20 bg-[#2a2333]"
                    checked={formData.terms}
                    onChange={(e) => setFormData({...formData, terms: e.target.checked})}
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                    I agree to the{' '}
                    <a href="#" className="text-purple-400 hover:text-purple-300">Terms & Conditions</a>
                </label>
                </div>

                <button
                type="submit"
                className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                Create account
                </button>

                <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-gray-500 bg-[#1f1926]">Or register with</span>
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                <button
                    type="button"
                    className="flex items-center justify-center px-4 py-3 border border-[#3d3547] rounded-lg text-white hover:bg-[#2a2333] transition-colors"
                >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                    Google
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center px-4 py-3 border border-[#3d3547] rounded-lg text-white hover:bg-[#2a2333] transition-colors"
                >
                    <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5 mr-2" />
                    Apple
                </button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default SignUp;