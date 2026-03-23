// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="min-h-screen bg-slate-100">
//       <header className="bg-white border-b shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <h1 className="text-2xl font-bold text-slate-900">
//             Event Management System
//           </h1>

//           <div className="flex gap-3">
//             <Link
//               to="/login"
//               className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
//             >
//               Register
//             </Link>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-6 py-16">
//         <h2 className="text-4xl font-bold text-slate-900 mb-4">
//           Welcome
//         </h2>
//         <p className="text-slate-600">
//           Your project is working.
//         </p>
//       </main>
//     </div>
//   );
// }

// export default Home;

import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUsers,
  FaTicketAlt,
  FaChartBar,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";

function Home() {
  const features = [
    {
      icon: <FaCalendarAlt className="h-8 w-8 text-blue-600" />,
      title: "Easy Event Creation",
      description: "Create and manage conferences, weddings, seminars, concerts, and more from one place.",
    },
    {
      icon: <FaUsers className="h-8 w-8 text-purple-600" />,
      title: "Attendee Management",
      description: "Track registrations, guest lists, attendance, and communication with your audience.",
    },
    {
      icon: <FaTicketAlt className="h-8 w-8 text-pink-600" />,
      title: "Tickets & Check-In",
      description: "Manage ticketing, confirmations, and smooth event-day check-ins with ease.",
    },
    {
      icon: <FaChartBar className="h-8 w-8 text-emerald-600" />,
      title: "Reports & Insights",
      description: "View analytics, event performance, and important numbers in a simple dashboard.",
    },
    {
      icon: <FaMapMarkerAlt className="h-8 w-8 text-orange-600" />,
      title: "Venue Coordination",
      description: "Assign venues, manage locations, and keep event logistics well organized.",
    },
    {
      icon: <FaShieldAlt className="h-8 w-8 text-cyan-600" />,
      title: "Role-Based Access",
      description: "Separate dashboards for admins, staff, and users for better control and security.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
              Event<span className="text-blue-600">Hub</span>
            </h1>
            <p className="text-xs text-slate-500">Smart Event Management System</p>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600">
              How It Works
            </a>
            <a href="#stats" className="text-sm font-medium text-slate-600 hover:text-blue-600">
              Stats
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
              All-in-one event platform
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Plan, organize, and manage events with confidence.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              A modern event management system for handling event creation, staff coordination,
              attendees, tickets, venues, and reports — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="rounded-2xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Sign In
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <div>
                <span className="block text-2xl font-bold text-slate-900">500+</span>
                Events Managed
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900">10K+</span>
                Attendees Tracked
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-900">99%</span>
                Better Coordination
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-slate-200">
              <div className="rounded-2xl bg-slate-900 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Dashboard Overview</p>
                    <h3 className="mt-1 text-2xl font-bold">Event Analytics</h3>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-300">
                    Live
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-800 p-4">
                    <p className="text-sm text-slate-400">Upcoming Events</p>
                    <h4 className="mt-2 text-3xl font-bold">24</h4>
                  </div>
                  <div className="rounded-2xl bg-slate-800 p-4">
                    <p className="text-sm text-slate-400">Registered Guests</p>
                    <h4 className="mt-2 text-3xl font-bold">1,280</h4>
                  </div>
                  <div className="rounded-2xl bg-slate-800 p-4">
                    <p className="text-sm text-slate-400">Staff Assigned</p>
                    <h4 className="mt-2 text-3xl font-bold">86</h4>
                  </div>
                  <div className="rounded-2xl bg-slate-800 p-4">
                    <p className="text-sm text-slate-400">Tickets Sold</p>
                    <h4 className="mt-2 text-3xl font-bold">3,540</h4>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-500">Top Feature</p>
                  <h4 className="mt-2 text-lg font-bold text-slate-900">Smart Scheduling</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Build detailed agendas and organize sessions without confusion.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-500">Quick Benefit</p>
                  <h4 className="mt-2 text-lg font-bold text-slate-900">Fast Check-In</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Reduce delays and track attendance with an efficient event-day flow.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-purple-600 px-5 py-4 text-white shadow-xl md:block">
              <p className="text-sm text-purple-100">Trusted by teams</p>
              <h4 className="text-xl font-bold">Modern. Fast. Organized.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-600">
            Core Features
          </span>
          <h3 className="mt-4 text-3xl font-extrabold md:text-4xl">
            Everything you need to manage events beautifully
          </h3>
          <p className="mt-4 text-slate-600">
            Simplify planning, operations, and monitoring with a clean and powerful system.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-slate-50 p-3">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900">{feature.title}</h4>
              <p className="mt-3 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
              How It Works
            </span>
            <h3 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Get started in three simple steps
            </h3>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
                1
              </div>
              <h4 className="text-xl font-bold text-slate-900">Create Your Event</h4>
              <p className="mt-3 text-slate-600">
                Add event details, category, venue, dates, organizers, and schedules.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 text-lg font-bold text-white">
                2
              </div>
              <h4 className="text-xl font-bold text-slate-900">Manage People</h4>
              <p className="mt-3 text-slate-600">
                Organize attendees, assign staff, manage tickets, and monitor registrations.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-bold text-white">
                3
              </div>
              <h4 className="text-xl font-bold text-slate-900">Track Results</h4>
              <p className="mt-3 text-slate-600">
                Use dashboards and reports to view performance and improve future events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section id="stats" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-slate-900 p-8 text-white">
            <p className="text-sm text-slate-300">Events Hosted</p>
            <h4 className="mt-2 text-4xl font-extrabold">520+</h4>
          </div>

          <div className="rounded-3xl bg-blue-600 p-8 text-white">
            <p className="text-sm text-blue-100">Active Users</p>
            <h4 className="mt-2 text-4xl font-extrabold">8,400+</h4>
          </div>

          <div className="rounded-3xl bg-purple-600 p-8 text-white">
            <p className="text-sm text-purple-100">Tickets Processed</p>
            <h4 className="mt-2 text-4xl font-extrabold">16K+</h4>
          </div>

          <div className="rounded-3xl bg-emerald-600 p-8 text-white">
            <p className="text-sm text-emerald-100">Success Rate</p>
            <h4 className="mt-2 text-4xl font-extrabold">98%</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 px-8 py-14 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-extrabold md:text-4xl">
            Ready to build a smarter event experience?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Start managing your events with a platform designed for planning, attendance,
            organization, and insights.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/register"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Create Free Account
            </Link>
            <Link
              to="/login"
              className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="text-lg font-bold text-slate-900">
              Event<span className="text-blue-600">Hub</span>
            </h4>
            <p className="text-sm text-slate-500">
              Smart Event Management System for modern teams.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            © 2026 EventHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;