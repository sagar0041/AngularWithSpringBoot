export class RoomBookingDetails {

    constructor(
        public bookingId: number,
        public id: number,
        public name: string,
        public userMail:string,
        public status:string,
    ) { }
}