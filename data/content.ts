export const services = [
  "Bridal Makeup","Party Makeup","Hair Cut & Styling","Hair Spa","Facial & Herbal Skincare","Cleanup & Glow Treatments","Manicure / Pedicure","Waxing / Threading","Hair Coloring","Pre-Bridal Packages","Mehendi","Nail Art"
].map((name, i) => ({
  name,
  description: "Tailored ritual with herbal formulations, precision artistry, and a serene luxury touch.",
  duration: `${45 + i * 10} min`,
  price: `₹${(12 + i) * 100}`
}));

export const testimonials = [
  { name: "Aarohi S.", quote: "The bridal finish looked radiant yet natural. Truly premium care.", rating: 5 },
  { name: "Nandini P.", quote: "My skin feels healthier after every herbal facial session.", rating: 5 },
  { name: "Ritika M.", quote: "Elegant ambience, hygienic setup, and very attentive staff.", rating: 5 }
];

export const gallery = Array.from({ length: 9 }).map((_, i) => ({
  src: `https://images.unsplash.com/photo-${[1522335789203,1487412720507,1524504388940,1515377905703,1521590832167,1498842812179,1485291571150,1523264766116,1522337360788][i]}?auto=format&fit=crop&w=1200&q=80`,
  category: ["bridal","facial","hair","nail","salon"][i % 5],
  alt: "Luxury herbal beauty service"
}));
