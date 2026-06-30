// BÀI 1: CUNG HOÀNG ĐẠO
var can = [
  "Quý",
  "Giáp",
  "Ất",
  "Bính",
  "Đinh",
  "Mậu",
  "Kỷ",
  "Canh",
  "Tân",
  "Nhâm",
];
var chi = [
  "Hợi",
  "Tý",
  "Sửu",
  "Dần",
  "Mão",
  "Thìn",
  "Tỵ",
  "Ngọ",
  "Mùi",
  "Thân",
  "Dậu",
  "Tuất",
];

var imgcongap = {
  Tý: "./img/ty.png",
  Sửu: "./img/suu.png",
  Dần: "./img/dan.png",
  Mão: "./img/mao.png",
  Thìn: "./img/thin.png",
  Tỵ: "./img/ty1.png",
  Ngọ: "./img/ngo.png",
  Mùi: "./img/mui.png",
  Thân: "./img/than.png",
  Dậu: "./img/dau.png",
  Tuất: "./img/tuat.png",
  Hợi: "./img/hoi.png",
};

var imgcunghoangdao = {
  "Bạch Dương": "./img/bachduong.png",
  "Kim Ngưu": "./img/kimnguu.png",
  "Song Tử": "./img/songtu.png",
  "Cự Giải": "./img/cugiai.png",
  "Sư Tử": "./img/sutu.png",
  "Xử Nữ": "./img/xunu.png",
  "Thiên Bình": "./img/thienbinh.png",
  "Thiên Yết": "./img/thienyet.png",
  "Nhân Mã": "./img/nhanma.png",
  "Ma Kết": "./img/maket.png",
  "Bảo Bình": "./img/baobinh.png",
  "Song Ngư": "./img/songngu.png",
};

