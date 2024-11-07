import { gql, request, GraphQLClient } from 'graphql-request'

const API_URL = process.env.API_GRAPHQL || "https://us-west-2.cdn.hygraph.com/content/cm2qotevg02cr07wdd6kdqpsg/master"
const AUTH_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzA5NDAyOTUsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY20ycW90ZXZnMDJjcjA3d2RkNmtkcXBzZy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC11cy13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNGQ4NDM3YmQtZmE5Yy00MDQyLWIzOGYtOTE0MThkNjY3ZDk0IiwianRpIjoiY20zNmw1cnFvMGF0ODA3bHI5a3N3YmdrNCJ9.4qz0fL_iXgjOJHxhVQqXNmu0vkys0NL62qHgNiqNW4Vw2azyx53XB-hO_9wcqku54CbUQ3unJmc6qzBWys1IuvI4mPwlysv3IsI8YE0D3UUde8IABjoaDsX4sXknb0wBYYpf9Dq5cJipdTyXcuhLKPaRFK9xp8ugVeEFf2p2ORfjlv_GoqouYtHfcAKOjpry3IFlwhebunBgstgc__-fKn1L6w9QbTPZChwWlEqAzuqDvPnvjoFpo4ZrCMWjJjk-iLBo0O3xnBbrSbzulNTXsy_iKj28NHQTGdnsYtqYXHFdZNczv6d8FD2L9tw2OesUvj1Vn2qoiI3jvmxIcoCMAGr50RFM2IOTkB8alQTfn_i7psqPq0tGtlDYwVFA9jTm6DtyxAPFzJUEi_8OUYg2pC_sSqzvbtggPKCgQhH2MV2wQZGYG_saWG1Qx3xv1Xbz6xyBrkC4BMQ0z4KQwYeyE4KOrmiiiAfGfu_eYf1Ps8f67rqOcqnZP5qv4vz0C8da8QCjFVRlPtCZQ_UB90poIJRDVcf0pf9ZfSpEyT01Y5t9Tx0FLsFPdiy96qJFdF7jjY1PVbLRmS3PdZ9ltkvnyzRYt8E1GkmvajG00r25hbrHIkzGybP7yXC2aVtnw-fyElESky41cQcom2CzoyT5CHOdmNiT4iwmNdX1ilWtXks"

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