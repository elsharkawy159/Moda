import Link from "next/link.js";

const NavIcon = ({ icon, badge, href, title }) => {
  return (
    <Link className="navIcon" href={href} title={title}>
      <i className={`${icon} fs-4`}></i>
      <span className="badge rounded-pill badge-notification bg-danger">
        {badge}
      </span>
    </Link>
  );
};

export default NavIcon;
