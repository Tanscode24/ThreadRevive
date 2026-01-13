const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/User");
const Item = require("./models/Item");
const Match = require("./models/Match");

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected for Seeding");

    // साफ पुराना demo data (optional but clean)
    await User.deleteMany({});
    await Item.deleteMany({});
    await Match.deleteMany({});

    // 1️⃣ Create Seller
    const seller = await User.create({
      name: "Demo Seller",
      email: "seller@threadrevive.com",
      role: "seller",
      location_hub: "Noida Hub",
    });

    // 2️⃣ Create Designer
    const designer = await User.create({
      name: "Demo Designer",
      email: "designer@threadrevive.com",
      role: "designer",
      specialization: ["Denim", "Streetwear"],
      portfolio: ["https://example.com/portfolio1.jpg"],
      location_hub: "Noida Hub",
    });

    // 3️⃣ Create Items
    const item1 = await Item.create({
      title: "Old Denim Jacket",
      category: "Denim Jacket",
      status: "ready_for_sale",
      images: {
        original_url: "https://example.com/denim_before.jpg",
        upcycled_url: "https://example.com/denim_after.jpg",
      },
      owner_id: seller._id,
      designer_id: designer._id,
      impact_metrics: {
        water_saved: 7000,
        carbon_reduced: 12,
      },
    });

    const item2 = await Item.create({
      title: "Vintage Cotton Shirt",
      category: "Cotton Shirt",
      status: "matching",
      images: {
        original_url: "https://example.com/shirt_before.jpg",
      },
      owner_id: seller._id,
    });

    // 4️⃣ Create Match (Designer Proposal)
    await Match.create({
      item_id: item2._id,
      designer_id: designer._id,
      proposed_design: "Convert into cropped streetwear shirt",
      approval_status: "pending",
    });

    console.log("✅ Demo data seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedData();
