import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SuKienSapDienRa() {
  return (
    <div className="m-4 ">
      <div className="">
        <div className="grid grid-cols-2 mb-3">
          <h1>Sự kiện sắp diễn ra</h1>
          <Link href="" className="text-right">
            {" "}
            Thêm mới
          </Link>
        </div>
        <div className="bg-white ">
          <div className="p-3">
            <div className="grid grid-cols-2">
              <div className="flex">
                <p>Hiển thị</p>
                <select className="border px-4 py-1 mx-1">
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                </select>
                <p>dòng</p>
              </div>
              <div className="flex float-right">
                <p className="">Tìm kiếm:</p>
                <input type="text" className="border"></input>
              </div>
            </div>
            <div>
              <div>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="table-fixed w-full ">
                          <thead className="bg-white border-b">
                            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left w-20">
                              <FontAwesomeIcon icon={faArrowDown} />
                              <FontAwesomeIcon
                                icon={faArrowUp}
                                className="pl-2"
                              />
                            </th>
                            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left w-36">
                              Tên
                            </th>
                            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Tiêu đề
                            </th>
                            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left w-20">
                              Xuất bản
                            </th>
                          </thead>
                          <tbody>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              <FontAwesomeIcon icon={faTrash} />
                              <FontAwesomeIcon
                                icon={faPenToSquare}
                                className="pl-2"
                              />
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                              Đình Thọ Đức – Nghệ thuật kiến trúc thời Nguyễn và
                              những cổ vật giá trị
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                              Thọ Đức xưa còn có tên gọi khác là xã Thụ Triền
                              thuộc tổng Phong Xá, huyện Yên Phong, phủ Từ Sơn
                              (nay là thôn Thọ Đức, xã Tam Đa, huyện Yên Phong).
                              Tương truyền đình làng Thọ Đức được xây dựng trên
                              khu đất Trại Chĩnh vốn là địa điểm tập kết quân
                              đội do Lý Thường Kiệt lãnh đạo trong cuộc kháng
                              chiến chống quân xâm lược Tống ở thế kỷ XI của
                              quân dân nhà Lý.
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                              Có
                            </td>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
