import AdminLayout from "../../components/layout/AdminLayout";

function Registrations() {
  return (
    <AdminLayout title="Registrations">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
        <h2 className="text-2xl font-bold">Registrations</h2>
        <p className="mt-2 text-slate-300">
          Review event registration records, approvals, and participation status.
        </p>
      </div>
    </AdminLayout>
  );
}

export default Registrations;
