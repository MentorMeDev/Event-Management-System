// // import { Link } from "react-router-dom";

// // function Sidebar() {
// //   return (
// //     <div className="w-64 bg-white border-r min-h-screen p-4">
// //       <h2 className="text-xl font-bold mb-6">EMS</h2>

// //       <nav className="flex flex-col gap-3">
// //         <Link to="/admin/dashboard">Dashboard</Link>
// //         <Link to="/admin/events">Events</Link>
// //         <Link to="/admin/users">Users</Link>
// //       </nav>
// //     </div>
// //   );
// // }

// // export default Sidebar;
// import { NavLink } from "react-router-dom";

// function Sidebar({ role = "admin" }) {
//   const menuItems = {
//     admin: [
//       { name: "Dashboard", path: "/admin/dashboard" },
//       { name: "Users", path: "/admin/users" },
//       { name: "Events", path: "/admin/events" },
//       { name: "Venues", path: "/admin/venues" },
//       { name: "Reports", path: "/admin/reports" },
//       { name: "Settings", path: "/admin/settings" },
//     ],
//     user: [
//       { name: "Dashboard", path: "/user/dashboard" },
//       { name: "Events", path: "/user/events" },
//       { name: "My Registrations", path: "/user/registrations" },
//       { name: "Tickets", path: "/user/tickets" },
//       { name: "Profile", path: "/user/profile" },
//     ],
//     staff: [
//       { name: "Dashboard", path: "/staff/dashboard" },
//       { name: "Assigned Events", path: "/staff/assigned-events" },
//       { name: "Tasks", path: "/staff/tasks" },
//       { name: "Check-In", path: "/staff/check-in" },
//       { name: "Profile", path: "/staff/profile" },
//     ],
//   };

//   const links = menuItems[role] || [];

//   return (
//     <aside className="w-64 min-h-screen bg-slate-900 text-white p-5">
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold">EMS</h2>
//         <p className="text-sm text-slate-300 capitalize mt-1">{role} panel</p>
//       </div>

//       <nav className="flex flex-col gap-2">
//         {links.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             className={({ isActive }) =>
//               `px-4 py-3 rounded-lg transition ${
//                 isActive
//                   ? "bg-blue-600 text-white"
//                   : "text-slate-300 hover:bg-slate-800 hover:text-white"
//               }`
//             }
//           >
//             {item.name}
//           </NavLink>
//         ))}
//       </nav>
//     </aside>
//   );
// }

// export default Sidebar;
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  MapPin,
  BarChart3,
  Settings,
} from "lucide-react";

function Sidebar({ role = "admin" }) {
  const menuItems = {
    admin: [
      { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
      { name: "Users", path: "/admin/users", icon: Users },
      { name: "Events", path: "/admin/events", icon: CalendarDays },
      { name: "Venues", path: "/admin/venues", icon: MapPin },
      { name: "Reports", path: "/admin/reports", icon: BarChart3 },
      { name: "Settings", path: "/admin/settings", icon: Settings },
    ],
  };

  const links = menuItems[role] || [];

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white px-5 py-6">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold tracking-tight">
          Event<span className="text-blue-400">Hub</span>
        </h1>
        <p className="mt-1 text-sm text-slate-400 capitalize">{role} panel</p>
      </div>

      <nav className="space-y-2">
        {links.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;