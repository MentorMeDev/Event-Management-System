import DashboardLayout from "../../components/layout/DashboardLayout";

function StaffDashboard() {
  return (
    <DashboardLayout role="staff" title="Staff Dashboard">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Staff Dashboard
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm text-slate-500">Assigned Events</h3>
          <p className="text-3xl font-bold text-slate-900 mt-2">5</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-sm text-slate-500">Pending Tasks</h3>
          <p className="text-3xl font-bold text-slate-900 mt-2">9</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StaffDashboard;