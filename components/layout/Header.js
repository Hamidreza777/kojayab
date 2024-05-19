
function Header() {
    
  return (
    <header>
      <div className="navbar">
        <div className="navbar-start">
          
          <a className="navbar-item"></a>
          <img src="logo.png" alt="" width="50px"/>

        </div>
        <div className="navbar-center">
        <input className="input input-secondary rtl:m1-0" placeholder="جستجو در شهر" />

        </div>
        <div className="navbar-end">
        <button class=" btn btn-outline-secondary">ثبت نام</button>
          <a className="navbar-item">ورود </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
