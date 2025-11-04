import React, { useState } from "react";
import food from "./../assets/food.png";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Home() {
  const navigate = useNavigate();
  const [secureCode, setSecureCode] = useState("");

  // ฟังก์ชันสำหรับจัดการเมื่อคลิกปุ่ม
  const handleAccessAppClick = () => {
    // Validate
    if (secureCode === "") {
      // alert("กรุณากรอกรหัสเข้าใช้งาน");
      Swal.fire({
        icon: 'warning',
        iconColor: '#537fe7',
        title: 'กรุณากรอกรหัสเข้าใช้งาน',
        showConfirmButton: true,
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#537fe7',
      });
      return;
    }
    // check code
    if (secureCode.toUpperCase() === "SAU") {
      navigate("/showallkinkun");
    } else {
      // alert("รหัสเข้าใช้งานไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
      Swal.fire({
        icon: 'warning',
        iconColor: '#ff0000',
        title: 'รหัสเข้าใช้งานไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
        showConfirmButton: true,
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#ff0000',
      });
    }
  };

  return (
    <div>
      {/* กล่อง */}
      <div className="w-10/12 mx-auto border-gray-300 p-6 shadow-md mt-20 rounded-lg">
        {/* text */}
        <h1 className="text-2xl font-bold text-center text-blue-700">
          Kinkun App (Supabase)
        </h1>
        <h1 className="text-2xl font-bold text-center text-blue-700">
          บันทึกการกิน
        </h1>

        {/* img */}
        <img src={food} alt="กินกัน" className="block mx-auto w-30 mt-5" />

        {/* ปุ่ม */}
        <input
          type="text"
          placeholder="Enter secure code"
          value={secureCode}
          onChange={(e) => setSecureCode(e.target.value)}
          className="border border-gray-400 rounded-md p-3 w-full mt-5"
        />

        <button
          onClick={handleAccessAppClick}
          className="bg-blue-700 text-white rounded-md p-3 w-full mt-5 hover:bg-blue-800 cursor-pointer"
        >
          เข้าใช้งาน
        </button>

        {/* กล่องเล็ก icon */}
        <div className="mt-5 flex justify-center gap-5">
          <a href="#">
            <FaFacebook className="text-2xl text-gray-500 hover:text-red-700" />
          </a>
          <a href="#">
            <FaLine className="text-2xl text-gray-500 hover:text-red-700" />
          </a>
          <a href="#">
            <FaGithub className="text-2xl text-gray-500 hover:text-red-700" />
          </a>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
