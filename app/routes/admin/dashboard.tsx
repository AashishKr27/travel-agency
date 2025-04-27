import { Header } from "components";

const dashboard = () => {
  const user = {
    name: "Ashish",
    email: "random@gmail.com",
    imageUrl: "/assets/images/david.webp",
  };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description={
          "Track activity, trends, and popular destinations in real time"
        }
      />
      Dashboard Page Contents
    </main>
  );
};

export default dashboard;
