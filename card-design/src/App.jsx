import "./App.css";
import Card from "./components/Card";

function App() {
  const cardData = [
    {
      title: "Entire apartment in Candolim, India",
      price: 39,
      image:
        "https://a0.muscache.com/im/pictures/0f180a57-460d-43d2-b44f-bcb70e096ff8.jpg?im_w=960",
      description:
        "Luxury apartment with beautiful balcony views and modern amenities.",
    },
    {
      title: "Beach House in Goa",
      price: 55,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      description:
        "Enjoy a relaxing stay near the beach with stunning sunset views.",
    },
    {
      title: "Mountain Cabin Retreat",
      price: 49,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      description: "Peaceful cabin surrounded by mountains and fresh air.",
    },
    {
    title: "Modern Villa in Bali",
    price: 89,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    description: "Private villa with swimming pool and tropical garden."
    },
    {
      title: "Luxury Penthouse",
      price: 120,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      description: "Premium penthouse with city skyline views."
    },
    {
      title: "Lake View Cottage",
      price: 45,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      description: "Cozy cottage overlooking a peaceful lake."
    },
    {
      title: "Desert Camp Experience",
      price: 35,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      description: "Experience the beauty of desert nights and campfires."
    },
    {
      title: "Treehouse Adventure",
      price: 60,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      description: "Unique treehouse stay surrounded by nature."
    },
    {
      title: "Oceanfront Resort Room",
      price: 95,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      description: "Wake up to breathtaking ocean views every morning."
    },
    {
      title: "Countryside Farm Stay",
      price: 42,
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118",
      description: "Relax and reconnect with nature in the countryside."
    }
  ];

  return (
    <>
      <div className="parent">
        {
          cardData.map(function(elem, idx) {
            return <Card key={idx} cardData={elem}/>
          })
        }
      </div>
    </>
  );
}

export default App;
