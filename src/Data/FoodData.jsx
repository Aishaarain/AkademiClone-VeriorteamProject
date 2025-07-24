
const foodItems = [
  {
    id: 'beef-steak-fried-potato',
    title: 'Beef Steak with Fried Potato',
    category: 'Lunch',
    rating: 4.9,
    totalOrder: 1456,
    interest: 26,
    progress: 50,
    description: "A classic dish featuring tender beef steak cooked to perfection, served alongside crispy fried potatoes. A hearty and satisfying meal.",
    ingredients: [
      "2 tablespoons butter, softened, divided",
      "1 teaspoon minced fresh parsley",
      "1/2 teaspoon minced garlic",
      "1/4 teaspoon reduced-sodium soy sauce",
      "1 beef flat iron steak or boneless top sirloin steak (3/4 pound)",
      "1/8 teaspoon salt",
      "1/8 teaspoon pepper"
    ],
    nutrition: [
      "Calories: 217.",
      "Water: 61%",
      "Protein: 26.1 grams.",
      "Carbs: 0 grams.",
      "Sugar: 0 grams.",
      "Fiber: 0 grams.",
      "Fat: 11.8 grams."
    ],
    comments: [
      { author: "Samantha W.", time: "5 days ago", text: "Sed eligendi facere repellendus. ipsum ipsum incididunt minima harum tenetur." },
      { author: "Karen Hope", time: "5 days ago", text: "Sed eligendi facere repellendus. ipsum ipsum incididunt minima harum tenetur." },
      { author: "Tony Soap", time: "5 days ago", text: "Sed eligendi facere repellendus. ipsum ipsum incididunt minima harum tenetur." },
    ]
  },
  {
    id: 'pancake-honey',
    title: 'Pancake with Honey',
    category: 'Breakfast',
    rating: 4.7,
    totalOrder: 890,
    interest: 15,
    progress: 70,
    description: "Fluffy pancakes drizzled with golden honey, a perfect sweet start to your day.",
    ingredients: [
      "1 cup all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1/2 teaspoon salt",
      "1 cup milk",
      "2 tablespoons melted butter",
      "1 large egg",
      "Honey for drizzling"
    ],
    nutrition: [
      "Calories: 300.",
      "Water: 30%",
      "Protein: 8 grams.",
      "Carbs: 45 grams.",
      "Sugar: 15 grams.",
      "Fiber: 2 grams.",
      "Fat: 10 grams."
    ],
    comments: [
      { author: "Alice M.", time: "2 days ago", text: "Delicious and light! Perfect for breakfast." },
      { author: "Bob J.", time: "1 day ago", text: "My kids loved it, especially with extra honey!" },
    ]
  },
  {
    id: 'japanese-beef-ramen',
    title: 'Japanese Beef Ramen',
    category: 'Lunch',
    rating: 4.8,
    totalOrder: 2100,
    interest: 35,
    progress: 80,
    description: "Authentic Japanese ramen with tender slices of beef, rich broth, and fresh noodles.",
    ingredients: [
      "Beef broth",
      "Ramen noodles",
      "Thinly sliced beef",
      "Soft-boiled egg",
      "Green onions",
      "Seaweed (Nori)"
    ],
    nutrition: [
      "Calories: 450.",
      "Water: 50%",
      "Protein: 30 grams.",
      "Carbs: 50 grams.",
      "Sugar: 5 grams.",
      "Fiber: 3 grams.",
      "Fat: 15 grams."
    ],
    comments: [
      { author: "Charlie K.", time: "4 hours ago", text: "Best ramen I've had outside of Japan!" },
      { author: "Diana P.", time: "7 days ago", text: "A bit spicy, but very flavorful." },
    ]
  },
  {
    id: 'mixed-salad',
    title: 'Mixed Salad',
    category: 'Lunch',
    rating: 4.2,
    totalOrder: 720,
    interest: 10,
    progress: 40,
    description: "A fresh and vibrant mixed salad with assorted greens and a light vinaigrette.",
    ingredients: [
      "Mixed greens",
      "Cherry tomatoes",
      "Cucumber",
      "Bell peppers",
      "Red onion",
      "Olive oil",
      "Vinegar"
    ],
    nutrition: [
      "Calories: 150.",
      "Water: 80%",
      "Protein: 5 grams.",
      "Carbs: 10 grams.",
      "Sugar: 3 grams.",
      "Fiber: 4 grams.",
      "Fat: 8 grams."
    ],
    comments: [
      { author: "Eve L.", time: "6 days ago", text: "Healthy and delicious, perfect for a light lunch." },
    ]
  },
  {
    id: 'beef-meatball-vegetable',
    title: 'Beef Meatball with Vegetable',
    category: 'Snack',
    rating: 4.5,
    totalOrder: 1120,
    interest: 20,
    progress: 60,
    description: "Savory beef meatballs served with a medley of steamed fresh vegetables.",
    ingredients: [
      "Ground beef",
      "Breadcrumbs",
      "Egg",
      "Onion",
      "Mixed vegetables (carrots, peas, corn)",
      "Tomato sauce"
    ],
    nutrition: [
      "Calories: 350.",
      "Water: 45%",
      "Protein: 25 grams.",
      "Carbs: 20 grams.",
      "Sugar: 8 grams.",
      "Fiber: 5 grams.",
      "Fat: 18 grams."
    ],
    comments: [
      { author: "Frank G.", time: "3 days ago", text: "Great snack, very filling!" },
      { author: "Grace H.", time: "8 days ago", text: "Meatballs were tender, vegetables cooked perfectly." },
    ]
  },
];

export default foodItems;
