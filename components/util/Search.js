import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
function Search() {
  return (
    <>
      {" "}
      <div className="w-[80%] flex justify-center">
        <input
          className="border-firstColor input rtl:m1-0 w-[270px] h-[50px] ml-[5px]"
          placeholder="جستجوی شهر، استان یا اقامتگاه"
        />

        <DatePicker
          style={{
            width: "100px",
            height: "50px",
            borderRadius: "12px",
            marginLeft: "5px",
          }}
          plugins={[weekends([5, 6])]}
          calendar={persian}
          locale={persian_fa}
          placeholder="تاریخ رفت"
        />

        <DatePicker
          style={{
            width: "100px",
            height: "50px",
            borderRadius: "12px",
            marginLeft: "5px",
          }}
          plugins={[weekends([5, 6])]}
          calendar={persian}
          locale={persian_fa}
          placeholder="تاریخ برگشت"
        />

        <button className="bg-slate-200 h-[50px] w-[50px] flex items-center text-[25px] justify-center rounded-[12px]">
          <FaMagnifyingGlassLocation className="text-firstColor" />
        </button>
      </div>
    </>
  );
}

export default Search;
