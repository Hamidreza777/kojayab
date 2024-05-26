import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";

import Style from "./Search.module.css";
function Search() {
  return (
    <>
      <div className="  w-[90%] flex flex-col  justify-center items-center  sm:flex-row">
        <input
          className="border-firstColor input rtl:m1-0 w-[270px] h-[50px] ml-[5px]  "
          placeholder="جستجوی شهر، استان یا اقامتگاه"
        />

        <DatePicker
          inputClass={Style.inp}
          style={{
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
          inputClass={Style.inp}
          style={{
            height: "50px",
            borderRadius: "12px",
            marginLeft: "5px",
          }}
          plugins={[weekends([5, 6])]}
          calendar={persian}
          locale={persian_fa}
          placeholder="تاریخ برگشت"
        />

        <button className={`bg-firstColor text-slate-200 hover:bg-slate-200 hover:text-firstColor h-[50px] w-[50px] flex items-center text-[25px] justify-center rounded-[12px] ${Style.inp} `}>
          <FaMagnifyingGlassLocation className="" />
        </button>
      </div>
    </>
  );
}

export default Search;
