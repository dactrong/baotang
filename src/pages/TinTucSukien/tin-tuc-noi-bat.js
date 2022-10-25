import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
// import  listNews  from "../../api/news";

export default function TinTucNoiBat() {
  const [tinTuc, setTinTuc] = useState();
  console.log(tinTuc);

  useEffect(() => {
    const getNews = async () => {
      const { data } = await axios.get(`http://localhost:8000/news/get-all-by-publish?type=1`)
      console.log(data);
      setTinTuc(data) 
    }
    getNews();
  }, [])
  console.log(tinTuc);
  
  
  return (
    <div className="m-4 ">
      <div className="">
        <div className="grid grid-cols-2 mb-3">
          <h1>Tin tức nổi bật</h1>
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
                {/* <table>
            <thead>
                <th>name</th>
                <th>name</th>
                <th>name</th><th>name</th>
            </thead>
                <tbody>
                <td>Chiều ngày 30/11/2020, Hội đồng khoa học Bảo tàng Bắc Ninh tổ chức Hội nghị nghiệm thu bảo quản hiện vật ngoài trời (gồm: 01 máy bay Mic 21, 01 súng cao xạ, 01 pháo cao xạ) và 15 hiện vật gốm tu sửa, phục dựng (01 đầu rồng, 03 thiên nga, 03 tháp, 01 vò, 04 lá đề, 01 bình, 01 đầu ngói ống, 01 bộ phận chân đèn- đều là những hiện vật có giá trị lớn về mặt lịch sử, mỹ thuật, trong đó phần lớn là thời Lý). Đồng chí Nguyễn Thị Trọng - Giám đốc Bảo tàng, Chủ tịch Hội đồng khoa học cơ sở chủ trì Hội nghị; đại diện Công ty TNHH Công nghệ bảo quản, bảo tồn di sản và các thành viên Hội đồng khoa học.</td>
                <td>Chiều ngày 30/11/2020, Hội đồng khoa học Bảo tàng Bắc Ninh tổ chức Hội nghị nghiệm thu bảo quản hiện vật ngoài trời (gồm: 01 máy bay Mic 21, 01 súng cao xạ, 01 pháo cao xạ) và 15 hiện vật gốm tu sửa, phục dựng (01 đầu rồng, 03 thiên nga, 03 tháp, 01 vò, 04 lá đề, 01 bình, 01 đầu ngói ống, 01 bộ phận chân đèn- đều là những hiện vật có giá trị lớn về mặt lịch sử, mỹ thuật, trong đó phần lớn là thời Lý). Đồng chí Nguyễn Thị Trọng - Giám đốc Bảo tàng, Chủ tịch Hội đồng khoa học cơ sở chủ trì Hội nghị; đại diện Công ty TNHH Công nghệ bảo quản, bảo tồn di sản và các thành viên Hội đồng khoa học.</td>
                Chiều ngày 30/11/2020, Hội đồng khoa học Bảo tàng Bắc Ninh tổ chức Hội nghị nghiệm thu bảo quản hiện vật ngoài trời (gồm: 01 máy bay Mic 21, 01 súng cao xạ, 01 pháo cao xạ) và 15 hiện vật gốm tu sửa, phục dựng (01 đầu rồng, 03 thiên nga, 03 tháp, 01 vò, 04 lá đề, 01 bình, 01 đầu ngói ống, 01 bộ phận chân đèn- đều là những hiện vật có giá trị lớn về mặt lịch sử, mỹ thuật, trong đó phần lớn là thời Lý). Đồng chí Nguyễn Thị Trọng - Giám đốc Bảo tàng, Chủ tịch Hội đồng khoa học cơ sở chủ trì Hội nghị; đại diện Công ty TNHH Công nghệ bảo quản, bảo tồn di sản và các thành viên Hội đồng khoa học.                        <td>aaaaaaaaaaa</td>
                </tbody>
            </table> */}
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="table-fixed w-full">
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
                              HỌP NGHIỆM THU HIỆN VẬT TU SỬA, BẢO QUẢN NĂM 2020
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                              Chiều ngày 30/11/2020, Hội đồng khoa học Bảo tàng
                              Bắc Ninh tổ chức Hội nghị nghiệm thu bảo quản hiện
                              vật ngoài trời (gồm: 01 máy bay Mic 21, 01 súng
                              cao xạ, 01 pháo cao xạ) và 15 hiện vật gốm tu sửa,
                              phục dựng (01 đầu rồng, 03 thiên nga, 03 tháp, 01
                              vò, 04 lá đề, 01 bình, 01 đầu ngói ống, 01 bộ phận
                              chân đèn- đều là những hiện vật có giá trị lớn về
                              mặt lịch sử, mỹ thuật, trong đó phần lớn là thời
                              Lý). Đồng chí Nguyễn Thị Trọng - Giám đốc Bảo
                              tàng, Chủ tịch Hội đồng khoa học cơ sở chủ trì Hội
                              nghị; đại diện Công ty TNHH Công nghệ bảo quản,
                              bảo tồn di sản và các thành viên Hội đồng khoa
                              học.
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
