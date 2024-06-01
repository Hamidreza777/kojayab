import { useState } from "react";

function PhoneForm() {
  const [send, setSend] = useState("");
  const [digit, setDigit] = useState("hidden");

  const sendHandler = () => {
    if (send.length > 11 || send.length < 11) {
      alert("شماره تلفن اشتباه است");
    } else {
      setDigit("flex");
    }
  };




  return (
    <>
      <div class="w-screen h-[70vh] flex items-center justify-center [direction:ltr]">
        <form class="max-w-xs mx-auto ">
          <div class="relative">
            <span class="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
              <svg
                class="w-4 h-4 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
            </span>
            <input
              maxlength="11"
              value={send}
              onChange={(e) => setSend(e.target.value)}
              inputmode="numeric"
              type="text"
              id="floating-phone-number"
              class="block py-2.5 ps-6 pe-0 w-[230px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder=" "
            />
            <label
              for="floating-phone-number"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              09xxxxxxxxx{" "}
            </label>
          </div>

          <div class={`${digit} flex space-x-3 mt-[15px]`} data-hs-pin-input="">
            <input
              type="text"
              class="block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="⚬"
              data-hs-pin-input-item=""
            />
            <input
              type="text"
              class="block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="⚬"
              data-hs-pin-input-item=""
            />
            <input
              type="text"
              class="block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="⚬"
              data-hs-pin-input-item=""
            />
            <input
              type="text"
              class="block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="⚬"
              data-hs-pin-input-item=""
            />
            <input
              type="text"
              class="block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none "
              placeholder="⚬"
              data-hs-pin-input-item=""
            />
          </div>

          <button
            onClick={sendHandler}
            type="submit"
            class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-[30px]"
          >
            ارسال کد
          </button>
        </form>
      </div>
    </>
  );
}

export default PhoneForm;
