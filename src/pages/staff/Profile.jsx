import RoleLayout from "../../components/layout/RoleLayout";

function StaffProfile() {
  return (
    <RoleLayout role="staff" title="Profile">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Events Supported</p>
            <p className="mt-2 text-3xl font-bold">42</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Check-Ins Completed</p>
            <p className="mt-2 text-3xl font-bold">680</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <p className="text-sm text-slate-300">Performance Score</p>
            <p className="mt-2 text-3xl font-bold">94%</p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <h3 className="text-xl font-bold">Staff Profile Details</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none" value="Marylyne Staff" readOnly />
              <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none" value="staff@example.com" readOnly />
              <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none" value="Operations Team" readOnly />
              <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none" value="Morning Shift" readOnly />
            </div>
            <button className="mt-5 rounded-2xl bg-cyan-400/20 px-4 py-2 font-semibold text-cyan-300 hover:bg-cyan-400/30">
              Edit Profile
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <h3 className="text-xl font-bold">Recent Activity</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="rounded-2xl bg-white/10 p-3">Checked in 24 attendees</li>
              <li className="rounded-2xl bg-white/10 p-3">Completed venue setup checklist</li>
              <li className="rounded-2xl bg-white/10 p-3">Updated event progress status</li>
            </ul>
          </div>
        </div>
      </div>
    </RoleLayout>
  );
}

export default StaffProfile;