function Cunghoangdao(ngay, thang) {
  if ((thang === 3 && ngay >= 21) || (thang === 4 && ngay <= 19))
    return "Bạch Dương";
  if ((thang === 4 && ngay >= 20) || (thang === 5 && ngay <= 20))
    return "Kim Ngưu";
  if ((thang === 5 && ngay >= 21) || (thang === 6 && ngay <= 20))
    return "Song Tử";
  if ((thang === 6 && ngay >= 21) || (thang === 7 && ngay <= 22))
    return "Cự Giải";
  if ((thang === 7 && ngay >= 23) || (thang === 8 && ngay <= 22))
    return "Sư Tử";
  if ((thang === 8 && ngay >= 23) || (thang === 9 && ngay <= 22))
    return "Xử Nữ";
  if ((thang === 9 && ngay >= 23) || (thang === 10 && ngay <= 22))
    return "Thiên Bình";
  if ((thang === 10 && ngay >= 23) || (thang === 11 && ngay <= 21))
    return "Thiên Yết";
  if ((thang === 11 && ngay >= 22) || (thang === 12 && ngay <= 21))
    return "Nhân Mã";
  if ((thang === 12 && ngay >= 22) || (thang === 1 && ngay <= 19))
    return "Ma Kết";
  if ((thang === 1 && ngay >= 20) || (thang === 2 && ngay <= 18))
    return "Bảo Bình";
  return "Song Ngư";
}
function traCuuCungHoangDao() {
  var ngay = Number(document.getElementById("day").value);
  var thang = Number(document.getElementById("month").value);
  var nam = Number(document.getElementById("year").value);
  var divLoi = document.getElementById("zodiacError");
  if (!ngay || !thang || !nam || nam < 1) {
    divLoi.innerText = "Vui lòng nhập đầy đủ ngày, tháng, năm sinh.";
    return;
  }

  var dateCheck = new Date(nam, thang - 1, ngay);
  if (
    dateCheck.getFullYear() !== nam ||
    dateCheck.getMonth() !== thang - 1 ||
    dateCheck.getDate() !== ngay
  ) {
    divLoi.innerText = "Ngày tháng năm sinh không hợp lệ hoặc không tồn tại.";
    return;
  }

  divLoi.innerText = "";

  var chiSoCan = (((nam - 3) % 10) + 10) % 10;
  var chiSoChi = (((nam - 3) % 12) + 12) % 12;
  var thienCan = can[chiSoCan];
  var diaChi = chi[chiSoChi];
  var canChi = thienCan + " " + diaChi;
  // tính cung hoàng đạo
  var cungHoangDaoPhuongTay = Cunghoangdao(ngay, thang);
  document.getElementById("canChiVal").innerText = canChi;
  document.getElementById("zodiacVal").innerText = cungHoangDaoPhuongTay;
  document.getElementById("animalImg").src =
    imgcongap[diaChi] || "./img/12congiap.png";
  document.getElementById("animalImg").alt = diaChi;

  document.getElementById("zodiacImg").src =
    imgcunghoangdao[cungHoangDaoPhuongTay] || "./img/cunghoangdao.png";
  document.getElementById("zodiacImg").alt = cungHoangDaoPhuongTay;

  // hiển thị màu cho mệnh
  var khungAnhConGiap = document.getElementById("animalImg").parentElement;
  var elementBadge = document.getElementById("elementBadge");
  var tenMenh = "";
  var mauMenh = "";
  var mauGlow = "";

  if (thienCan === "Giáp" || thienCan === "Ất") {
    tenMenh = "Mộc";
    mauMenh = "rgb(34, 197, 94)";
    mauGlow = "rgba(34, 197, 94, 0.45)";
  } else if (thienCan === "Bính" || thienCan === "Đinh") {
    tenMenh = "Hỏa";
    mauMenh = "rgb(239, 68, 68)";
    mauGlow = "rgba(239, 68, 68, 0.45)";
  } else if (thienCan === "Mậu" || thienCan === "Kỷ") {
    tenMenh = "Thổ";
    mauMenh = "rgb(234, 179, 8)";
    mauGlow = "rgba(234, 179, 8, 0.45)";
  } else if (thienCan === "Canh" || thienCan === "Tân") {
    tenMenh = "Kim";
    mauMenh = "rgb(148, 163, 184)";
    mauGlow = "rgba(148, 163, 184, 0.45)";
  } else if (thienCan === "Nhâm" || thienCan === "Quý") {
    tenMenh = "Thủy";
    mauMenh = "rgb(59, 130, 246)";
    mauGlow = "rgba(59, 130, 246, 0.45)";
  }

  if (tenMenh) {
    khungAnhConGiap.style.borderColor = mauMenh;
    khungAnhConGiap.style.boxShadow = "0 0 20px " + mauGlow;

    elementBadge.style.display = "block";
    elementBadge.innerText = "Mệnh " + tenMenh;
    elementBadge.style.borderColor = mauMenh;
  } else {
    khungAnhConGiap.style.borderColor = "#e9d5ff";
    khungAnhConGiap.style.boxShadow = "0 4px 10px rgba(126, 34, 206, 0.05)";
    elementBadge.style.display = "none";
  }

  document.getElementById("animalLabel").innerText = "Thiên Can - Địa Chi";
}

// BÀI 2: DANH BẠ NGƯỜI DÙNG NGẪU NHIÊN

function taoNguoiDungNgauNhien() {
  var khuTrungBay = document.getElementById("userGallery");
  khuTrungBay.innerHTML =
    '<div style="grid-column: span 5; text-align: center; padding: 24px; color: #64748b; font-weight: 500;"><p>Đang tải dữ liệu...</p></div>';

  fetch("https://randomuser.me/api/?results=10")
    .then(function (phanHoi) {
      if (!phanHoi.ok) {
        throw new Error();
      }
      return phanHoi.json();
    })
    .then(function (duLieu) {
      var nguoiDungHienThi = duLieu.results;
      var html = "";

      nguoiDungHienThi.forEach(function (nguoiDung) {
        var duongDanCo =
          "https://flagcdn.com/w20/" + nguoiDung.nat.toLowerCase() + ".png";

        html += `
          <div class="user-card">
            <img class="user-avatar-img" src="${nguoiDung.picture.large}" alt="Ảnh đại diện">
            <h4>${nguoiDung.name.first} ${nguoiDung.name.last}</h4>
            <p class="user-email-text">${nguoiDung.email}</p>
            <div class="user-country">
              <img class="flag-icon" src="${duongDanCo}" alt="${nguoiDung.nat}" onerror="this.style.display='none'">
              <span>${nguoiDung.location.country}</span>
            </div>
          </div>
        `;
      });

      khuTrungBay.innerHTML = html;
    })
    .catch(function (loi) {
      khuTrungBay.innerHTML =
        '<div style="grid-column: span 5;" class="error-result"><span style="font-size: 20px; display: block; margin-bottom: 4px;">Lỗi</span>Không thể tải danh sách người dùng. Vui lòng kiểm tra lại kết nối mạng.</div>';
    });
}

