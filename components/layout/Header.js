const firstColor = "#00737e";
function Header() {
  return (
    <header>
      <div className="navbar">
        <div className="navbar-start">
          <a className="navbar-item">
            <img src="logo.png" alt="" width="50px" />
          </a>
        </div>
        <div className="navbar-center">
          <input
            className="border-firstColor input input-secondary rtl:m1-0"
            placeholder="جستجو در شهر"
          />
        </div>
        <div className="navbar-end">
          <button class="btn btn-outline-secondary text-firstColor hover:bg-firstColor border-firstColor">
            ثبت نام
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
