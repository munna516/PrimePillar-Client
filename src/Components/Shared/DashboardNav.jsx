const DashboardNav = ({ role }) => {
  let final = "";
  if (role) {
    const [first, ...rest] = role || "";
     final = first.toUpperCase() + rest.join("");
  }

  return (
    <div className="bg-dark-blue text-white p-5 flex items-center justify-evenly border-b-2  border-gray-400 pr-32">
      <div></div>
      <h1 className="text-2xl font-bold">{final} Dashboard</h1>
    </div>
  );
};

export default DashboardNav;
// {role?.charAt(0)?.toUpperCase() + role.slice(1)}
