const Contact = () => {
  return (
    <div className="bg-slate-900 flex flex-col justify-between" id="contact">
      <div className="mt-4">
        <h1 className="text-gray-50 text-3xl text-center">CONTACT US</h1>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 ">

        {/* address */}
          <div className="border border-gray-500 m-3 p-4 w-72 h-40">
            <div className="flex justify-center text-gray-100 text-xl items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="ml-2 my-4">Address</span>
            </div>
            <p className="text-gray-200 text-center">Some Address, <span className="block">Los Angelos 12</span></p>
          </div>

          {/* email */}
          <div className="border border-gray-500 m-3 p-4 w-72 h-40">
            <div className="flex justify-center text-gray-100 text-xl items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-2 my-4">Email</span>
            </div>
            <p className="text-gray-200 text-center">example@gmail.com</p>
          </div>

          {/* phone */}
          <div className="border border-gray-500 m-3 p-4 w-72 h-40">
            <div className="flex justify-center text-gray-100 text-xl items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="ml-2 my-4">Phone</span>
            </div>
            <p className="text-gray-200 text-center">(111) 222-4444</p>
          </div>
        </div>
      </div>
      <footer className="mt-12 mb-4 text-center text-lg  text-gray-100">© 2022 Ans</footer>
    </div>
  );
};

export default Contact;
