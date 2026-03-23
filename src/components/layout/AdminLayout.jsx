import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  BarChart3,
  MapPin,
  Settings,
  Bell,
  Search,
} from "lucide-react";

function AdminLayout({ title = "Admin Panel", children }) {
  const menuItems = [
    { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Events", path: "/admin/events", icon: CalendarDays },
    { label: "Users", path: "/admin/users", icon: Users },
    { label: "Reports", path: "/admin/reports", icon: BarChart3 },
    { label: "Venues", path: "/admin/venues", icon: MapPin },
    { label: "Settings", path: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#1e3a8a,_#0f172a_35%,_#020617_100%)] text-white">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 border-r border-white/10 bg-white/10 backdrop-blur-2xl lg:block">
          <div className="flex h-full flex-col px-6 py-8">
            <div className="mb-10">
              <h1 className="text-2xl font-extrabold tracking-tight">
                Event<span className="text-cyan-300">Hub</span>
              </h1>
              <p className="mt-1 text-sm text-slate-300">Admin Analytics Panel</p>
            </div>

            <nav className="space-y-3">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                        isActive
                          ? "border border-cyan-300/20 bg-cyan-400/15 text-white backdrop-blur-xl"
                          : "text-slate-200 hover:bg-white/10"
                      }`
                    }
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                );
              })}
            </nav>

            <div className="mt-auto rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-sm text-slate-300">System Health</p>
              <h3 className="mt-2 text-3xl font-bold text-cyan-300">98.4%</h3>
              <p className="mt-2 text-sm text-slate-300">
                Platform uptime and monitoring status are stable.
              </p>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <header className="border-b border-white/10 bg-white/5 px-6 py-5 backdrop-blur-2xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm text-slate-300">Admin Panel</p>
                <h2 className="text-3xl font-bold">{title}</h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                  <Search className="h-4 w-4 text-slate-300" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-300 sm:w-72"
                  />
                </div>

                <button className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl transition hover:bg-white/15">
                  <Bell className="h-5 w-5 text-slate-200" />
                </button>
              </div>
            </div>
          </header>

          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
