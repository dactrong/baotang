import "./App.css";

import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import TinTucNoiBat from "./pages/TinTucSukien/tin-tuc-noi-bat";
import SuKienSapDienRa from "./pages/TinTucSukien/su-kien-sap-dien-ra";
import TrungBayThuongXuyen from "./pages/TrungBay/trung-bay-thuong-xuyen";
import TrungBayChuyenDe from "./pages/TrungBay/trung-bay-chuyen-de";
import TrungBayLuuDong from "./pages/TrungBay/trung-bay-luu-dong";
import KhaiQuatKhaoCoHoc from "./pages/NghienCuuSuuTam/khai-quat-khao-co-hoc";
import CongTacSuuTam from "./pages/NghienCuuSuuTam/cong-tac-suu-tam";
import DeTaiKhoaHocAnPham from "./pages/NghienCuuSuuTam/de-tai-khoa-hoc-an-pham";
import KienThucLichSuVanHoa from "./pages/NghienCuuSuuTam/kien-thuc-lich-su-van-hoa";
import BaoVatQuocGia from "./pages/HienVat/bao-vat-quoc-gia";
import CacBoSuuTap from "./pages/HienVat/cac-bo-suu-tap";
import HienVatTieuBieu from "./pages/HienVat/hien-vat-tieu-bieu";
import HuongDanThamQuan from "./pages/GiaoDuc/huong-dan-tam-quan";
import HoatDongGiaoDuc from "./pages/GiaoDuc/hoat-dong-giao-duc";
import ThoiGianMoCua from "./pages/ThongTinHuuIch/thoi-gian-mo-cua";

function App() {
  return (
    <div className="App">
      {/* <Admin></Admin> */}
      <Routes>
        <Route path="/" element={<AdminLayout></AdminLayout>}>
          <Route index element={<TinTucNoiBat></TinTucNoiBat>} />
          <Route path="TinTucNoiBat" element={<TinTucNoiBat></TinTucNoiBat>} />

          <Route
            path="SuKienSapDienRa"
            element={<SuKienSapDienRa></SuKienSapDienRa>}
          />
          <Route
            path="TrungBayThuongXuyen"
            element={<TrungBayThuongXuyen></TrungBayThuongXuyen>}
          />
          <Route
            path="TrungBayChuyenDe"
            element={<TrungBayChuyenDe></TrungBayChuyenDe>}
          />
          <Route
            path="TrungBayLuuDong"
            element={<TrungBayLuuDong></TrungBayLuuDong>}
          />
          <Route
            path="KhaiQuatKhaoCoHoc"
            element={<KhaiQuatKhaoCoHoc></KhaiQuatKhaoCoHoc>}
          />
          <Route
            path="CongTacSuuTam"
            element={<CongTacSuuTam></CongTacSuuTam>}
          />
          <Route
            path="DeTaiKhoaHocAnPham"
            element={<DeTaiKhoaHocAnPham></DeTaiKhoaHocAnPham>}
          />
          <Route
            path="KienThucLichSuVanHoa"
            element={<KienThucLichSuVanHoa></KienThucLichSuVanHoa>}
          />
          <Route
            path="BaoVatQuocGia"
            element={<BaoVatQuocGia></BaoVatQuocGia>}
          />
          <Route path="CacBoSuuTap" element={<CacBoSuuTap></CacBoSuuTap>} />
          <Route
            path="HienVatTieuBieu"
            element={<HienVatTieuBieu></HienVatTieuBieu>}
          />
          <Route
            path="HuongDanThamQuan"
            element={<HuongDanThamQuan></HuongDanThamQuan>}
          />
          <Route
            path="HoatDongGiaoDuc"
            element={<HoatDongGiaoDuc></HoatDongGiaoDuc>}
          />
          <Route
            path="ThoiGianMoCua"
            element={<ThoiGianMoCua></ThoiGianMoCua>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
