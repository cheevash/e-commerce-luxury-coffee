import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Ethiopian Yirgacheffe Reserve",
    description:
      "A luminous single-origin from the birthplace of coffee. Expect vivid notes of bergamot, jasmine, and ripe blueberry with a silky, tea-like body and a radiant citrus finish.",
    price: 58.0,
    image_url:
      "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=800",
    rating: 4.9,
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Panama Geisha Esmeralda",
    description:
      "The crown jewel of specialty coffee. Sourced from the legendary Hacienda La Esmeralda, this Geisha reveals extraordinary floral complexity—peach, mango, and honeysuckle in every sip.",
    price: 120.0,
    image_url:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
    rating: 5.0,
    created_at: "2024-01-02T00:00:00Z",
  },
  {
    id: "3",
    name: "Colombian Huila Dark Roast",
    description:
      "From the high plateaus of Huila, this dark roast is bold yet refined—deep bittersweet chocolate, roasted almond, and a subtle caramel sweetness that lingers on the palate.",
    price: 44.0,
    image_url:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800",
    rating: 4.7,
    created_at: "2024-01-03T00:00:00Z",
  },
  {
    id: "4",
    name: "Kenya AA Nyeri Microlot",
    description:
      "A rare microlot from the volcanic soils of Nyeri. Strikingly vibrant with blackcurrant, grapefruit zest, and tomato vine—a true adventure for the discerning palate.",
    price: 62.0,
    image_url:
      "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800",
    rating: 4.8,
    created_at: "2024-01-04T00:00:00Z",
  },
  {
    id: "5",
    name: "Sumatra Mandheling Aged",
    description:
      "A bold, earthy masterpiece from northern Sumatra. Wet-hulled and aged to perfection—notes of dark chocolate, cedarwood, and pipe tobacco with a syrupy, full-bodied finish.",
    price: 52.0,
    image_url:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800",
    rating: 4.6,
    created_at: "2024-01-05T00:00:00Z",
  },
  {
    id: "6",
    name: "Guatemala Antigua Honey Process",
    description:
      "Honey-processed at altitude in the Antigua valley, this coffee delivers remarkable sweetness and complexity—brown sugar, dried apricot, and toasted hazelnut in a smooth medium roast.",
    price: 48.0,
    image_url:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800",
    rating: 4.7,
    created_at: "2024-01-06T00:00:00Z",
  },
  {
    id: "7",
    name: "Yemen Mocha Matari",
    description:
      "One of the world's oldest coffee varieties, grown in ancient terraced farms. Distinctively wild and complex with flavors of dark chocolate, cardamom, and dried fruit.",
    price: 88.0,
    image_url:
      "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800",
    rating: 4.8,
    created_at: "2024-01-07T00:00:00Z",
  },
  {
    id: "8",
    name: "Jamaica Blue Mountain No.1",
    description:
      "Among the most coveted coffees on earth. Grown in the misty Blue Mountains, this is a study in balance—mild, sweet, and exquisitely smooth with zero bitterness.",
    price: 145.0,
    image_url:
      "https://images.unsplash.com/photo-1533321942807-08e4008b2025?q=80&w=800",
    rating: 4.9,
    created_at: "2024-01-08T00:00:00Z",
  },
  {
    id: "9",
    name: "Brazil Sul de Minas Natural",
    description:
      "Sun-dried on raised beds in the highlands of Minas Gerais. A lusciously full-bodied natural with notes of milk chocolate, red berries, and a whiskey-like sweetness.",
    price: 38.0,
    image_url:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800",
    rating: 4.5,
    created_at: "2024-01-09T00:00:00Z",
  },
  {
    id: "10",
    name: "Costa Rica Tarrazú SHB",
    description:
      "Strictly Hard Bean grown in the famed Tarrazú region. Clean and bright with crisp apple acidity, white peach, and a smooth milk chocolate base. A quintessential Central American cup.",
    price: 46.0,
    image_url:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800",
    rating: 4.6,
    created_at: "2024-01-10T00:00:00Z",
  },
  {
    id: "11",
    name: "Rwanda Musasa Anaerobic",
    description:
      "An experimental anaerobic lot from the Musasa washing station. Intensely fruity and wine-like with passion fruit, hibiscus, and dark cherry—an extraordinary sensory experience.",
    price: 72.0,
    image_url:
      "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?q=80&w=800",
    rating: 4.8,
    created_at: "2024-01-11T00:00:00Z",
  },
  {
    id: "12",
    name: "Aura Signature Blend",
    description:
      "Our house masterpiece. A handcrafted blend of four single-origins, roasted separately and united into perfect harmony—notes of dark caramel, toasted walnut, and a velvety dark chocolate finish.",
    price: 55.0,
    image_url:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800",
    rating: 4.9,
    created_at: "2024-01-12T00:00:00Z",
  },
];

/**
 * Get all products, sorted by rating descending
 */
export function getProducts(): Product[] {
  return [...products].sort((a, b) => b.rating - a.rating);
}

/**
 * Get a single product by ID. Returns null if not found.
 */
export function getProductById(id: string): Product | null {
  return products.find((p) => p.id === id) ?? null;
}

/**
 * Get featured products (top N by rating)
 */
export function getFeaturedProducts(limit = 8): Product[] {
  return getProducts().slice(0, limit);
}

/**
 * Get recommended products for a given product (all others, limited)
 */
export function getRecommendations(productId: string, limit = 4): Product[] {
  return products.filter((p) => p.id !== productId).slice(0, limit);
}
