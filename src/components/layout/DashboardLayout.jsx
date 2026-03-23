// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// function DashboardLayout({ children }) {
//   return (
//     <div className="flex min-h-screen bg-slate-100">
//       <Sidebar />
//       <div className="flex-1">
//         <Navbar />
//         <main className="p-6">{children}</main>
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children, role, title }) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar role={role} />
      <div className="flex-1">
        <Navbar title={title} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;