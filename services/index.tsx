import { gql, request } from 'graphql-request'

const API_URL = "https://us-west-2.cdn.hygraph.com/content/cm2qotevg02cr07wdd6kdqpsg/master"

export const getCarList = async()=>{
    const query = gql`
        query CarList {
            carLists {
                carAvg
                carBrand
                createdAt
                carType
                id
                image(where: {}) {
                url
                }
                name
                price
                publishedAt
                seat
                updatedAt 
            }
        }
    `

    const result = await request(API_URL, query)
    return result
}

export const getLocationList = async()=>{
    const query = gql`
        query StoreLocation {
            storeLocations {
                addresse
            }
        }
    `

    const result = await request(API_URL, query)
    return result
}