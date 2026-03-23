import RoleLayout from "../../components/layout/RoleLayout";

function CheckIn() {
  const recentCheckIns = [
    { id: 1, guest: "James Mwangi", ticket: "TK-2045", time: "09:42 AM" },
    { id: 2, guest: "Faith Njeri", ticket: "TK-2190", time: "10:05 AM" },
    { id: 3, guest: "Kevin Otieno", ticket: "TK-2244", time: "10:23 AM" },
  ];

  return (
    <RoleLayout role="staff" title="Check-In">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Checked-In Today</p>
            <p className="mt-2 text-3xl font-bold">36</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Pending Arrivals</p>
            <p className="mt-2 text-3xl font-bold">18</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Completion</p>
            <p className="mt-2 text-3xl font-bold">67%</p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-1 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <h3 className="text-xl font-bold">Guest Check-In</h3>
            <input
              type="text"
              placeholder="Enter ticket code"
              className="mt-4 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
            />
            <button className="mt-4 w-full rounded-2xl bg-cyan-400/20 px-4 py-2 font-semibold text-cyan-300 hover:bg-cyan-400/30">
              Check In Guest
            </button>
          </div>

          <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <h3 className="text-xl font-bold">Recent Check-Ins</h3>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 text-sm text-slate-300">
                    <th className="pb-4">Guest</th>
                    <th className="pb-4">Ticket</th>
                    <th className="pb-4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentCheckIns.map((checkIn) => (
                    <tr key={checkIn.id} className="border-b border-white/5">
                      <td className="py-4 font-medium">{checkIn.guest}</td>
                      <td className="py-4 text-slate-300">{checkIn.ticket}</td>
                      <td className="py-4 text-slate-300">{checkIn.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </RoleLayout>
  );
}

export default CheckIn;
