import { useState } from "react";
import {
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  Shield,
  UserCheck,
  UserX,
} from "lucide-react";
import AdminLayout from "../../components/layout/AdminLayout";
import Modal from "../../components/ui/Modal";

function Users() {
  const initialUsers = [
    {
      id: 1,
      name: "Mary Wanjiku",
      email: "mary@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Kevin Otieno",
      email: "kevin@example.com",
      role: "Staff",
      status: "Active",
    },
    {
      id: 3,
      name: "Faith Njeri",
      email: "faith@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Brian Mutua",
      email: "brian@example.com",
      role: "Staff",
      status: "Active",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active",
  });

  const handleOpenAddUser = () => {
    setUserForm({
      name: "",
      email: "",
      role: "User",
      status: "Active",
    });
    setIsAddUserOpen(true);
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    setUsers((prevUsers) => [
      {
        id: Date.now(),
        name: userForm.name,
        email: userForm.email,
        role: userForm.role,
        status: userForm.status,
      },
      ...prevUsers,
    ]);

    setIsAddUserOpen(false);
  };

  return (
    <AdminLayout title="Manage Users">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-end">
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl hover:bg-white/15">
              <Filter className="h-4 w-4" />
              Filter
            </button>
            <button
              onClick={handleOpenAddUser}
              className="flex items-center gap-2 rounded-2xl bg-cyan-400/20 px-4 py-3 font-semibold text-cyan-300 backdrop-blur-xl hover:bg-cyan-400/30"
            >
              <Plus className="h-4 w-4" />
              Add User
            </button>
          </div>
        </div>

        <div className="mb-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-cyan-300" />
              <div>
                <p className="text-sm text-slate-300">Admins</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <div className="flex items-center gap-3">
              <UserCheck className="h-6 w-6 text-emerald-300" />
              <div>
                <p className="text-sm text-slate-300">Active Users</p>
                <h3 className="text-2xl font-bold">4,281</h3>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
            <div className="flex items-center gap-3">
              <UserX className="h-6 w-6 text-rose-300" />
              <div>
                <p className="text-sm text-slate-300">Inactive Users</p>
                <h3 className="text-2xl font-bold">281</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-2xl font-bold">User Directory</h2>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
              <Search className="h-4 w-4 text-slate-300" />
              <input
                type="text"
                placeholder="Search users..."
                className="bg-transparent text-sm outline-none placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-sm text-slate-300">
                  <th className="pb-4">Name</th>
                  <th className="pb-4">Email</th>
                  <th className="pb-4">Role</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-white/5">
                    <td className="py-4 font-medium">{user.name}</td>
                    <td className="py-4 text-slate-300">{user.email}</td>
                    <td className="py-4">{user.role}</td>
                    <td className="py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-emerald-400/20 text-emerald-300"
                            : "bg-rose-400/20 text-rose-300"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="rounded-xl p-2 hover:bg-white/10">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal isOpen={isAddUserOpen} title="Add User" onClose={() => setIsAddUserOpen(false)}>
        <form onSubmit={handleAddUser} className="space-y-4">
          <input
            required
            type="text"
            placeholder="Full name"
            value={userForm.name}
            onChange={(event) => setUserForm((prev) => ({ ...prev, name: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          />

          <input
            required
            type="email"
            placeholder="Email address"
            value={userForm.email}
            onChange={(event) => setUserForm((prev) => ({ ...prev, email: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          />

          <select
            value={userForm.role}
            onChange={(event) => setUserForm((prev) => ({ ...prev, role: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          >
            <option className="text-slate-900">Admin</option>
            <option className="text-slate-900">Staff</option>
            <option className="text-slate-900">User</option>
          </select>

          <select
            value={userForm.status}
            onChange={(event) => setUserForm((prev) => ({ ...prev, status: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none"
          >
            <option className="text-slate-900">Active</option>
            <option className="text-slate-900">Inactive</option>
          </select>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={() => setIsAddUserOpen(false)} className="rounded-2xl bg-white/10 px-4 py-2 hover:bg-white/20">
              Cancel
            </button>
            <button type="submit" className="rounded-2xl bg-cyan-400/20 px-4 py-2 font-semibold text-cyan-300 hover:bg-cyan-400/30">
              Add User
            </button>
          </div>
        </form>
      </Modal>
    </AdminLayout>
  );
}

export default Users;