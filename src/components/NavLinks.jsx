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
              className={`nav-link capitalize font-poppins tracking-wider text-graphite hover:font-semibold hover:text-base transition-all duration-300 px-2 ${
                isActive ? "font-semibold" : ""
              }`}
              to={url}
            >
              {text}
              {isActive && (
                <PiFlyingSaucer className="text-stone-500 hidden lg:block " />
              )}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
