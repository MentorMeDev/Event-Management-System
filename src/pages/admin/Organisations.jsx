import AdminLayout from "../../components/layout/AdminLayout";

function Organisations() {
  return (
    <AdminLayout title="Organisations">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
        <h2 className="text-2xl font-bold">Organisations</h2>
        <p className="mt-2 text-slate-300">
          Manage partner organisations, sponsors, and event groups from this section.
        </p>
      </div>
    </AdminLayout>
  );
}

export default Organisations;
