const mockData = [
  {
    src: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80",
    title: "Our indoor pool",
    description: "25 m long covered swimming pool, furnished.",
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    title: "Cocktail bar",
    description: "Esplendid classic cocktail bar with luve music.",
  },
  {
    src: "https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    title: "Standard room",
    description: "20 sqm rooms with full amenities.",
    cat: "room",
    price: 140,
    stock: 12,
    notAvailablestart: new Date(2021, 10, 20).getTime(),
    notAvailableend: new Date(2021, 10, 21).getTime(),
  },
  {
    src: "https://images.unsplash.com/photo-1491835236783-61f0a09f4e15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80",
    title: "Outdoor pool",
    description: "Pool with stunning views of the sea.",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    title: "Executive room",
    description: "Our business rooms with lounge access.",
    cat: "room",
    price: 170,
    stock: 9,
    notAvailablestart: new Date(2021, 10, 20).getTime(),
    notAvailableend: new Date(2021, 10, 21).getTime(),
  },
  {
    src: "https://images.unsplash.com/photo-1583908701673-4cb5f290b548?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    title: "Rooms with balcony",
    description: "Rooms with amazing sea views.",
    cat: "room",
    price: 175,
    stock: 15,
    notAvailablestart: new Date(2021, 10, 20).getTime(),
    notAvailableend: new Date(2021, 10, 21).getTime(),
  },
  {
    src: "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
    title: "Junior suite with kitchenette",
    description: "Our junior suites are perfect for families.",
    cat: "room",
    price: 225,
    stock: 10,
    notAvailablestart: new Date(2021, 10, 20).getTime(),
    notAvailableend: new Date(2021, 10, 21).getTime(),
  },
  {
    src: "https://images.unsplash.com/photo-1565623833408-d77e39b88af6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80",
    title: "Our corner suite",
    description: "Discrete and luxurious with butler service.",
    cat: "room",
    price: 350,
    stock: 4,
    notAvailablestart: new Date(2021, 10, 20).getTime(),
    notAvailableend: new Date(2021, 10, 21).getTime(),
  },
];

export const chips = [
  { key: 0, label: "Cancellation Flexibility" },
  { key: 1, label: "Standard rooms" },
  { key: 2, label: "Executive rooms" },
  { key: 3, label: "Access to lounge" },
  { key: 4, label: "more filters" },
];

export default mockData;
