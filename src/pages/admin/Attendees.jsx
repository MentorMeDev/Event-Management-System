import AdminLayout from "../../components/layout/AdminLayout";

function Attendees() {
  return (
    <AdminLayout title="Attendees">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
        <h2 className="text-2xl font-bold">Attendees</h2>
        <p className="mt-2 text-slate-300">
          Track attendee profiles, check-ins, and participation details here.
        </p>
      </div>
    </AdminLayout>
  );
}

export default Attendees;
