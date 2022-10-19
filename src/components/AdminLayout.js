import React from "react";

import Sidebar from "./Sidebar";
import {  Outlet } from "react-router-dom";
import TinTucSuKien from "./NavBar/TinTucSuKien";
import Trungbay from "./NavBar/Trungbay";
import NghienCuuSuuTam from "./NavBar/NghienCuuSuuTam";
import Giaoduc from "./NavBar/Giaoduc";
import ThongTinHuuIch from "./NavBar/ThongTinHuuIch";

export default function AdminLayout() {
  
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-slate-800 shadow  text-white w-[300px]">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Bảo tàng Bắc Ninh</h2>
          </div>
          <div className="flex-1">
              <TinTucSuKien></TinTucSuKien>
              <Trungbay></Trungbay>
              <NghienCuuSuuTam></NghienCuuSuuTam>
              <Giaoduc></Giaoduc>
              <ThongTinHuuIch></ThongTinHuuIch>
           
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-slate-200">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
