import { useState, useEffect,useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

function PhoneForm() {
  const [send, setSend] = useState("");
  const [digit, setDigit] = useState("hidden");
  const [accept, setAccept] = useState("ارسال کد");
  const [tooltip, setTooltip] = useState("hidden");
  const [cdown, setCdown] = useState(5);
  const [isCounting, setIsCounting] = useState(false);
  const [timer, setTimer] = useState("hidden");
  const [recode, setRecode] = useState("hidden");

  const inputsRef = useRef([]);



  useEffect(() => {
    let timer;
    if (isCounting) {
      timer = setInterval(() => {
        setCdown((prevCdown) => {
          if (prevCdown <= 1) {
            clearInterval(timer);
            setIsCounting(false);
            setTimer("hidden");
            setRecode("flex");
            return 59;
          }
          return prevCdown - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isCounting]);








  useEffect(() => {

    inputsRef.current.forEach((input, index) => {

      input.addEventListener('input', () => {

        if (input.value.length === input.maxLength) {

          if (index < inputsRef.current.length - 1) {

            inputsRef.current[index + 1].focus();

          }

        }

      });

    });

  }, []);







  const sendHandler = (event) => {
    event.preventDefault();


    const char1 = send.charAt(0);
    const char2 = send.charAt(1);

    const sum = char1 + char2;

    if (sum != "09") {
      toast.error("شماره باید با 09  شروع شود");


      return;
    }

    if (send.length !== 11) {
      toast.error("شماره تلفن اشتباه است");

    } else {
      setDigit("flex");
      setAccept("تایید");
      setTooltip("flex");
      setTimer("flex");

      setIsCounting(true);
    }
  };

  return (
    <>
      <div className="w-screen h-[70vh] flex flex-col items-center justify-center [direction:ltr]">
        <div
          dir="rtl"
          className={`${tooltip} w-[250px] alert alert-info mb-[20px]`}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 34C22.9 34 22 33.1 22 32V24C22 22.9 22.9 22 24 22C25.1 22 26 22.9 26 24V32C26 33.1 25.1 34 24 34ZM26 18H22V14H26V18Z"
              fill="#0085FF"
            />
          </svg>
          <div className="flex flex-col">
            <span className="text-content2">{`پیامک حاوی کد تایید به شماره ${send} ارسال شد. لطفا کد تایید ارسال شده را وارد نمایید:`}</span>
          </div>
        </div>

        <form className="max-w-xs mx-auto">
          <div className="relative">
            <span className="absolute start-0 bottom-3 text-gray-500 dark:text-gray-400">
              <svg
                className="w-4 h-4 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
            </span>

            <input
              maxLength="11"
              value={send}
              onChange={(e) => setSend(e.target.value)}
              inputMode="numeric"
              type="text"
              id="floating-phone-number"
              className="block py-2.5 ps-6 pe-0 w-[243px] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              pattern="[0-9]{11}"
              placeholder=" "
            />

            <label
              htmlFor="floating-phone-number"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              09xxxxxxxxx
            </label>
          </div>

          <div className={`${digit} flex space-x-3 mt-[15px]`} data-hs-pin-input="">
          {[...Array(5)].map((_, i) => (
            <input
              key={i}
              type="text"
              className="block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="⚬"
              data-hs-pin-input-item=""
              ref={el => inputsRef.current[i] = el}
              maxLength="1"
            />
          ))}
        </div>

          {/* Countdown */}
          <div className="w-full flex justify-end">
            <p className={`${timer} `}>{`00:${
              cdown < 10 ? "0" : ""
            }${cdown}`}</p>
            <button
              onClick={() => setIsCounting(true)}
              className={`${recode} text-white w-[130px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-[30px]`}
            >
              ارسال مجدد کد
            </button>
            <Toaster/>
          </div>

          <button
            onClick={sendHandler}
            type="submit"
            className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-[30px]"
          >
            {accept}
          </button>
        </form>
      </div>
    </>
  );
}

export default PhoneForm;
