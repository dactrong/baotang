import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faFile,
  faImage,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function NghienCuuSuuTam() {
  const [show, setShow] = useState(false);

  const isShowInfo = () => {
    setShow(!show);
  };
  return (
    <div>
      {" "}
      <ul className="pt-2 space-y-1 text-sm font-bold ">
        <li className="rounded-sm">
          <Link
            href="#"
            className=" items-center p-2 space-x-3 rounded-md hover:text-white text-slate-400  "
            onClick={() => isShowInfo()}
          >
            <span>
              <FontAwesomeIcon icon={faBookOpen} />
            </span>
            <span>Nghiên cứu sưu tầm</span>
            <span className="float-right">
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </Link>

          {/*  */}
          {show === true ? (
            <>
              <li className="rounded-sm text-xs pl-2 hover:text-white text-slate-400 ">
                <Link
                  to="/KhaiQuatKhaoCoHoc"
                  className="flex items-center p-2 space-x-3 rounded-md "
                >
                  <FontAwesomeIcon icon={faFile} />
                  <span>Khai quật khảo cổ học</span>
                </Link>
              </li>
              <li className="rounded-sm text-xs pl-2 hover:text-white text-slate-400">
                <Link
                  to="/CongTacSuuTam"
                  className="flex items-center p-2 space-x-3 rounded-md "
                >
                  <FontAwesomeIcon icon={faFile} />
                  <span>Công tác sưu tầm</span>
                </Link>
              </li>
              <li className="rounded-sm text-xs pl-2 hover:text-white text-slate-400">
                <Link
                  to="/DeTaiKhoaHocAnPham"
                  className="flex items-center p-2 space-x-3 rounded-md "
                >
                  <FontAwesomeIcon icon={faFile} />
                  <span>Đề tài khoa học ấn phẩm</span>
                </Link>
              </li>
              <li className="rounded-sm text-xs pl-2 hover:text-white text-slate-400">
                <Link
                  to="/KienThucLichSuVanHoa"
                  className="flex items-center p-2 space-x-3 rounded-md "
                >
                  <FontAwesomeIcon icon={faFile} />
                  <span>Kiên thức lịch sử văn hóa</span>
                </Link>
              </li>
              
            </>
          ) : null}
        </li>
      </ul>
    </div>
  );
}
