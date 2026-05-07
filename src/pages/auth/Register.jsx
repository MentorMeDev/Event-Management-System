import { Link } from "react-router-dom";
import { User, Mail, Phone, Lock, ShieldCheck, Eye } from "lucide-react";

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-blue-700 via-slate-900 to-purple-900 p-12 text-white">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Event<span className="text-blue-300">Hub</span>
            </h1>
            <p className="mt-2 text-slate-300">Smart Event Management System</p>
          </div>

          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm text-blue-100">
              Create your account
            </span>
            <h2 className="mt-6 text-5xl font-extrabold leading-tight">
              Start organizing events in a smarter way.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Register as a user, staff member, or admin and access a beautiful
              dashboard built for modern event management.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                Easy attendee tracking
              </div>
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                Clear staff coordination
              </div>
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                Powerful reports and insights
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-300">
            <ShieldCheck className="h-4 w-4 text-emerald-300" />
            Safe and role-based account access
          </div>
        </div>

        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-xl">
            <div className="mb-8 text-center lg:text-left">
              <Link to="/" className="inline-block lg:hidden">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  Event<span className="text-blue-600">Hub</span>
                </h1>
              </Link>

              <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
                Create account
              </h2>
              <p className="mt-2 text-slate-600">
                Fill in your details to get started.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
              <form className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 focus-within:border-blue-500 focus-within:bg-white">
                    <User className="h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 focus-within:border-blue-500 focus-within:bg-white">
                    <Mail className="h-5 w-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 focus-within:border-blue-500 focus-within:bg-white">
                    <Phone className="h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Role
                  </label>
                  <select className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:bg-white">
                    <option>User</option>
                    <option>Staff</option>
                    <option>Admin</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 focus-within:border-blue-500 focus-within:bg-white">
                    <Lock className="h-5 w-5 text-slate-400" />
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                    />
                    <Eye className="h-5 w-5 cursor-pointer text-slate-400" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Confirm Password
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 focus-within:border-blue-500 focus-within:bg-white">
                    <Lock className="h-5 w-5 text-slate-400" />
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    Create Account
                  </button>
                </div>
              </form>

              <p className="mt-6 text-center text-sm text-slate-600">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;