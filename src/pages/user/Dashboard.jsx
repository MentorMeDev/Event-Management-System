import RoleLayout from "../../components/layout/RoleLayout";

function UserDashboard() {
  const monthlyActivity = [48, 62, 55, 71, 68, 84];
  const categoryInsights = [
    { name: "Tech", value: "38%" },
    { name: "Business", value: "26%" },
    { name: "Creative", value: "21%" },
    { name: "Community", value: "15%" },
  ];

  const recentEvents = [
    { name: "Tech Summit 2026", engagement: "92%", tickets: 2 },
    { name: "Startup Connect", engagement: "85%", tickets: 1 },
    { name: "Creative Expo", engagement: "77%", tickets: 1 },
  ];

  return (
    <RoleLayout role="user" title="User Analytics Dashboard">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Total Registrations</p>
            <p className="mt-2 text-3xl font-bold">12</p>
            <p className="mt-2 text-xs text-cyan-300">+3 this month</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Active Tickets</p>
            <p className="mt-2 text-3xl font-bold">8</p>
            <p className="mt-2 text-xs text-cyan-300">2 pending check-in</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Upcoming Events</p>
            <p className="mt-2 text-3xl font-bold">5</p>
            <p className="mt-2 text-xs text-cyan-300">Next in 2 days</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Attendance Rate</p>
            <p className="mt-2 text-3xl font-bold">89%</p>
            <p className="mt-2 text-xs text-cyan-300">+5% improvement</p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <h3 className="text-xl font-bold">Monthly Activity Trend</h3>
            <div className="mt-6 grid grid-cols-6 items-end gap-4">
              {monthlyActivity.map((height, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="flex h-44 items-end">
                    <div
                      className="w-10 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-blue-400"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-300">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <h3 className="text-xl font-bold">Category Insights</h3>
            <div className="mt-5 space-y-4">
              {categoryInsights.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-200">{item.name}</span>
                    <span className="text-xs text-cyan-300">{item.value}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/10">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
          <h3 className="text-xl font-bold">Recent Event Insights</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-sm text-slate-300">
                  <th className="pb-4">Event</th>
                  <th className="pb-4">Engagement</th>
                  <th className="pb-4">Tickets</th>
                </tr>
              </thead>
              <tbody>
                {recentEvents.map((event) => (
                  <tr key={event.name} className="border-b border-white/5">
                    <td className="py-4 font-medium">{event.name}</td>
                    <td className="py-4 text-cyan-300">{event.engagement}</td>
                    <td className="py-4">{event.tickets}</td>
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

export default UserDashboard;