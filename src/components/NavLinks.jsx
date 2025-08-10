import { PiFlyingSaucer } from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/about", text: "about" },
  { id: 3, url: "/destinations", text: "destinations" },
  { id: 4, url: "/services", text: "services" },
  { id: 5, url: "/blog", text: "blog" },
  { id: 6, url: "/gallery", text: "gallery" },
  { id: 7, url: "/contact", text: "contact us" },
];

const NavLinks = () => {
  const location = useLocation();
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        const isActive = location.pathname === url;
        return (
          <li key={id} className="">
            <NavLink
              className={`nav-link capitalize font-poppins tracking-wider text-graphite transition-all duration-300 px-2 flex items-center gap-1 relative group`}
              to={url}
            >
              {/* Container with fixed width based on bold text */}
              <span className="relative inline-block">
                {/* Invisible bold text to reserve space */}
                <span className="invisible font-semibold" aria-hidden="true">
                  {text}
                </span>
                {/* Visible text positioned absolutely */}
                <span className="absolute inset-0 group-hover:font-semibold transition-all duration-100">
                  {text}
                </span>
              </span>
              <PiFlyingSaucer
                className={`text-stone-500 lg:block transition-all duration-300 ease-in-out 
                  ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}`}
              />
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
