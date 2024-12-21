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
    <div className="relative w-full h-screen items-center justify-center overflow-hidden">
      <div className="flex w-full mb-8 items-center justify-center">
        <h1 className="text-7xl font-bold">Best Models</h1>
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
            className={`w-[450px] h-[535px] mx-6 justify-center rounded-xl border-4 grid content-between border-gray-500`}
          >
            <div className="flex w-full justify-center mt-6">
              <h1 className="text-3xl font-bold">{car.model}</h1>
            </div>
            <div className="flex w-full justify-center">
              <Image src={car.img} alt={car.model} width={400} height={0} draggable={false} />
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