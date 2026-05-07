// // function Navbar() {
// //   return (
// //     <div className="bg-white border-b px-6 py-4 flex justify-between">
// //       <h1 className="font-semibold">Dashboard</h1>
// //       <span>User</span>
// //     </div>
// //   );
// // }

// // export default Navbar;
// function Navbar({ title = "Dashboard" }) {
//   return (
//     <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
//       <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
//       <div className="text-sm text-slate-600">Welcome back</div>
//     </header>
//   );
// }

// export default Navbar;

import { Bell, Search, UserCircle2 } from "lucide-react";

function Navbar({ title = "Dashboard" }) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-500">Welcome back, Admin</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm outline-none placeholder:text-slate-400"
          />
        </div>

        <button className="rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200">
          <Bell className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2">
          <UserCircle2 className="h-6 w-6 text-slate-600" />
          <span className="hidden text-sm font-medium text-slate-700 md:block">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;