import { Header, StatsCard, TripCard } from "components";

const dashboard = () => {
  const user = {
    name: "Ashish",
  };
  const dashboardStats = {
    totalUsers: 12450,
    usersJoined: { currentMonth: 150, lastMonth: 120 },
    totalTrips: 3000,
    tripsCreated: { currentMonth: 133, lastMonth: 180 },
    userRole: { total: 66, currentMonth: 24, lastMonth: 19 },
  };
  const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } = dashboardStats;
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description={
          "Track activity, trends, and popular destinations in real time"
        }
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard 
            headerTitle="Total Users"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth} 
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatsCard 
            headerTitle="Total Trips"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth} 
            lastMonthCount={tripsCreated.lastMonth}
          />
          <StatsCard 
            headerTitle="Active Users"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth} 
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>
      <TripCard />
    </main>
  );
};

export default dashboard;
