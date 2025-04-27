import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
  const user = {
    name: "Ashish Kumar",
    email: "random@gmail.com",
    imageUrl: "/assets/images/david.webp",
  };

  return (
    <section className="nav-items h-full">
      <Link to={"/"} className="link-logo">
        <img
          src={"/assets/icons/logo.svg"}
          alt="logo"
          className="size-[30px]"
        />
        <h1>Tourvisto</h1>
      </Link>
      <div className="container">
        <nav className="flex flex-col gap-2">
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  onClick={handleClick}
                  className={cn("group nav-item", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-0 group-hover:invert ${
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    }`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
        <footer className="nav-footer mt-auto">
          <img
            src={user?.imageUrl || "/assets/images/david.webp"}
            alt={user?.name || "Ashish"}
          />
          <article>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </article>
          <button
            className="cursor-pointer"
            onClick={() => {
              console.log("Logout");
            }}
          >
            <img
              src={"/assets/icons/logout.svg"}
              alt="Logout"
              className="size-6"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
