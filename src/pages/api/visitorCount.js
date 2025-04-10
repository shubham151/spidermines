// pages/api/visitorCount.js
import { doc, getDoc, setDoc, runTransaction } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default async function handler(req, res) {
  const countDocRef = doc(db, "visitorCount", "count");

  if (req.method === "GET") {
    try {
      const docSnap = await getDoc(countDocRef);
      if (!docSnap.exists()) {
        // If the document doesn't exist, create it with an initial count.
        await setDoc(countDocRef, { count: 0 });
        return res.status(200).json({ count: 0 });
      }
      return res.status(200).json({ count: docSnap.data().count });
    } catch (error) {
      console.error("Error fetching visitor count:", error);
      return res.status(500).json({ error: "Error fetching visitor count" });
    }
  } else if (req.method === "POST") {
    try {
      // Run a Firestore transaction to increment the count safely
      await runTransaction(db, async (transaction) => {
        const docSnap = await transaction.get(countDocRef);
        if (!docSnap.exists()) {
          transaction.set(countDocRef, { count: 1 });
        } else {
          const newCount = docSnap.data().count + 1;
          transaction.update(countDocRef, { count: newCount });
        }
      });
      // Get and return the updated visitor count.
      const updatedDoc = await getDoc(countDocRef);
      return res.status(200).json({ count: updatedDoc.data().count });
    } catch (error) {
      console.error("Error updating visitor count:", error);
      return res.status(500).json({ error: "Error updating visitor count" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
