import RoleLayout from "../../components/layout/RoleLayout";

function AssignedEvents() {
  const assignedEvents = [
    {
      id: 1,
      name: "Tech Summit 2026",
      date: "12 Apr 2026",
      shift: "Morning",
      venue: "KICC Main Hall",
      status: "Active",
    },
    {
      id: 2,
      name: "Startup Connect",
      date: "18 Apr 2026",
      shift: "Afternoon",
      venue: "Sarit Expo Center",
      status: "Upcoming",
    },
    {
      id: 3,
      name: "Creative Expo",
      date: "25 Apr 2026",
      shift: "Evening",
      venue: "Nairobi Hub",
      status: "Upcoming",
    },
  ];

  const activeCount = assignedEvents.filter((event) => event.status === "Active").length;
  const upcomingCount = assignedEvents.filter((event) => event.status === "Upcoming").length;

  return (
    <RoleLayout role="staff" title="Assigned Events">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Total Assigned</p>
            <p className="mt-2 text-3xl font-bold">{assignedEvents.length}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Active</p>
            <p className="mt-2 text-3xl font-bold">{activeCount}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Upcoming</p>
            <p className="mt-2 text-3xl font-bold">{upcomingCount}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
          <h3 className="text-xl font-bold">Event Assignment List</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-sm text-slate-300">
                  <th className="pb-4">Event</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Shift</th>
                  <th className="pb-4">Venue</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {assignedEvents.map((event) => (
                  <tr key={event.id} className="border-b border-white/5">
                    <td className="py-4 font-medium">{event.name}</td>
                    <td className="py-4 text-slate-300">{event.date}</td>
                    <td className="py-4 text-slate-300">{event.shift}</td>
                    <td className="py-4 text-slate-300">{event.venue}</td>
                    <td className="py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          event.status === "Active"
                            ? "bg-emerald-400/20 text-emerald-300"
                            : "bg-cyan-400/20 text-cyan-300"
                        }`}
                      >
                        {event.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="rounded-2xl bg-cyan-400/20 px-3 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-400/30">
                        Open
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </RoleLayout>
  );
}

export default AssignedEvents;
