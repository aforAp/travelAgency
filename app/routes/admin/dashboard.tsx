import { Header } from "~/components";

const Dashboard = () => {

  const user = {name: "Satheesh"};
  return (
   <main className="dashboard wrapper w-full">
     <Header title={`Welcome ${user?.name ?? "Guest"} `} description="Track activity, trends and popular destinations in real time" />

   </main>
  )
}

export default Dashboard;
