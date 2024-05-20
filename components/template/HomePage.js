import styles from "./HomePage.module.css";
import DatePicker from "react-multi-date-picker";
import { useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";

function HomePage() {
  return (
    <>
      <div className={styles.banner}>
        <div>
          <input
            className="border-firstColor input rtl:m1-0 w-[270px] h-[50px]"
            placeholder="جستجوی شهر، استان یا اقامتگاه"
          />

          <DatePicker
            style={{
              width: "100px",
              height: "50px",
              borderRadius:"12px"
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
              borderRadius:"12px"
            }}
            plugins={[weekends([5, 6])]}
            calendar={persian}
            locale={persian_fa}
            placeholder="تاریخ برگشت"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
