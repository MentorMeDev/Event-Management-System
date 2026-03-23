// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "../pages/public/Home";
// import Login from "../pages/auth/Login";
// import Register from "../pages/auth/Register";

// import AdminDashboard from "../pages/admin/Dashboard";
// import Users from "../pages/admin/Users";
// import AdminEvents from "../pages/admin/Events";
// import Venues from "../pages/admin/Venues";
// import Reports from "../pages/admin/Reports";
// import Settings from "../pages/admin/Settings";

// import UserDashboard from "../pages/user/Dashboard";
// import UserEvents from "../pages/user/Events";
// import MyRegistrations from "../pages/user/MyRegistrations";
// import Tickets from "../pages/user/Tickets";
// import Profile from "../pages/user/Profile";

// import StaffDashboard from "../pages/staff/Dashboard";
// import AssignedEvents from "../pages/staff/AssignedEvents";
// import Tasks from "../pages/staff/Tasks";
// import CheckIn from "../pages/staff/CheckIn";
// import StaffProfile from "../pages/staff/Profile";

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         <Route path="/admin/dashboard" element={<AdminDashboard />} />
//         <Route path="/admin/users" element={<Users />} />
//         <Route path="/admin/events" element={<AdminEvents />} />
//         <Route path="/admin/venues" element={<Venues />} />
//         <Route path="/admin/reports" element={<Reports />} />
//         <Route path="/admin/settings" element={<Settings />} />

//         <Route path="/user/dashboard" element={<UserDashboard />} />
//         <Route path="/user/events" element={<UserEvents />} />
//         <Route path="/user/registrations" element={<MyRegistrations />} />
//         <Route path="/user/tickets" element={<Tickets />} />
//         <Route path="/user/profile" element={<Profile />} />

//         <Route path="/staff/dashboard" element={<StaffDashboard />} />
//         <Route path="/staff/assigned-events" element={<AssignedEvents />} />
//         <Route path="/staff/tasks" element={<Tasks />} />
//         <Route path="/staff/check-in" element={<CheckIn />} />
//         <Route path="/staff/profile" element={<StaffProfile />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;