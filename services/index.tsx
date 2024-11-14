import { gql, request } from 'graphql-request'

const API_URL = `https://us-west-2.cdn.hygraph.com/content/cm2qotevg02cr07wdd6kdqpsg/master`

export const getCarList = async () => {
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

    const res = await request(API_URL, query)
    return res
}

export const getLocationList = async () => {
    const query = gql`
        query StoreLocation {
            storeLocations {
                addresse
            }
        }
    `

    const res = await request(API_URL, query)
    return res
}

export const createBooking = async (formValue: any) => {

    const mutationQuery = gql` 
        mutation MyMutation {
            createBooking(
                data: {	
                    userName: "${formValue.userName}",
                    pickUpDate: "${formValue.pickUpDate}",
                    pickUpTime: "${formValue.pickUpTime}", 
                    dropOffDate: "${formValue.dropOffDate}", 
                    dropOffTime: "${formValue.dropOffTime}", 
                    contactNumber: "${formValue.contactNumber}", 
                    carId: { connect: { id: "${formValue.carId.connect.id}" } }
                }
            ) {
            id
            }
        }
    `

    const req = await request(API_URL, mutationQuery)
    return req
}
