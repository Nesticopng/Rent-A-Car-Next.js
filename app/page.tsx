"use client"
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {

  const [carsList, setCarsList] = useState<any>([])
  const [carsOrgList, setCarsOrgList] = useState<any>([])

  useEffect(()=> {
    getCarList_()
  }, [])

  const getCarList_ = async() => {
    const result:any = await getCarList()

    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists)
  }
  
  const filterCarList = (brand:string) => {
    const filterList = carsOrgList.filter((item:any) => 
      item.carBrand==brand
    )

    setCarsList(filterList)
  }

  const orderCarList = (order:any) => {
    const sortedData = [...carsOrgList].sort((a, b) => 
    order==-1? a.price - b.price:b.price - a.price
    )

    setCarsList(sortedData)
  }

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFiltersOption setBrand={(value:string)=> filterCarList(value)} carsList={carsOrgList} orderCarList={(value:string) => orderCarList(value)}/>
      <CarsList carsList={carsList} />
    </div>
  );
}
