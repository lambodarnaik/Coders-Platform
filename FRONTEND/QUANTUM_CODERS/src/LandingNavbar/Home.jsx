import react from "react";

const Home = () => {
  return (
    <>
      <div className="relative text-slide-up top-40 left-[35%] h-screen">
        {/* <img src="/images/logo.png" alt="" /> */}
        <div>
          <h1 className="font-semibold text-5xl">QUANTUM CODE</h1>
          <p className="text-xl">Learn. Evolve. Code</p>
        </div>
        <p className="relative mt-10 text-2xl font mb-2 text-wrap w-[60%]">A learning and Coding Platform - Code in Quantum Speed</p>
        <div className="flex mt-10 items-center justify-center w-[30%]">
        <p className="flex w-[200px] h-10 bg-blue-800 rounded-xl items-center justify-center">Enter the quantum field</p>

        </div>
      </div>
    </>
  );
};

export default Home;
