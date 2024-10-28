import React, { useEffect, useState } from 'react'

function CarsFiltersOption({carsList, setBrand, orderCarList}:any) {

  const [ brandList, setBrandList ] = useState<any[]>([])

    useEffect(() => {
        if(carsList){
            filterCarList()
        }
    }, [carsList])

  const filterCarList = () => {
    const BrandSet = new Set()    
    carsList.forEach((element:any) => {

        BrandSet.add(element.carBrand)
    })

    setBrandList(Array.from(BrandSet))

}

  return (
    <div className='mt-10 flex items-center justify-between'>
        <div>
            <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
            <h2>Explore our cars you might likes</h2>
        </div>
        <div className='flex gap-5'>
            <select defaultValue={'DEFAULT'} onChange={(e) => orderCarList(e.target.value)} className="select select-bordered w-full md:block max-w-xs hidden">
                <option value="DEFAULT" disabled>Price</option>
                <option value={-1}>Min to Max</option>
                <option value={1}>Max to Min</option>
            </select>
            <select defaultValue={'DEFAULT'} onChange={(e) => {setBrand(e.target.value)}} className="select select-bordered w-full md:block max-w-xs hidden">
                <option value="DEFAULT" disabled>Brand</option>
                {brandList&&brandList.map((brand: string, index: number) => (
                    <option key={index} value={brand}>{brand}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default CarsFiltersOption