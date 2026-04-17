// // import Contact from "../models/Contact.js";

// // export const sendMessage = async (req, res) => {
// //   try {
// //     const { name, email, message } = req.body;

// //     const newMessage = new Contact({
// //       name,
// //       email,
// //       message,
// //     });

// //     await newMessage.save();

// //     res.status(201).json({
// //       message: "Message saved successfully ✅",
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       error: "Server error",
// //     });
// //   }
// // };

// // import Contact from "../models/Contact.js";

// // export const sendMessage = async (req, res) => {
// //   try {
// //     const { name, email, message } = req.body;

// //     // 🔥 THIS CREATES DATABASE + COLLECTION
// //     const newMessage = new Contact({
// //       name,
// //       email,
// //       message,
// //     });

// //     await newMessage.save(); // ⭐ MOST IMPORTANT LINE

// //     res.json({ message: "Saved successfully ✅" });

// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: "Server error" });
// //   }
// // };

// export const sendMessage = async (req, res) => {
//   try {
//     console.log("Request received:", req.body);

//     const { name, email, message } = req.body;

//     const newMessage = new Contact({ name, email, message });

//     const saved = await newMessage.save();

//     console.log("Saved in DB:", saved);

//     res.json({ message: "Saved successfully ✅" });

//   } catch (error) {
//     console.error("ERROR:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";

export const sendMessage = async (req, res) => {
  try {
    console.log("Request received:", req.body);

    const { name, email, message } = req.body;
    console.log("Sending email...");
    await sendEmail({ name, email, message });
    console.log("Email function called");

    const newMessage = new Contact({
      name,
      email,
      message,
    });

    const saved = await newMessage.save();

    console.log("Saved in DB:", saved);

    res.json({ message: "Saved successfully ✅" });

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
};