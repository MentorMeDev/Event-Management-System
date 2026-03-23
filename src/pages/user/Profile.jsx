import RoleLayout from "../../components/layout/RoleLayout";

function Profile() {
  return (
    <RoleLayout role="user" title="Profile">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
        <h3 className="text-xl font-bold">My Profile</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none" value="Marylyne User" readOnly />
          <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none" value="mary.user@example.com" readOnly />
        </div>
        <button className="mt-5 rounded-2xl bg-cyan-400/20 px-4 py-2 font-semibold text-cyan-300 hover:bg-cyan-400/30">
          Edit Profile
        </button>
      </div>
    </RoleLayout>
  );
}

export default Profile;
