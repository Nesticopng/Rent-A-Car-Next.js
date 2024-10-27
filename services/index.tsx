import { gql, request } from 'graphql-request'

export const getCarList = async()=>{
    const query = gql`
        query CarList {
            carLists {
                carAvg
                carBrand
                createdAt
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

    const result = await request('https://us-west-2.cdn.hygraph.com/content/cm2qotevg02cr07wdd6kdqpsg/master', query)
    return result
} 