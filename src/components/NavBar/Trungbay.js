import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faFile,
  faImage
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Trungbay() {
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
          <FontAwesomeIcon icon={faImage} />
        </span>
        <span>Trưng bày</span>
        <span className="float-right">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </Link>

      {/*  */}
      {show1 === true ? (
        <>
          <li className="rounded-sm text-xs pl-2 hover:text-white text-slate-400 ">
            <Link
              to="/TrungBayThuongXuyen"
              className="flex items-center p-2 space-x-3 rounded-md "
            >
              <FontAwesomeIcon icon={faFile} />
              <span>Trưng bày thường xuyên</span>
            </Link>
          </li>
          <li className="rounded-sm text-xs pl-2 hover:text-white text-slate-400">
            <Link
              to="/TrungBayChuyenDe"
              className="flex items-center p-2 space-x-3 rounded-md "
            >
              <FontAwesomeIcon icon={faFile} />
              <span>Trưng bày chuyên đề</span>
            </Link>
          </li>
          <li className="rounded-sm text-xs pl-2 hover:text-white text-slate-400">
            <Link
              to="/TrungBayLuuDong"
              className="flex items-center p-2 space-x-3 rounded-md "
            >
              <FontAwesomeIcon icon={faFile} />
              <span>Trưng bày lưu động</span>
            </Link>
          </li>
        </>
      ) : null}
    </li>
  </ul></div>
  )
}
