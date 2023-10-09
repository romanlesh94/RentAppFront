export default interface IHouseProperties {
    id: number,
    name: string,
    description: string,
    rules: string,
    address: string,
    price: number,
    properties: Array<number>,
    ownerId: number
}