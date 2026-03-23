import {
  Plus,
  Search,
  CalendarDays,
  MapPin,
  Users,
  MoreHorizontal,
} from "lucide-react";
import AdminLayout from "../../components/layout/AdminLayout";

function Events() {
  const events = [
    {
      id: 1,
      name: "Tech Summit 2026",
      date: "12 Apr 2026",
      venue: "KICC Main Hall",
      attendees: 420,
      status: "Upcoming",
    },
    {
      id: 2,
      name: "Startup Connect",
      date: "18 Apr 2026",
      venue: "Sarit Expo Center",
      attendees: 250,
      status: "Ongoing",
    },
    {
      id: 3,
      name: "Creative Expo",
      date: "25 Apr 2026",
      venue: "Nairobi Hub",
      attendees: 190,
      status: "Draft",
    },
  ];

  return (
    <AdminLayout title="Manage Events">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex justify-end">
          <button className="flex items-center gap-2 rounded-2xl bg-cyan-400/20 px-4 py-3 font-semibold text-cyan-300 backdrop-blur-xl hover:bg-cyan-400/30">
            <Plus className="h-4 w-4" />
            Create Event
          </button>
        </div>

        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
          <Search className="h-4 w-4 text-slate-300" />
          <input
            type="text"
            placeholder="Search events..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-300"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">{event.name}</h3>
                  <p className="mt-1 text-sm text-slate-300">{event.status}</p>
                </div>
                <button className="rounded-xl p-2 hover:bg-white/10">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-3 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-4 w-4 text-cyan-300" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  <span>{event.venue}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-cyan-300" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <button className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15">
                  View
                </button>
                <button className="rounded-2xl bg-cyan-400/20 px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-400/30">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

export default Events;
