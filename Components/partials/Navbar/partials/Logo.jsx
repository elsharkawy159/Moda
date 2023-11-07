import Link from "next/link.js";

const Logo = ({ hatColor }) => {
  return (
    <Link
      className="navbar-brand position-relative me-2 mb-1 d-flex align-items-center"
      href="/"
    >
      <img src="/img/logo.png" width={100} alt="Logo" loading="lazy" />
      <i
        className={`fa-solid fa-hat-cowboy ${hatColor} position-absolute fs-4`}
        style={{ rotate: "-30deg", top: "-5px", left: "-4px" }}
      ></i>
    </Link>
  );
};

export default Logo;
