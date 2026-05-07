import RoleLayout from "../../components/layout/RoleLayout";

function MyRegistrations() {
  const registrations = [
    {
      id: 1,
      event: "Tech Summit 2026",
      status: "Confirmed",
      date: "12 Apr 2026",
      venue: "KICC Main Hall",
      ticketType: "VIP",
    },
    {
      id: 2,
      event: "Startup Connect",
      status: "Pending",
      date: "18 Apr 2026",
      venue: "Sarit Expo Center",
      ticketType: "Standard",
    },
    {
      id: 3,
      event: "Creative Expo",
      status: "Waitlist",
      date: "25 Apr 2026",
      venue: "Nairobi Hub",
      ticketType: "Standard",
    },
  ];

  const confirmedCount = registrations.filter((item) => item.status === "Confirmed").length;
  const pendingCount = registrations.filter((item) => item.status === "Pending").length;
  const waitlistCount = registrations.filter((item) => item.status === "Waitlist").length;

  return (
    <RoleLayout role="user" title="My Registrations">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Total Registrations</p>
            <p className="mt-2 text-3xl font-bold">{registrations.length}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Confirmed</p>
            <p className="mt-2 text-3xl font-bold">{confirmedCount}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Pending</p>
            <p className="mt-2 text-3xl font-bold">{pendingCount}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Waitlist</p>
            <p className="mt-2 text-3xl font-bold">{waitlistCount}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
          <h3 className="text-xl font-bold">Registration Details</h3>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-sm text-slate-300">
                  <th className="pb-4">Event</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Venue</th>
                  <th className="pb-4">Ticket</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {registrations.map((item) => (
                  <tr key={item.id} className="border-b border-white/5">
                    <td className="py-4 font-medium">{item.event}</td>
                    <td className="py-4 text-slate-300">{item.date}</td>
                    <td className="py-4 text-slate-300">{item.venue}</td>
                    <td className="py-4 text-slate-300">{item.ticketType}</td>
                    <td className="py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          item.status === "Confirmed"
                            ? "bg-emerald-400/20 text-emerald-300"
                            : item.status === "Pending"
                              ? "bg-amber-400/20 text-amber-300"
                              : "bg-purple-400/20 text-purple-300"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="rounded-2xl bg-cyan-400/20 px-3 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-400/30">
                        View Ticket
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

export default MyRegistrations;