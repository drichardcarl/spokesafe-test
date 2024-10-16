import { faker } from "@faker-js/faker";
import { addMonths } from "date-fns";
import { db } from "./firebase";

const generateRandomReservation = () => {
  const startDate = faker.date.between({
    from: "2024-01-01",
    to: "2024-12-31",
  });
  const endDate = faker.date.between({
    from: startDate,
    to: addMonths(startDate, 2),
  });

  return {
    start: startDate,
    ...(Date.now() % 2 && { end: endDate }),
  };
};

const seedFirestore = async () => {
  const reservationsRef = db.collection("reservations");
  const numberOfReservations = 10;

  try {
    for (let i = 0; i < numberOfReservations; i++) {
      const reservation = generateRandomReservation();
      const docRef = reservationsRef.doc();
      await docRef.set(reservation);
      console.log(`Added reservation with ID: ${docRef.id}`, reservation);
    }
    console.log("Seeding complete!");
  } catch (error) {
    console.error("Error seeding Firestore:", error);
  }
};

seedFirestore()
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(-1);
  });