// BÀI 3: ĐĂNG KÝ THÔNG TIN CƯ TRÚ

var duLieuTinhThanh = [];
function taiDanhSachTinhThanh() {
  var oChonTinh = document.getElementById("province");
  if (!oChonTinh) return;
  oChonTinh.options[0].textContent = "-- Đang tải danh sách tỉnh thành... --";
  fetch("https://provinces.open-api.vn/api/?depth=3")
    .then(function (phanHoi) {
      if (!phanHoi.ok) {
        throw new Error();
      }
      return phanHoi.json();
    })
    .then(function (duLieu) {
      duLieuTinhThanh = duLieu;
      oChonTinh.innerHTML =
        '<option value="">-- Chọn Tỉnh / Thành phố --</option>';

      for (var i = 0; i < duLieuTinhThanh.length; i++) {
        var tinh = duLieuTinhThanh[i];
        var tuyChon = document.createElement("option");
        tuyChon.value = tinh.code;
        tuyChon.textContent = tinh.name;
        oChonTinh.appendChild(tuyChon);
      }
    })
    .catch(function (loi) {
      console.error("Lỗi khi tải danh sách tỉnh thành:", loi);
      if (oChonTinh.options[0]) {
        oChonTinh.options[0].textContent = "-- Lỗi tải dữ liệu hành chính --";
      }
      alert(
        "Không thể tải dữ liệu hành chính. Vui lòng tải lại trang hoặc thử lại sau!",
      );
    });
}
document.addEventListener("DOMContentLoaded", function () {
  var oChonTinh = document.getElementById("province");
  var oChonXa = document.getElementById("ward");
  var bieuMauCuTru = document.getElementById("residentForm");
  // load danh sách tỉnh
  taiDanhSachTinhThanh();
  if (oChonTinh && oChonXa) {
    oChonTinh.addEventListener("change", function () {
      var maTinhDaChon = parseInt(this.value);
      // reset ô chọn Xã
      oChonXa.innerHTML = '<option value="">-- Chọn Xã / Phường --</option>';

      if (!maTinhDaChon) {
        oChonXa.disabled = true;
        return;
      }

      // tìm dữ liệu của Tỉnh
      var tinhDaChon = null;
      for (var i = 0; i < duLieuTinhThanh.length; i++) {
        if (duLieuTinhThanh[i].code === maTinhDaChon) {
          tinhDaChon = duLieuTinhThanh[i];
          break;
        }
      }

      if (tinhDaChon && tinhDaChon.districts) {
        var tatCaCacXa = [];
        for (var j = 0; j < tinhDaChon.districts.length; j++) {
          var huyen = tinhDaChon.districts[j];
          if (huyen.wards) {
            for (var k = 0; k < huyen.wards.length; k++) {
              tatCaCacXa.push(huyen.wards[k]);
            }
          }
        }

        // sắp xếp tên xã
        tatCaCacXa.sort(function (a, b) {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });

        // nạp danh sách xã vào ô
        for (var m = 0; m < tatCaCacXa.length; m++) {
          var xa = tatCaCacXa[m];
          var tuyChon = document.createElement("option");
          tuyChon.value = xa.name;
          tuyChon.textContent = xa.name;
          oChonXa.appendChild(tuyChon);
        }
        oChonXa.disabled = false;
      }
    });
  }

  if (bieuMauCuTru) {
    bieuMauCuTru.addEventListener("submit", function (suKien) {
      suKien.preventDefault();

      var oChonTinhHienTai = document.getElementById("province");
      var oChonXaHienTai = document.getElementById("ward");

      // thu thập dữ liệu
      var duLieuDangKy = {
        hoTen: document.getElementById("fullName").value,
        cccd: document.getElementById("idCard").value,
        ngaySinh: document.getElementById("dob").value,
        dienThoai: document.getElementById("phone").value,
        tinh: oChonTinhHienTai.options[oChonTinhHienTai.selectedIndex].text,
        xa: oChonXaHienTai.value,
        duong: document.getElementById("street").value,
      };

      // hiển thị thông tin lên bảng kết quả
      document.getElementById("resFullName").innerText = duLieuDangKy.hoTen;
      document.getElementById("resIdCard").innerText = duLieuDangKy.cccd;
      document.getElementById("resDob").innerText = duLieuDangKy.ngaySinh;
      document.getElementById("resPhone").innerText = duLieuDangKy.dienThoai;
      document.getElementById("resProvince").innerText = duLieuDangKy.tinh;
      document.getElementById("resWard").innerText = duLieuDangKy.xa;
      document.getElementById("resStreet").innerText =
        duLieuDangKy.duong || "---";

      var thoiGianHienTai = new Date();
      document.getElementById("resTime").innerText =
        thoiGianHienTai.toLocaleTimeString("vi-VN") +
        " - " +
        thoiGianHienTai.toLocaleDateString("vi-VN");

      // hiển thị phần kết quả
      var hopKetQua = document.getElementById("registrationResult");
      hopKetQua.style.display = "block";
    });
  }
});

