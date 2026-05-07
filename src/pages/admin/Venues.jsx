import { useState } from "react";
import { MapPin, Plus, Building2, Users, Search } from "lucide-react";
import AdminLayout from "../../components/layout/AdminLayout";
import Modal from "../../components/ui/Modal";

function Venues() {
  const initialVenues = [
    { id: 1, name: "KICC Main Hall", capacity: 1200, location: "Nairobi", status: "Available" },
    { id: 2, name: "Sarit Expo Center", capacity: 800, location: "Westlands", status: "Booked" },
    { id: 3, name: "Nairobi Convention Hub", capacity: 500, location: "Upper Hill", status: "Available" },
  ];

  const [venues, setVenues] = useState(initialVenues);
  const [isAddVenueOpen, setIsAddVenueOpen] = useState(false);
  const [venueForm, setVenueForm] = useState({
    name: "",
    capacity: "",
    location: "",
    status: "Available",
  });

  const handleOpenAddVenue = () => {
    setVenueForm({
      name: "",
      capacity: "",
      location: "",
      status: "Available",
    });
    setIsAddVenueOpen(true);
  };

  const handleAddVenue = (event) => {
    event.preventDefault();

    setVenues((prevVenues) => [
      {
        id: Date.now(),
        name: venueForm.name,
        capacity: Number(venueForm.capacity) || 0,
        location: venueForm.location,
        status: venueForm.status,
      },
      ...prevVenues,
    ]);

    setIsAddVenueOpen(false);
  };

  return (
    <AdminLayout title="Manage Venues">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex justify-end">
          <button
            onClick={handleOpenAddVenue}
            className="flex items-center gap-2 rounded-2xl bg-cyan-400/20 px-4 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/30"
          >
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

      <Modal isOpen={isAddVenueOpen} title="Add Venue" onClose={() => setIsAddVenueOpen(false)}>
        <form onSubmit={handleAddVenue} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Venue name"
            value={venueForm.name}
            onChange={(event) => setVenueForm((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          />

          <input
            required
            type="number"
            min="0"
            placeholder="Capacity"
            value={venueForm.capacity}
            onChange={(event) => setVenueForm((prev) => ({ ...prev, capacity: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          />

          <input
            required
            type="text"
            placeholder="Location"
            value={venueForm.location}
            onChange={(event) => setVenueForm((prev) => ({ ...prev, location: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          />

          <select
            value={venueForm.status}
            onChange={(event) => setVenueForm((prev) => ({ ...prev, status: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          >
            <option className="text-slate-900">Available</option>
            <option className="text-slate-900">Booked</option>
          </select>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={() => setIsAddVenueOpen(false)} className="rounded-2xl bg-white/10 px-4 py-2 hover:bg-white/20">
              Cancel
            </button>
            <button type="submit" className="rounded-2xl bg-cyan-400/20 px-4 py-2 font-semibold text-cyan-300 hover:bg-cyan-400/30">
              Add Venue
            </button>
          </div>
        </form>
      </Modal>
    </AdminLayout>
  );
}

export default Venues;