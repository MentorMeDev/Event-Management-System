// function Navbar() {
//   return (
//     <div className="bg-white border-b px-6 py-4 flex justify-between">
//       <h1 className="font-semibold">Dashboard</h1>
//       <span>User</span>
//     </div>
//   );
// }

// export default Navbar;
function Navbar({ title = "Dashboard" }) {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
      <div className="text-sm text-slate-600">Welcome back</div>
    </header>
  );
}

export default Navbar;