// BÀI 4: MINI WEATHER APP

var API_KEY_THOI_TIET = "1a18614b88f024ca7a9b6f47c498cd25";

async function timKiemThoiTiet() {
  var thanhPho = document.getElementById("cityInput").value.trim();
  var ketQua = document.getElementById("weatherResult");

  if (thanhPho === "") {
    ketQua.innerHTML =
      '<div class="error-result">Vui lòng nhập tên thành phố.</div>';
    return;
  }

  if (
    API_KEY_THOI_TIET === "NHAP_API_KEY_CUA_BAN" ||
    API_KEY_THOI_TIET === ""
  ) {
    ketQua.innerHTML =
      '<div class="error-result">Vui lòng cấu hình API Key OpenWeatherMap trong file script.js.</div>';
    return;
  }

  ketQua.innerHTML =
    '<div style="text-align: center; color: #64748b; font-weight: 500;"><p>Đang lấy dữ liệu thời tiết...</p></div>';

  try {
    var duongDan =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      thanhPho +
      "&appid=" +
      API_KEY_THOI_TIET +
      "&units=metric&lang=vi";
    var phanHoi = await fetch(duongDan);
    if (!phanHoi.ok) {
      throw new Error("Sai tên thành phố.");
    }
    var duLieu = await phanHoi.json();

    var chuoiHtml = '<div class="weather-result-box">';
    chuoiHtml +=
      '  <img class="weather-img" src="https://openweathermap.org/img/wn/' +
      duLieu.weather[0].icon +
      '@2x.png" alt="Weather icon">';
    chuoiHtml +=
      '  <div class="weather-temp">' +
      Math.round(duLieu.main.temp) +
      "°C</div>";
    chuoiHtml += '  <div class="info-list">';
    chuoiHtml +=
      '    <div class="info-item"><b>Thành phố:</b> <span>' +
      duLieu.name +
      "</span></div>";
    chuoiHtml +=
      '    <div class="info-item"><b>Cảm giác như:</b> <span>' +
      Math.round(duLieu.main.feels_like) +
      "°C</span></div>";
    chuoiHtml +=
      '    <div class="info-item"><b>Độ ẩm:</b> <span>' +
      duLieu.main.humidity +
      "%</span></div>";
    chuoiHtml +=
      '    <div class="info-item"><b>Sức gió:</b> <span>' +
      duLieu.wind.speed +
      " m/s</span></div>";
    chuoiHtml +=
      '    <div class="info-item"><b>Thời tiết:</b> <span style="text-transform: capitalize;">' +
      duLieu.weather[0].description +
      "</span></div>";
    chuoiHtml += "  </div>";
    chuoiHtml += "</div>";

    ketQua.innerHTML = chuoiHtml;
  } catch (loi) {
    ketQua.innerHTML =
      '<div class="error-result">Không tìm thấy thành phố hoặc lỗi kết nối.</div>';
  }
}

// nút cuộn
document.addEventListener("DOMContentLoaded", function () {
  var nutCuonLenDau = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      nutCuonLenDau.style.display = "flex";
    } else {
      nutCuonLenDau.style.display = "none";
    }
  });
  var cacLienKetMenu = document.querySelectorAll(".header .menu a");
  for (var i = 0; i < cacLienKetMenu.length; i++) {
    (function (viTri) {
      cacLienKetMenu[viTri].addEventListener("click", function () {
        for (var j = 0; j < cacLienKetMenu.length; j++) {
          cacLienKetMenu[j].classList.remove("active");
        }
        cacLienKetMenu[viTri].classList.add("active");
      });
    })(i);
  }
});
function cuonLenDauTrang() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
