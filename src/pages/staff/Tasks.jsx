import RoleLayout from "../../components/layout/RoleLayout";

function Tasks() {
  const tasks = [
    {
      id: 1,
      title: "Prepare registration desk",
      priority: "High",
      due: "Today, 10:00 AM",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Verify badge printing list",
      priority: "Medium",
      due: "Today, 1:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      title: "Coordinate attendee seating",
      priority: "Low",
      due: "Today, 4:00 PM",
      status: "Pending",
    },
  ];

  const inProgress = tasks.filter((task) => task.status === "In Progress").length;
  const pending = tasks.filter((task) => task.status === "Pending").length;

  return (
    <RoleLayout role="staff" title="Tasks">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Total Tasks</p>
            <p className="mt-2 text-3xl font-bold">{tasks.length}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">In Progress</p>
            <p className="mt-2 text-3xl font-bold">{inProgress}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Pending</p>
            <p className="mt-2 text-3xl font-bold">{pending}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
          <h3 className="text-xl font-bold">Task Board</h3>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-sm text-slate-300">
                  <th className="pb-4">Task</th>
                  <th className="pb-4">Priority</th>
                  <th className="pb-4">Due</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="border-b border-white/5">
                    <td className="py-4 font-medium">{task.title}</td>
                    <td className="py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          task.priority === "High"
                            ? "bg-rose-400/20 text-rose-300"
                            : task.priority === "Medium"
                              ? "bg-amber-400/20 text-amber-300"
                              : "bg-cyan-400/20 text-cyan-300"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </td>
                    <td className="py-4 text-slate-300">{task.due}</td>
                    <td className="py-4 text-slate-300">{task.status}</td>
                    <td className="py-4">
                      <button className="rounded-2xl bg-cyan-400/20 px-3 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-400/30">
                        Update
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

export default Tasks;
