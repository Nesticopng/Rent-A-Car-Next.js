"use client";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Image from "next/image";

function CarrouselSection() {
  const cars = [
    { model: "Toyota Corolla", img: "/CarrouselCars/Toyota_Corolla.webp" },
    { model: "BMW M5", img: "/CarrouselCars/BMW_M5.webp" },
    { model: "Mazda CX-90", img: "/CarrouselCars/Mazda_CX-90.webp" },
    { model: "Toyota 4Runner", img: "/CarrouselCars/Toyota-4runner.webp" },
    { model: "Jeep Grand Cherokee", img: "/CarrouselCars/jeep-grand_cherokee.webp" },
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
            className={`w-[450px] h-[535px] mx-6 flex justify-center rounded-xl border-4 border-gray-500`}
          >
            <h1 className="text-3xl font-bold mt-8">{car.model}</h1>
            <Image src={car.img} alt='Hero BMW M5' width={1500} height={1500}/>
          </div>
        ))}
      </Flicking>
    </div>
  );
}

export default CarrouselSection;