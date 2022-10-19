import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faFile,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Giaoduc() {
    const [show1, setShow1] = useState(false);

  const isShowInfo1 = () => {
    setShow1(!show1);
  };
  return (
    <div> <ul className="pt-2  space-y-1 text-sm font-bold ">
    <li className="rounded-sm">
      <Link
        href="#"
        className=" items-center p-2 space-x-3 rounded-md hover:text-white text-slate-400  "
        onClick={() => isShowInfo1()}
      >
        <span>
          <FontAwesomeIcon icon={faGraduationCap} />
        </span>
        <span>Giáo dục</span>
        <span className="float-right">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </Link>

      {/*  */}
      {show1 === true ? (
        <>
          <li className="rounded-sm text-xs pl-2 hover:text-white text-slate-400 ">
            <Link
              to="/HuongDanThamQuan"
              className="flex items-center p-2 space-x-3 rounded-md "
            >
              <FontAwesomeIcon icon={faFile} />
              <span>Hướng dẫn thăm quan</span>
            </Link>
          </li>
          <li className="rounded-sm text-xs pl-2 hover:text-white text-slate-400">
            <Link
              to=""
              className="flex items-center p-2 space-x-3 rounded-md "
            >
              <FontAwesomeIcon icon={faFile} />
              <span>Hoạt động giáo dục</span>
            </Link>
          </li>
         
        </>
      ) : null}
    </li>
  </ul></div>
  )
}
