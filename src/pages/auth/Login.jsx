import { Link } from "react-router-dom";
import { Mail, Lock, Eye, ShieldCheck } from "lucide-react";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between bg-slate-900 text-white p-12">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Event<span className="text-blue-400">Hub</span>
            </h1>
            <p className="mt-2 text-slate-300">
              Smart Event Management System
            </p>
          </div>

          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm text-blue-200">
              Welcome back
            </span>
            <h2 className="mt-6 text-5xl font-extrabold leading-tight">
              Manage your events with speed, clarity, and confidence.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Sign in to access your dashboard, track attendees, manage tickets,
              and monitor everything in one place.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <p className="text-sm text-slate-400">Events Managed</p>
                <h3 className="mt-2 text-3xl font-bold">520+</h3>
              </div>
              <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <p className="text-sm text-slate-400">Active Users</p>
                <h3 className="mt-2 text-3xl font-bold">8,400+</h3>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Secure access for admins, staff, and users
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center lg:text-left">
              <Link to="/" className="inline-block lg:hidden">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  Event<span className="text-blue-600">Hub</span>
                </h1>
              </Link>

              <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
                Sign in
              </h2>
              <p className="mt-2 text-slate-600">
                Welcome back. Enter your details to continue.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 focus-within:border-blue-500 focus-within:bg-white">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 focus-within:border-blue-500 focus-within:bg-white">
                    <Lock className="h-5 w-5 text-slate-400" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                    />
                    <Eye className="h-5 w-5 cursor-pointer text-slate-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-600">
                    <input type="checkbox" className="rounded border-slate-300" />
                    Remember me
                  </label>
                  <Link to="#" className="font-medium text-blue-600 hover:text-blue-700">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Sign In
                </button>
              </form>

              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-sm text-slate-400">OR</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <button
                type="button"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Continue with Google
              </button>

              <p className="mt-6 text-center text-sm text-slate-600">
                Don’t have an account?{" "}
                <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-700">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;