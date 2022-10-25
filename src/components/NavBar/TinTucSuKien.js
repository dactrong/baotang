import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faChevronDown,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function TinTucSuKien() {
  const [show, setShow] = useState(false);

  const isShowInfo = () => {
    setShow(!show);
  };
  return (
    <div>
      {" "}
      <ul className="pt-2  space-y-1 text-sm font-bold ">
        <li className="rounded-sm">
          <Link
            href="#"
            className=" items-center p-2 space-x-3 rounded-md hover:text-white text-slate-400 "
            onClick={() => isShowInfo()}
          >
            <span className="">
              <FontAwesomeIcon icon={faNewspaper} />
            </span>
            <span>Tin tức sự kiện</span>
            <span className="float-right">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </Link>

          {/*  */}
          {show === true ? (
            <>
              <li className="rounded-sm text-xs pl-2 hover:text-white text-slate-400 ">
                <Link
                  to="/TinTucNoiBat"
                  className="flex items-center p-2 space-x-3 rounded-md "
                >
                  <FontAwesomeIcon icon={faFile} />
                  <span>Tin nổi bật</span>
                </Link>
              </li>
              <li className="rounded-sm text-xs pl-2 hover:text-white text-slate-400">
                <Link
                  to="/SuKienSapDienRa"
                  className="flex items-center p-2 space-x-3 rounded-md "
                >
                  <FontAwesomeIcon icon={faFile} />
                  <span>Sự kiện sắp diễn ra</span>
                </Link>
              </li>
            </>
          ) : null}
        </li>
      </ul>
    </div>
  );
}
