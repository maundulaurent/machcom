import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RegisterPage() {
  return (
    <div>
          <Header />
    <div className="flex items-center justify-center min-h-screen bg-green-50 p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Side - Signup Form */}
        <div className="w-full md:w-1/2 p-16 flex flex-col justify-center">
          <div className="text-center mb-4">
            <div className="flex justify-center">
              <span className="text-2xl font-bold text-green-600">
                <Image
                  src="/icon.png"
                  alt="mach"
                  width={48}
                  height={48}
                  className=""
                />
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Sign Up</h2>
            <p className="text-xs text-gray-500">Welcome to Machcom - Register to get Started</p>
          </div>
          <div className="flex flex-row gap-4 mb-6">
            <button className="w-full flex items-center justify-center py-1 px-3 border border-gray-300 rounded-xl text-sm font-small text-gray-700 bg-white hover:bg-gray-50">
              <span className="mr-2"><FcGoogle className="h-4 w-4" /></span> Sign in with Google
            </button>
            <button className="w-full flex items-center justify-center py-1 px-3 border border-gray-300 rounded-xl text-sm font-small text-gray-700 bg-white hover:bg-gray-50">
              <span className="mr-1"><FaFacebook className="h-4 w-4" /></span> Register with Facebook
            </button>
          </div>
          <form>
            <div className="space-y-4 py-8">
              <div className="relative">
                <p>Name</p>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 pl-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="your name"
                  required
                />
              </div>
              <div className="relative">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 pl-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="relative">
                <p>Phone</p>
                <input
                  type="text"
                  name="phone"
                  className="w-full p-2 pl-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div>
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  className="w-full p-2 pl-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Create your password"
                  required
                />
              </div>
              <div>
                <p>Confirm Password</p>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full p-2 pl-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Create your password"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-600">I agree to the Privacy/Policy</label>
              </div>
              <button
                type="submit"
                className="py-2 px-6 border border-green-800 text-dark rounded-lg hover:bg-green-700 transition float-right"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-500">Already have an account? </span>
            <a href="/login" className="text-sm text-green-600 hover:underline">Login</a>
          </div>
        </div>

        {/* Right Side - Background Image and CTA */}
        <div className="w-full md:w-1/2 p-8 bg-green-100 flex flex-col justify-end rounded-lg">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Why Join Machcom?</h3>
            <div className="space-y-6">
              {/* Feature 1: Productivity Tracking */}
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <div className="text-green-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-medium text-gray-800">Track Your Productivity</h4>
                  <p className="text-sm text-gray-600">Monitor your daily tasks and achieve your goals with ease.</p>
                </div>
              </div>

              {/* Feature 2: Community Connection */}
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <div className="text-green-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-medium text-gray-800">Connect with a Community</h4>
                  <p className="text-sm text-gray-600">Join like-minded individuals to share tips and inspiration.</p>
                </div>
              </div>

              {/* Feature 3: Mindfulness Tools */}
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <div className="text-green-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V13a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-medium text-gray-800">Mindfulness Tools</h4>
                  <p className="text-sm text-gray-600">Access guided exercises to stay focused and balanced.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
        </div>
  );
}