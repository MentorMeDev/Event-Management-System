import { useState } from "react";
import Modal from "../../components/ui/Modal";
import RoleLayout from "../../components/layout/RoleLayout";

function UserEvents() {
  const initialEvents = [
    { id: 1, name: "Tech Summit 2026", date: "12 Apr 2026", location: "KICC Main Hall" },
    { id: 2, name: "Startup Connect", date: "18 Apr 2026", location: "Sarit Expo Center" },
    { id: 3, name: "Creative Expo", date: "25 Apr 2026", location: "Nairobi Hub" },
  ];

  const [events, setEvents] = useState(initialEvents);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventForm, setEventForm] = useState({
    name: "",
    date: "",
    location: "",
  });
  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleOpenCreate = () => {
    setEventForm({
      name: "",
      date: "",
      location: "",
    });
    setIsCreateOpen(true);
  };

  const handleCreateEvent = (event) => {
    event.preventDefault();

    setEvents((prevEvents) => [
      {
        id: Date.now(),
        name: eventForm.name,
        date: eventForm.date,
        location: eventForm.location,
      },
      ...prevEvents,
    ]);

    setIsCreateOpen(false);
  };

  const handleOpenRegister = (eventItem) => {
    setSelectedEvent(eventItem);
    setRegisterForm({
      fullName: "",
      email: "",
      phone: "",
    });
    setIsRegisterOpen(true);
  };

  const handleRegisterForEvent = (event) => {
    event.preventDefault();
    setIsRegisterOpen(false);
    setSelectedEvent(null);
  };

  return (
    <RoleLayout role="user" title="Events">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex justify-end">
          <button
            onClick={handleOpenCreate}
            className="rounded-2xl bg-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/30"
          >
            Create Event
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
              <h3 className="text-xl font-bold">{event.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{event.date}</p>
              <p className="mt-1 text-sm text-slate-300">{event.location}</p>
              <button
                onClick={() => handleOpenRegister(event)}
                className="mt-4 rounded-2xl bg-cyan-400/20 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/30"
              >
                Register
              </button>
            </div>
          ))}
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
              placeholder="Date (e.g. 26 Apr 2026)"
              value={eventForm.date}
              onChange={(event) => setEventForm((prev) => ({ ...prev, date: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
            />
            <input
              required
              type="text"
              placeholder="Location"
              value={eventForm.location}
              onChange={(event) => setEventForm((prev) => ({ ...prev, location: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsCreateOpen(false)}
                className="rounded-2xl bg-white/10 px-4 py-2 hover:bg-white/20"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-2xl bg-cyan-400/20 px-4 py-2 font-semibold text-cyan-300 hover:bg-cyan-400/30"
              >
                Save Event
              </button>
            </div>
          </form>
        </Modal>

        <Modal
          isOpen={isRegisterOpen}
          title={`Register: ${selectedEvent?.name ?? "Event"}`}
          onClose={() => setIsRegisterOpen(false)}
        >
          <form onSubmit={handleRegisterForEvent} className="space-y-4">
            <input
              required
              type="text"
              placeholder="Full name"
              value={registerForm.fullName}
              onChange={(event) =>
                setRegisterForm((prev) => ({ ...prev, fullName: event.target.value }))
              }
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
            />

            <input
              required
              type="email"
              placeholder="Email address"
              value={registerForm.email}
              onChange={(event) =>
                setRegisterForm((prev) => ({ ...prev, email: event.target.value }))
              }
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
            />

            <input
              required
              type="tel"
              placeholder="Phone number"
              value={registerForm.phone}
              onChange={(event) =>
                setRegisterForm((prev) => ({ ...prev, phone: event.target.value }))
              }
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
            />

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <p>Event: {selectedEvent?.name}</p>
              <p>Date: {selectedEvent?.date}</p>
              <p>Location: {selectedEvent?.location}</p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsRegisterOpen(false)}
                className="rounded-2xl bg-white/10 px-4 py-2 hover:bg-white/20"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-2xl bg-cyan-400/20 px-4 py-2 font-semibold text-cyan-300 hover:bg-cyan-400/30"
              >
                Confirm Registration
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </RoleLayout>
  );
}

export default UserEvents;