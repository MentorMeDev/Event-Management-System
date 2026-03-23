import { MapPin, Plus, Building2, Users, Search } from "lucide-react";
import AdminLayout from "../../components/layout/AdminLayout";

function Venues() {
  const venues = [
    { id: 1, name: "KICC Main Hall", capacity: 1200, location: "Nairobi", status: "Available" },
    { id: 2, name: "Sarit Expo Center", capacity: 800, location: "Westlands", status: "Booked" },
    { id: 3, name: "Nairobi Convention Hub", capacity: 500, location: "Upper Hill", status: "Available" },
  ];

  return (
    <AdminLayout title="Manage Venues">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex justify-end">
          <button className="flex items-center gap-2 rounded-2xl bg-cyan-400/20 px-4 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/30">
            <Plus className="h-4 w-4" />
            Add Venue
          </button>
        </div>

        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
          <Search className="h-4 w-4 text-slate-300" />
          <input
            type="text"
            placeholder="Search venues..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-300"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-3">
                  <Building2 className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{venue.name}</h3>
                  <p className="text-sm text-slate-300">{venue.location}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-cyan-300" />
                  <span>Capacity: {venue.capacity}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  <span>{venue.location}</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    venue.status === "Available"
                      ? "bg-emerald-400/20 text-emerald-300"
                      : "bg-orange-400/20 text-orange-300"
                  }`}
                >
                  {venue.status}
                </span>

                <button className="rounded-2xl bg-cyan-400/20 px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-400/30">
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}

export default Venues;