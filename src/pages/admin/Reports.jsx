import { Download, FileText, TrendingUp, DollarSign, Users, CalendarDays } from "lucide-react";
import AdminLayout from "../../components/layout/AdminLayout";

function Reports() {
  const reports = [
    { title: "Monthly Revenue", value: "Ksh 245,000", icon: DollarSign },
    { title: "Total Attendees", value: "8,420", icon: Users },
    { title: "Events Completed", value: "62", icon: CalendarDays },
    { title: "Growth Rate", value: "24.6%", icon: TrendingUp },
  ];

  return (
    <AdminLayout title="Reports & Analytics">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex justify-end">
          <button className="flex items-center gap-2 rounded-2xl bg-cyan-400/20 px-4 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/30">
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>

        <div className="mb-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reports.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-300">{item.title}</p>
                    <h3 className="mt-2 text-3xl font-bold">{item.value}</h3>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <h2 className="mb-6 text-2xl font-bold">Generated Reports</h2>

            <div className="space-y-4">
              {["Revenue Summary", "Attendance Report", "Venue Usage Report", "User Activity Report"].map((report) => (
                <div
                  key={report}
                  className="flex items-center justify-between rounded-2xl bg-white/10 p-4"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-cyan-300" />
                    <span>{report}</span>
                  </div>
                  <button className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <h2 className="mb-6 text-2xl font-bold">Performance Overview</h2>

            <div className="space-y-5">
              {[
                { label: "Revenue Target", value: "78%" },
                { label: "Attendance Goal", value: "85%" },
                { label: "Venue Utilization", value: "69%" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-200">{item.label}</span>
                    <span className="text-sm text-cyan-300">{item.value}</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Reports;