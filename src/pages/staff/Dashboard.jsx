import RoleLayout from "../../components/layout/RoleLayout";

function StaffDashboard() {
  const weeklyCheckIn = [52, 61, 58, 74, 69, 88];
  const eventInsights = [
    { name: "Tech Summit 2026", guests: 210, completion: "91%" },
    { name: "Startup Connect", guests: 165, completion: "84%" },
    { name: "Creative Expo", guests: 120, completion: "73%" },
  ];

  return (
    <RoleLayout role="staff" title="Staff Analytics Dashboard">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Assigned Events</p>
            <p className="mt-2 text-3xl font-bold">5</p>
            <p className="mt-2 text-xs text-cyan-300">2 active today</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Pending Tasks</p>
            <p className="mt-2 text-3xl font-bold">9</p>
            <p className="mt-2 text-xs text-cyan-300">4 high priority</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Today's Check-Ins</p>
            <p className="mt-2 text-3xl font-bold">36</p>
            <p className="mt-2 text-xs text-cyan-300">+8 from yesterday</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Task Completion</p>
            <p className="mt-2 text-3xl font-bold">82%</p>
            <p className="mt-2 text-xs text-cyan-300">Weekly average</p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <h3 className="text-xl font-bold">Weekly Check-In Trend</h3>
            <div className="mt-6 grid grid-cols-6 items-end gap-4">
              {weeklyCheckIn.map((height, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="flex h-44 items-end">
                    <div
                      className="w-10 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-blue-400"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-300">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <h3 className="text-xl font-bold">Today’s Summary</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="rounded-2xl bg-white/10 p-3">Check in guests for Tech Summit 2026</li>
              <li className="rounded-2xl bg-white/10 p-3">Prepare venue handover checklist</li>
              <li className="rounded-2xl bg-white/10 p-3">Update event status and attendance</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
          <h3 className="text-xl font-bold">Assigned Event Insights</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-sm text-slate-300">
                  <th className="pb-4">Event</th>
                  <th className="pb-4">Guests Checked-In</th>
                  <th className="pb-4">Completion</th>
                </tr>
              </thead>
              <tbody>
                {eventInsights.map((event) => (
                  <tr key={event.name} className="border-b border-white/5">
                    <td className="py-4 font-medium">{event.name}</td>
                    <td className="py-4 text-slate-300">{event.guests}</td>
                    <td className="py-4 text-cyan-300">{event.completion}</td>
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

export default StaffDashboard;
