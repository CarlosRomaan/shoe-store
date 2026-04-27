import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";
import dotenv from "dotenv";

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const nikeProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU accents.",
    price: "130.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx0mrestdp/air-max-90-mens-shoes-6n3vKB.png",
    category: "Running",
    inStock: true,
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    price: "115.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png",
    category: "Lifestyle",
    inStock: true,
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors.",
    price: "115.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b70d-39944d8e8e58/dunk-low-retro-mens-shoes-76KnBL.png",
    category: "Lifestyle",
    inStock: true,
  },
  {
    name: "Nike Air Jordan 1 Retro High OG",
    description:
      "Inspired by the original that debuted in 1985, the Air Jordan 1 Retro High OG offers a clean look that's iconic.",
    price: "180.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/air-jordan-1-retro-high-og-mens-shoes-Lot8cB.png",
    category: "Basketball",
    inStock: true,
  },
  {
    name: "Nike Pegasus 41",
    description:
      "Responsive cushioning in the Pegasus provides an energized ride for everyday road running.",
    price: "140.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/18b9a1f0-e0c0-46ce-b19e-cf43e0274bf3/pegasus-41-mens-road-running-shoes-FGMmhx.png",
    category: "Running",
    inStock: true,
  },
  {
    name: "Nike Blazer Mid '77 Vintage",
    description:
      "In the '77, Nike was just starting to perfect the craft of shoe-making. The Blazer Mid '77 Vintage harnesses that old-school look.",
    price: "105.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-mens-shoes-nw30B2.png",
    category: "Lifestyle",
    inStock: false,
  },
  {
    name: "Nike Air Max 270",
    description:
      "Nike's first lifestyle Air Max brings you style, comfort, and big attitude in the Air Max 270.",
    price: "160.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/awjogtdnqxniqqk0wpgf/air-max-270-mens-shoes-KkLcGR.png",
    category: "Lifestyle",
    inStock: true,
  },
  {
    name: "Nike Vomero 18",
    description:
      "Incredibly satisfying cushioning meets a sleek, everyday design in the Vomero 18 for plush road running comfort.",
    price: "160.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d3eb4e09-f25a-42fa-90b5-5e16b5b80b16/vomero-18-mens-road-running-shoes-ZnF3JX.png",
    category: "Running",
    inStock: true,
  },
];

async function seed() {
  console.log("Seeding products...");
  await db.insert(products).values(nikeProducts);
  console.log(`Seeded ${nikeProducts.length} Nike products.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
