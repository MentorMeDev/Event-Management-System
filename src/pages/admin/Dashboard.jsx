// import DashboardLayout from "../../components/layout/DashboardLayout";

// function AdminDashboard() {
//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//     </DashboardLayout>
//   );
// }

// export default AdminDashboard;
import DashboardLayout from "../../components/layout/DashboardLayout";

function AdminDashboard() {
  return (
    <DashboardLayout role="admin" title="Admin Dashboard">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Admin Dashboard
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm text-slate-500">Total Users</h3>
          <p className="text-3xl font-bold text-slate-900 mt-2">1,245</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm text-slate-500">Total Events</h3>
          <p className="text-3xl font-bold text-slate-900 mt-2">86</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm text-slate-500">Revenue</h3>
          <p className="text-3xl font-bold text-slate-900 mt-2">Ksh 245,000</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;