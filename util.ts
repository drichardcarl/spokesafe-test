import { DocumentData, Timestamp } from "firebase/firestore";

export type Reservation = {
  start: Timestamp;
  end?: Timestamp;
};

export const printReservation = (reservation: DocumentData) => {
  const { start, end } = reservation.data() as Reservation;
  console.log({ start: start.toDate(), end: end?.toDate() });
};
