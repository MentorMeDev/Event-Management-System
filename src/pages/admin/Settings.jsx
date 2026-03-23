import { Save, Shield, Bell, Palette, Database } from "lucide-react";
import AdminLayout from "../../components/layout/AdminLayout";

function Settings() {
  return (
    <AdminLayout title="System Settings">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <div className="mb-4 flex items-center gap-3">
              <Shield className="h-5 w-5 text-cyan-300" />
              <h2 className="text-xl font-bold">Security Settings</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Admin name"
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-slate-300"
              />
              <input
                type="email"
                placeholder="Admin email"
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <div className="mb-4 flex items-center gap-3">
              <Bell className="h-5 w-5 text-cyan-300" />
              <h2 className="text-xl font-bold">Notifications</h2>
            </div>

            <div className="space-y-4">
              {["Email alerts", "System notifications", "Weekly reports"].map((item) => (
                <label
                  key={item}
                  className="flex items-center justify-between rounded-2xl bg-white/10 p-4"
                >
                  <span>{item}</span>
                  <input type="checkbox" className="h-4 w-4" defaultChecked />
                </label>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
              <div className="mb-4 flex items-center gap-3">
                <Palette className="h-5 w-5 text-cyan-300" />
                <h2 className="text-xl font-bold">Appearance</h2>
              </div>

              <select className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none">
                <option className="text-slate-900">Glassmorphism Dark</option>
                <option className="text-slate-900">Classic Light</option>
              </select>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
              <div className="mb-4 flex items-center gap-3">
                <Database className="h-5 w-5 text-cyan-300" />
                <h2 className="text-xl font-bold">System Backup</h2>
              </div>

              <button className="rounded-2xl bg-white/10 px-4 py-3 hover:bg-white/15">
                Backup Now
              </button>
            </div>
          </div>

          <div>
            <button className="flex items-center gap-2 rounded-2xl bg-cyan-400/20 px-5 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/30">
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Settings;