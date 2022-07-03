import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.jpg";
import trainer3 from "../assets/trainer3.jpg";

const Trainers = () => {
  return (
    <div className="bg-gray-900 p-4" id="trainers">
      <div className="flex flex-col">
        <h1 className="text-center uppercase text-3xl text-gray-50 mb-2">Our Trainers</h1>

        {/* trainers */}
        <div className="flex justify-evenly flex-wrap">

          <div className="trainer-card mt-4 mb-2 mx-3">
            <img src={trainer1} className="w-72 sm:w-80 h-80 object-cover"></img>
            <div className="bg-gray-100 w-72 sm:w-80">
              <h1 className="text-center text-lg text-slate-900">Cara Anderson</h1>
              <h3 className="text-center text-slate-800">Yoga Instructor</h3>
            </div>
          </div>

          <div className="trainer-card mt-4 mb-2 mx-3">
            <img src={trainer2} className="w-72 sm:w-80 h-80 object-cover"></img>
            <div className="bg-gray-100 w-72 sm:w-80">
              <h1 className="text-center text-lg  text-slate-900">Andrei T</h1>
              <h3 className="text-center text-slate-800">Cardiac Expert</h3>
            </div>
          </div>

          <div className="trainer-card mt-4 mb-2 mx-3">
            <img src={trainer3} className="w-72 sm:w-80 h-80 object-cover"></img>
            <div className="bg-gray-100 w-72 sm:w-80">
              <h1 className="text-center text-lg  text-slate-900">Emily Silone</h1>
              <h3 className="text-center text-slate-800">Massage Therapist</h3>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Trainers;
