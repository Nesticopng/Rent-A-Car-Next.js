"use client";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function CarrouselSection() {
  const cars = [
    { model: "Toyota Corolla", img: "/CarrouselCars/Toyota_Corolla.webp" },
    { model: "BMW M5", img: "/CarrouselCars/BMW_M5.webp" },
    { model: "Mazda CX-90", img: "/CarrouselCars/Mazda_CX-90.webp" },
    { model: "Toyota 4Runner", img: "/CarrouselCars/Toyota_4runner.webp" },
    { model: "Jeep Grand Cherokee", img: "/CarrouselCars/jeep_grand_cherokee.webp" },
  ];

  return (
    <div className="relative w-full sm:h-[60vh] md:h-screen 2xl:h-[70vh] items-center justify-center overflow-hidden">
      <div className="flex w-full mb-16 md:mb-8 items-center justify-center">
        <h1 className="text-4xl md:text-7xl font-bold">Best Models</h1>
      </div>
      <Flicking
        align="center"
        circular={true}
        autoResize={true}
        interruptable={true}
      >
        {cars.map((car, index) => (
          <div
            key={index}
            className={`w-[250px] h-[370px] md:w-[450px] md:h-[535px] mx-6 justify-center rounded-xl border-4 grid content-between border-gray-500`}
          >
            <div className="flex w-full justify-center mt-6">
              <h1 className="text-xl md:text-3xl font-bold">{car.model}</h1>
            </div>
            <div className="hidden md:flex w-full justify-center">
              <Image src={car.img} alt={car.model} width={400} height={0} draggable={false} />
            </div>
            <div className="flex md:hidden w-full justify-center">
              <Image src={car.img} alt={car.model} width={220} height={0} draggable={false} />
            </div>
            <button className="flex ease-in-out transition-all duration-300 hover:transition-all h-14 p-2 mb-6 w-full space-x-2 items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 hover:from-indigo-700 hover:to-indigo-900 rounded-3xl text-white text-xl">
              <span className='items-center justify-center'>Rent Now!</span>
              <FaArrowRight className='text-white'/>
            </button>
            </div>
          ))}
      </Flicking>
    </div>
  );
}

export default CarrouselSection;