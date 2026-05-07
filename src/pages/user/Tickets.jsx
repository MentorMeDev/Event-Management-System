import RoleLayout from "../../components/layout/RoleLayout";

function Tickets() {
  const tickets = [
    {
      id: 1,
      code: "TK-2045",
      event: "Tech Summit 2026",
      date: "12 Apr 2026",
      venue: "KICC Main Hall",
      seat: "A-21",
      status: "Confirmed",
      type: "VIP",
    },
    {
      id: 2,
      code: "TK-2190",
      event: "Startup Connect",
      date: "18 Apr 2026",
      venue: "Sarit Expo Center",
      seat: "B-14",
      status: "Pending",
      type: "Standard",
    },
  ];

  return (
    <RoleLayout role="user" title="Tickets">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Total Tickets</p>
            <p className="mt-2 text-3xl font-bold">{tickets.length}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Confirmed</p>
            <p className="mt-2 text-3xl font-bold">{tickets.filter((ticket) => ticket.status === "Confirmed").length}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Pending</p>
            <p className="mt-2 text-3xl font-bold">{tickets.filter((ticket) => ticket.status === "Pending").length}</p>
          </div>
        </div>

        {tickets.map((ticket) => (
          <div key={ticket.id} className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-300">{ticket.type} Ticket</p>
                <h3 className="mt-1 text-lg font-bold">{ticket.event}</h3>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  ticket.status === "Confirmed"
                    ? "bg-emerald-400/20 text-emerald-300"
                    : "bg-amber-400/20 text-amber-300"
                }`}
              >
                {ticket.status}
              </span>
            </div>

            <div className="grid gap-4 px-6 py-5 md:grid-cols-4">
              <div>
                <p className="text-xs text-slate-400">Ticket Code</p>
                <p className="mt-1 font-semibold">{ticket.code}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Date</p>
                <p className="mt-1 font-semibold">{ticket.date}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Venue</p>
                <p className="mt-1 font-semibold">{ticket.venue}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Seat</p>
                <p className="mt-1 font-semibold">{ticket.seat}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-white/10 px-6 py-4">
              <button className="rounded-2xl bg-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/30">
                Download
              </button>
              <button className="rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20">
                View QR
              </button>
            </div>
          </div>
        ))}
      </div>
    </RoleLayout>
  );
}

export default Tickets;