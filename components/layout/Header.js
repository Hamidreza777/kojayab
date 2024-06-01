import { BiSupport } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { useRouter } from "next/router";


function Header() {

  const router=useRouter();

  const signupHandler=()=>{

    router.push("/signup")
  }


  return (


    <header className="sticky top-0">
      <div className="navbar">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            <img  src="logo.png" alt="" width="50px" />
          </a>
        </div>
        <div className="navbar-center">


          
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
          <button onClick={signupHandler}  class="btn btn-outline-secondary text-firstColor hover:bg-firstColor border-firstColor">
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
