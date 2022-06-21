const Pricing = () => {
  return (
    <div className="bg-slate-900">
      <h1 className="text-center text-3xl px-4 uppercase text-gray-50">
        Pricing
      </h1>
      <div className="flex flex-wrap justify-center">
        {/* className ="flex flex-col items-center lg:flex-row lg:justify-evenly" */}
        <div className="bg-slate-800 w-72 h-96 m-4 px-4 flex flex-col justify-center">
          <h1 className="text-center text-gray-100 text-2xl font-bold mb-4 uppercase">
            Starter
          </h1>
          <h1 className="text-6xl text-gray-100 mb-6 font-bold text-center">
            $18 <span className="text-sm">/mo</span>
          </h1>
          <div className="h-36">
            <ul className="mb-6 text-lg text-gray-100">
              <li>
                <svg
                  className="h-6 w-6 inline mr-2 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Basic Training Program
              </li>
              <li>
                <svg
                  className="h-6 w-6 inline mr-2 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Open Gym
              </li>
            </ul>
          </div>
          <button className="bg-purple-600 text-xl py-2 text-gray-100 my-2">
            JOIN NOW
          </button>
        </div>
        <div className="bg-slate-800 w-72 h-96 m-4 px-4 flex flex-col justify-center">
          <h1 className="text-center text-gray-100 text-2xl font-bold mb-4 uppercase">
            Standard
          </h1>
          <h1 className="text-6xl text-gray-100 mb-6 font-bold text-center">
            $33 <span className="text-sm">/mo</span>
          </h1>
          <div className="h-36">
            <ul className="mb-6 text-lg text-gray-100">
              <li>
                <svg
                  className="h-6 w-6 inline mr-2 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Basic Training Program
              </li>
              <li>
                <svg
                  className="h-6 w-6 inline mr-2 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Open Gym
              </li>
              <li>
                <svg
                  className="h-6 w-6 inline mr-2 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Yoga Program
              </li>
            </ul>
          </div>
          <button className="bg-purple-600 text-xl py-2 uppercase text-gray-100 my-2">
            JOIN NOW
          </button>
        </div>
        <div className="bg-slate-800 w-72 h-96 m-4 px-4 flex flex-col justify-center">
          <h1 className="text-center text-gray-100 text-2xl font-bold mb-4 uppercase">
            Professional
          </h1>
          <h1 className="text-6xl text-gray-100 mb-6 font-bold text-center">
            $48 <span className="text-sm">/mo</span>
          </h1>
          <div className="h-36">
            <ul className="mb-6 text-lg text-gray-100">
              <li>
                <svg
                  className="h-6 w-6 inline mr-2 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Basic Training Program
              </li>
              <li>
                <svg
                  className="h-6 w-6 inline mr-2 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Open Gym
              </li>
              <li>
                <svg
                  className="h-6 w-6 inline mr-2 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Yoga Program
              </li>
              <li>
                <svg
                  className="h-6 w-6 inline mr-2 text-green-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Personal Trainer
              </li>
            </ul>
          </div>
          <button className="bg-purple-600 text-xl py-2 uppercase text-gray-100 my-2">
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
