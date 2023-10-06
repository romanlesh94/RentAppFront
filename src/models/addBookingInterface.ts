export default interface IAddBooking {
    id: number,
    houseId: number,
    guestId: number,
    price: number,
    checkInDate: string | null,
    checkOutDate: string | null,
}