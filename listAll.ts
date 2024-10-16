import { db } from "./firebase";
import { printReservation } from "./util";

(async () => {
  try {
    const reservationsRef = db.collection("reservations");
    const reservations = await reservationsRef.orderBy("start", "desc").get();
    reservations.forEach((reservation) => printReservation(reservation));
    process.exit(0);
  } catch (error) {
    console.error(`Failed to list all reservations`, error);
    process.exit(-1);
  }
})();
