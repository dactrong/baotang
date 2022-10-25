import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div>
      <div className="border bg-black mb-5 text-white">
        <div className="m-4">
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
          <span className="pl-4">
            {" "}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </div>
    </div>
  );
}
