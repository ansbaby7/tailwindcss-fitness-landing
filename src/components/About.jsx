import forAbout from "../assets/forAbout.jpg";

const About = () => {
  return (
    <div className="bg-gray-900 p-4">
      <div className="m-4 flex flex-col items-center lg:items-start lg:flex-row lg:justify-evenly">
        <img src={forAbout} className="w-[490px] h-[440px] object-cover"></img>
        <div className=" flex flex-col items-center py-4">
          <h2 className="text-gray-100 text-2xl uppercase my-2">
            Why choose us?
          </h2>
          <p className="text-gray-300 text-center text-xl mx-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            asperiores odit, nihil iste aperiam corporis reiciendis totam aut
            eaque, vel voluptate ad nulla fuga esse molestias pariatur deleniti
            perferendis animi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Id explicabo expedita ullam alias consequuntur
            dolor iste atque voluptatem et in quae quaerat, minus rem rerum
            nostrum doloremque similique dignissimos quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
