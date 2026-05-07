import {
  CalendarDays,
  Users,
  DollarSign,
  TrendingUp,
  Clock3,
  ChevronRight,
  Activity,
} from "lucide-react";
import AdminLayout from "../../components/layout/AdminLayout";

function AdminDashboard() { 
  const stats = [
    {
      title: "Total Events",
      value: "128",
      change: "+12.4%",
      icon: CalendarDays,
    },
    {
      title: "Total Users",
      value: "4,562",
      change: "+8.1%",
      icon: Users,
    },
    {
      title: "Revenue",
      value: "Ksh 845,000",
      change: "+18.7%",
      icon: DollarSign,
    },
    {
      title: "Growth Rate",
      value: "24.6%",
      change: "+4.3%",
      icon: TrendingUp,
    },
  ];

  const eventPerformance = [
    { name: "Tech Summit 2026", attendees: 420, revenue: "Ksh 185,000", progress: 85 },
    { name: "Women in Business", attendees: 315, revenue: "Ksh 120,000", progress: 72 },
    { name: "Startup Connect", attendees: 250, revenue: "Ksh 95,000", progress: 64 },
    { name: "Creative Expo", attendees: 190, revenue: "Ksh 73,000", progress: 51 },
  ];

  const recentActivities = [
    "New event 'Future Leaders Forum' created",
    "32 new attendees registered today",
    "Venue booking updated for Tech Summit 2026",
    "Monthly revenue report generated",
    "Staff assignments updated for 3 events",
  ];

  const topVenues = [
    { name: "KICC Main Hall", usage: "92%" },
    { name: "Sarit Expo Center", usage: "76%" },
    { name: "Nairobi Convention Hub", usage: "68%" },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="mx-auto max-w-7xl">
            {/* Stats */}
            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.title}
                    className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-slate-300">{stat.title}</p>
                        <h3 className="mt-3 text-3xl font-extrabold">
                          {stat.value}
                        </h3>
                        <p className="mt-2 text-sm text-emerald-300">
                          {stat.change} this month
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/10 p-3">
                        <Icon className="h-6 w-6 text-cyan-300" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>

            {/* Middle grid */}
            <section className="mt-8 grid gap-6 xl:grid-cols-3">
              {/* Revenue overview */}
              <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Revenue Overview</p>
                    <h3 className="mt-1 text-2xl font-bold">Monthly Performance</h3>
                  </div>
                  <button className="rounded-xl bg-cyan-400/15 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/25">
                    View Details
                  </button>
                </div>

                <div className="mt-8 grid grid-cols-6 items-end gap-4">
                  {[45, 62, 58, 80, 72, 95].map((height, index) => (
                    <div key={index} className="flex flex-col items-center gap-3">
                      <div className="flex h-56 items-end">
                        <div
                          className="w-10 rounded-t-2xl bg-gradient-to-t from-cyan-500 to-blue-400 shadow-lg"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                      <span className="text-xs text-slate-300">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index]}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">This Month</p>
                    <h4 className="mt-2 text-2xl font-bold">Ksh 245,000</h4>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Best Month</p>
                    <h4 className="mt-2 text-2xl font-bold">Ksh 310,000</h4>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Conversion</p>
                    <h4 className="mt-2 text-2xl font-bold">74.5%</h4>
                  </div>
                </div>
              </div>

              {/* Activity */}
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Live Feed</p>
                    <h3 className="mt-1 text-2xl font-bold">Recent Activity</h3>
                  </div>
                  <Activity className="h-5 w-5 text-cyan-300" />
                </div>

                <div className="mt-6 space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-2xl bg-white/10 p-4"
                    >
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <div>
                        <p className="text-sm text-slate-100">{activity}</p>
                        <p className="mt-1 text-xs text-slate-300">
                          {index + 1} hour ago
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Bottom grid */}
            <section className="mt-8 grid gap-6 xl:grid-cols-3">
              {/* Event performance */}
              <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">Event Insights</p>
                    <h3 className="mt-1 text-2xl font-bold">Top Event Performance</h3>
                  </div>
                  <button className="flex items-center gap-1 text-sm font-medium text-cyan-300">
                    See all <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-6 overflow-x-auto">
                  <table className="min-w-full text-left">
                    <thead>
                      <tr className="border-b border-white/10 text-sm text-slate-300">
                        <th className="pb-4 font-medium">Event</th>
                        <th className="pb-4 font-medium">Attendees</th>
                        <th className="pb-4 font-medium">Revenue</th>
                        <th className="pb-4 font-medium">Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eventPerformance.map((event) => (
                        <tr key={event.name} className="border-b border-white/5">
                          <td className="py-5 font-medium text-white">{event.name}</td>
                          <td className="py-5 text-slate-200">{event.attendees}</td>
                          <td className="py-5 text-slate-200">{event.revenue}</td>
                          <td className="py-5">
                            <div className="w-40">
                              <div className="h-2.5 rounded-full bg-white/10">
                                <div
                                  className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                                  style={{ width: `${event.progress}%` }}
                                />
                              </div>
                              <p className="mt-2 text-xs text-slate-300">
                                {event.progress}%
                              </p>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Side widgets */}
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-cyan-300" />
                    <h3 className="text-xl font-bold">Upcoming Snapshot</h3>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm text-slate-300">Events This Week</p>
                      <h4 className="mt-2 text-3xl font-bold">14</h4>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-sm text-slate-300">Staff Assigned</p>
                      <h4 className="mt-2 text-3xl font-bold">57</h4>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">
                  <h3 className="text-xl font-bold">Top Venues</h3>
                  <div className="mt-5 space-y-4">
                    {topVenues.map((venue) => (
                      <div key={venue.name}>
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm text-slate-200">{venue.name}</span>
                          <span className="text-xs text-cyan-300">{venue.usage}</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-white/10">
                          <div
                            className="h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
                            style={{ width: venue.usage }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-6 shadow-2xl backdrop-blur-2xl">
                  <p className="text-sm text-slate-200">Quick Summary</p>
                  <h3 className="mt-2 text-3xl font-bold">Admin Control Center</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    Monitor event trends, registrations, venue usage, and financial
                    performance from one beautiful dashboard.
                  </p>
                  <button className="mt-5 rounded-2xl bg-white px-4 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
                    Generate Report
                  </button>
                </div>
              </div>
            </section>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;