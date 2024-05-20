import { BiSupport } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";

function Header() {
  return (
    <header className="sticky top-0">
      <div className="navbar">
        <div className="navbar-start">
          <a className="navbar-item">
            <img src="logo.png" alt="" width="50px" />
          </a>
        </div>
        <div className="navbar-center">
          {/* <input
            className="border-firstColor input rtl:m1-0"
            placeholder="جستجو در شهر"
          /> */}

          
        </div>
        <div className="navbar-end">

          {/* پشتیبانی */}
          <div className="flex ml-[15px] items-center hover:text-firstColor" >
          <BiSupport />
          <a href="tel:09220136476" className="mr-[5px]">پشتیبانی</a>
          </div>

         {/* مورد علاقه */}
          <div className="flex justify-center items-center ml-[15px] hover:text-firstColor">
            <CiHeart/>
            <a href="">موردعلاقه</a>
          </div>


          {/* ورود و ثبت نام */}
          <button class="btn btn-outline-secondary text-firstColor hover:bg-firstColor border-firstColor">
            ثبت&zwnj;نام
          </button>
          <a className="hover:text-firstColor text-firstColor navbar-item">
            ورود{" "}
          </a>

          
        </div>
      </div>
    </header>
  );
}

export default Header;
