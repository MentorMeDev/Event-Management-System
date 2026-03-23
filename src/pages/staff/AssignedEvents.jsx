import DashboardLayout from "../../components/layout/DashboardLayout";

function AssignedEvents() {
  return (
    <DashboardLayout role="admin" title="Manage Events">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Assigned Events</h2>
        <p className="mt-2 text-slate-600">
          This is where admin will view and manage all events.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default AssignedEvents;
