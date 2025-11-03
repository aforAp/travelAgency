import { Header, StatsCard, TripCard } from "~/components";
import { dashboardStats, users, user, allTrips } from "~/constants";
const {totalUsers, usersJoined, totalTrips, tripsCreated, userRole} = dashboardStats;
const Dashboard = () => {

 

  const user = {name: "Satheesh"};
  return (
   <main className="dashboard wrapper w-full">
     <Header title={`Welcome ${user?.name ?? "Guest"} `} description="Track activity, trends and popular destinations in real time" />
     <section className="flex flex-col gap-6">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-6 w-full">
        <StatsCard headerTitle="total Users" total={totalUsers} currentMonthCount={usersJoined.currentMonth} lastMonthCount={usersJoined.lastMonth} /> 
         <StatsCard headerTitle="Total Trips" total={totalTrips} currentMonthCount={tripsCreated.currentMonth} lastMonthCount={tripsCreated.lastMonth} /> 
      <StatsCard headerTitle="Active Users Today" total={userRole.total} currentMonthCount={userRole.currentMonth} lastMonthCount={userRole.lastMonth} /> 
    
      </div>
     </section>
     <section className="container">
      <h1 className="text-xl font-semibold text-drak-100">
        Created Trips
      </h1>
      <div className="trip-grid">
        {allTrips.slice(0, 4).map(({id, name, imageUrls, itinerary, tags, estimatedPrice}) => (
          <TripCard key={id} id={id.toString()} name={name} imageUrl={imageUrls[0]} location={itinerary?.[0]?.location ?? ''} tags={tags} price={estimatedPrice} />  
        ))}
      </div>
     </section>
   </main>
  )
}

export default Dashboard;
