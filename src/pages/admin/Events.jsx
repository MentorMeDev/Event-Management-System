import { useState } from "react";
import {
  Plus,
  Search,
  CalendarDays,
  MapPin,
  Users,
  MoreHorizontal,
} from "lucide-react";
import AdminLayout from "../../components/layout/AdminLayout";
import Modal from "../../components/ui/Modal";

function Events() {
  const initialEvents = [
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

  const [events, setEvents] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [eventForm, setEventForm] = useState({
    name: "",
    date: "",
    venue: "",
    attendees: "",
    status: "Upcoming",
  });

  const handleOpenCreate = () => {
    setEventForm({
      name: "",
      date: "",
      venue: "",
      attendees: "",
      status: "Upcoming",
    });
    setIsCreateOpen(true);
  };

  const handleCreateEvent = (event) => {
    event.preventDefault();

    const newEvent = {
      id: Date.now(),
      name: eventForm.name,
      date: eventForm.date,
      venue: eventForm.venue,
      attendees: Number(eventForm.attendees) || 0,
      status: eventForm.status,
    };

    setEvents((prevEvents) => [newEvent, ...prevEvents]);
    setIsCreateOpen(false);
  };

  const handleOpenView = (eventItem) => {
    setSelectedEvent(eventItem);
    setIsViewOpen(true);
  };

  const handleOpenEdit = (eventItem) => {
    setSelectedEvent(eventItem);
    setEventForm({
      name: eventItem.name,
      date: eventItem.date,
      venue: eventItem.venue,
      attendees: String(eventItem.attendees),
      status: eventItem.status,
    });
    setIsEditOpen(true);
  };

  const handleEditEvent = (event) => {
    event.preventDefault();

    setEvents((prevEvents) =>
      prevEvents.map((eventItem) => {
        if (eventItem.id !== selectedEvent.id) {
          return eventItem;
        }

        return {
          ...eventItem,
          name: eventForm.name,
          date: eventForm.date,
          venue: eventForm.venue,
          attendees: Number(eventForm.attendees) || 0,
          status: eventForm.status,
        };
      })
    );

    setIsEditOpen(false);
    setSelectedEvent(null);
  };

  return (
    <AdminLayout title="Manage Events">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex justify-end">
          <button
            onClick={handleOpenCreate}
            className="flex items-center gap-2 rounded-2xl bg-cyan-400/20 px-4 py-3 font-semibold text-cyan-300 backdrop-blur-xl hover:bg-cyan-400/30"
          >
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
                <button
                  onClick={() => handleOpenView(event)}
                  className="rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/15"
                >
                  View
                </button>
                <button
                  onClick={() => handleOpenEdit(event)}
                  className="rounded-2xl bg-cyan-400/20 px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-400/30"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isCreateOpen} title="Create Event" onClose={() => setIsCreateOpen(false)}>
        <form onSubmit={handleCreateEvent} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Event name"
            value={eventForm.name}
            onChange={(event) => setEventForm((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          />
          <input
            required
            type="text"
            placeholder="Date (e.g. 25 Apr 2026)"
            value={eventForm.date}
            onChange={(event) => setEventForm((prev) => ({ ...prev, date: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          />
          <input
            required
            type="text"
            placeholder="Venue"
            value={eventForm.venue}
            onChange={(event) => setEventForm((prev) => ({ ...prev, venue: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          />
          <input
            required
            type="number"
            min="0"
            placeholder="Attendees"
            value={eventForm.attendees}
            onChange={(event) => setEventForm((prev) => ({ ...prev, attendees: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          />
          <select
            value={eventForm.status}
            onChange={(event) => setEventForm((prev) => ({ ...prev, status: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          >
            <option className="text-slate-900">Upcoming</option>
            <option className="text-slate-900">Ongoing</option>
            <option className="text-slate-900">Draft</option>
          </select>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={() => setIsCreateOpen(false)} className="rounded-2xl bg-white/10 px-4 py-2 hover:bg-white/20">
              Cancel
            </button>
            <button type="submit" className="rounded-2xl bg-cyan-400/20 px-4 py-2 font-semibold text-cyan-300 hover:bg-cyan-400/30">
              Save Event
            </button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={isViewOpen} title="Event Details" onClose={() => setIsViewOpen(false)}>
        {selectedEvent ? (
          <div className="space-y-3 text-slate-200">
            <p><span className="text-slate-400">Name:</span> {selectedEvent.name}</p>
            <p><span className="text-slate-400">Date:</span> {selectedEvent.date}</p>
            <p><span className="text-slate-400">Venue:</span> {selectedEvent.venue}</p>
            <p><span className="text-slate-400">Attendees:</span> {selectedEvent.attendees}</p>
            <p><span className="text-slate-400">Status:</span> {selectedEvent.status}</p>
          </div>
        ) : null}
      </Modal>

      <Modal isOpen={isEditOpen} title="Edit Event" onClose={() => setIsEditOpen(false)}>
        <form onSubmit={handleEditEvent} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Event name"
            value={eventForm.name}
            onChange={(event) => setEventForm((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          />
          <input
            required
            type="text"
            placeholder="Date"
            value={eventForm.date}
            onChange={(event) => setEventForm((prev) => ({ ...prev, date: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          />
          <input
            required
            type="text"
            placeholder="Venue"
            value={eventForm.venue}
            onChange={(event) => setEventForm((prev) => ({ ...prev, venue: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          />
          <input
            required
            type="number"
            min="0"
            placeholder="Attendees"
            value={eventForm.attendees}
            onChange={(event) => setEventForm((prev) => ({ ...prev, attendees: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          />
          <select
            value={eventForm.status}
            onChange={(event) => setEventForm((prev) => ({ ...prev, status: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          >
            <option className="text-slate-900">Upcoming</option>
            <option className="text-slate-900">Ongoing</option>
            <option className="text-slate-900">Draft</option>
          </select>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={() => setIsEditOpen(false)} className="rounded-2xl bg-white/10 px-4 py-2 hover:bg-white/20">
              Cancel
            </button>
            <button type="submit" className="rounded-2xl bg-cyan-400/20 px-4 py-2 font-semibold text-cyan-300 hover:bg-cyan-400/30">
              Update Event
            </button>
          </div>
        </form>
      </Modal>
    </AdminLayout>
  );
}

export default Events;
