import React from "react";

const Language = () => {
  return (
    <div className="nav-item languageIcon me-0 me-md-2 dropdown">
      <a
        className="text-reset me-0 me-md-2 dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        <i id="selected-lang-flag" className="flag-united-kingdom flag m-0"></i>
      </a>
      <ul
        className="dropdown-menu"
        aria-labelledby="navbarDropdown"
        style={{
          position: "absolute",
          margin: "0px",
          transform: "translate(-16px, 34px)",
        }}
        data-popper-placement="bottom-end"
        data-mdb-popper="null"
      >
        <li>
          <a
            data-i18n-switcher=""
            data-i18n-lang="pl"
            className="dropdown-item"
            href="#"
          >
            <i className="flag-egypt flag"></i>العربية
          </a>
        </li>
        <li>
          <a
            data-i18n-switcher=""
            data-i18n-lang="ja"
            className="dropdown-item"
            href="#"
          >
            <i className="flag-japan flag"></i>日本語
          </a>
        </li>
        <li>
          <a
            data-i18n-switcher=""
            data-i18n-lang="de"
            className="dropdown-item"
            href="#"
          >
            <i className="flag-germany flag"></i>Deutsch
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Language;
