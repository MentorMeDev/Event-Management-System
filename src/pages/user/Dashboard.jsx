import DashboardLayout from "../../components/layout/DashboardLayout";

function UserDashboard() {
  return (
    <DashboardLayout role="user" title="User Dashboard">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        User Dashboard
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm text-slate-500">My Registrations</h3>
          <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm text-slate-500">My Tickets</h3>
          <p className="text-3xl font-bold text-slate-900 mt-2">8</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default UserDashboard;