import { db } from "./firebase";
import { printReservation } from "./util";

const reservationsRef = db.collection("reservations");

const getReservation = async (startDate: Date, endDate: Date) => {
  // Query where 'start' is between 'startDate' and 'endDate'
  const query1 = reservationsRef
    .where("start", ">=", startDate)
    .where("start", "<=", endDate)
    .orderBy("start", "desc");

  // Query where 'end' is between 'startDate' and 'endDate'
  const query2 = reservationsRef
    .where("end", ">=", startDate)
    .where("end", "<=", endDate)
    .orderBy("start", "desc");

  const [startSnapshot, endSnapshot] = await Promise.all([
    query1.get(),
    query2.get(),
  ]);

  const results = new Map();

  startSnapshot.forEach((doc) => {
    results.set(doc.id, doc);
  });

  endSnapshot.forEach((doc) => {
    // handle duplicates
    if (!results.has(doc.id)) {
      results.set(doc.id, doc);
    }
  });

  return Array.from(results.values());
};

(async () => {
  try {
    const docs = await getReservation(
      new Date("2024-12-01"),
      new Date("2024-12-31")
    );
    docs.forEach((doc) => printReservation(doc));
    process.exit(0);
  } catch (error) {
    console.error(`Error encountered`, error);
    process.exit(-1);
  }
})();
