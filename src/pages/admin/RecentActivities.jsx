import AdminLayout from "../../components/layout/AdminLayout";

function RecentActivities() {
  return (
    <AdminLayout title="Recent Activities">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
        <h2 className="text-2xl font-bold">Recent Activities</h2>
        <p className="mt-2 text-slate-300">
          Review the latest admin actions, event updates, and system activity here.
        </p>
      </div>
    </AdminLayout>
  );
}

export default RecentActivities;
