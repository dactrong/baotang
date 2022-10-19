import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ThoiGianMoCua() {
  return (
    <div className="m-4 ">
      <div className="">
        <div className="grid grid-cols-2 mb-3">
          <h1 className="font-bold">Thời gian mở cửa</h1>
          
        </div>
        <div className="bg-white ">
          <div className="p-3">
         
            <div>
              <div>
                <div className=" ">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2  min-w-full sm:px-6 lg:px-8 grid grid-cols-5 px-5 text-center">
                      <div className="text-center pr-5">
                        <p>Tên</p>
                      </div>
                      <div className=" col-span-4 text-left">
                        <input type="text" className="border col-span-4 w-[700px] "></input>
                      </div>
                    </div>
                    <div className="py-2  min-w-full sm:px-6 lg:px-8 grid grid-cols-5 px-5 text-center">
                      <div className="text-center pr-5">
                        <p>Tóm tắt</p>
                      </div>
                      <div className=" col-span-4 text-left">
                      <textarea className="border col-span-4 w-[700px] "></textarea>
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
