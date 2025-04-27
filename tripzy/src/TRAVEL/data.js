// Features
import beach from "./Assets/images/features/beach-umbrella.png";
import deal from "./Assets/images/features/deal.png";
import Location from "./Assets/images/icons/location.png";
import medal from "./Assets/images/features/medal.png";

// Featured Destinations
import Taj from "./Assets/images/cards/Taj.avif";
import Havelock from "./Assets/images/cards/Havelock.jpg";
import Barcelona from "./Assets/images/cards/Barcelona.jpeg";
import Rome from "./Assets/images/cards/rome.jpeg";
import bali from "./Assets/images/cards/bali-8838762_1280.jpg";
import paris from "./Assets/images/cards/paris.jpg";
import swiss from "./Assets/images/cards/swiss.jpg";
import Kyoto from "./Assets/images/cards/Kyoto.jpeg";

// Icons
import locationIcon from "./Assets/images/icons/location.png";
import star from "./Assets/images/icons/star.png";
import time from "./Assets/images/icons/time.png";

// Contact Page
import call from "./Assets/images/social/call.png";
import mail from "./Assets/images/social/mail.png";
import globe from "./Assets/images/social/globe.png";






const destinations = [
  {
    id: 1,
    title: "Taj Mahatlal, India",
    image: Taj,
    rating: 5.0,
    location: "Agra, India",
    price: 999,
    days: 1,
    nights: 2,
    type: "Adventure Tours",
  },
  {
    id: 2,
    title: "Havelock Island",
    image: Havelock,
    rating: 4.5,
    location: "Andaman, India",
    price: 1299,
    days: 2,
    nights: 4,
    type: "Adventure Tours",
  },
  {
    id: 3,
    title: "Barcelona, Indonesia",
    image: Barcelona,
    rating: 4.7,
    location: "Spain",
    price:1999,
    days: 3,
    nights: 5,
    type: "Adventure Tours",
  },
  {
    id: 4,
    title: "Rome",
    image: Rome,
    rating: 4.8,
    location: "Italy",
    price: 1499,
    days: 3,
    nights: 5,
    type: "Adventure Tours",
  },
  {
    id: 5,
    title: "Bali",
    image: bali,
    rating: 4.6,
    location: "Indonesia",
    price: 1999,
    days: 5,
    nights: 10,
    type: "Adventure Tours",
  },
  {
    id: 6,
    title: "Paris",
    image: paris,
    rating: 4.9,
    location: "France",
    price: 2499,
    days: 1,
    nights: 3,
    type: "Cultural Tours",
  },
  {
    id: 7,
    title: "Swiss Alps",
    image: swiss,
    rating: 4.7,
    location: "Switzerland",
    price: 2999,
    days: 2,
    nights: 4,
    type: "Adventure Tours",
  },
  {
    id: 8,
    title: "Kyoto",
    image: Kyoto,
    rating: 4.5,
    location: "Japan",
    price: 1999,
    days:'1',
    nights: '2',
    type: "Cultural Tours",
  },
];


let features = [
  {
    id: 1,
    title: "Discover the possibilities",
    image: beach,
    content:
      "Write nearly half a million attractions, hotels & more, you're sure to find joy.",
  },
  {
    id: 2,
    title: "Enjoy deals & delights",
    image: deal,
    content:
      "Quality activities. Great prices. Plus, earn Credits, coupons to save more.",
  },
  {
    id: 3,
    title: "Exploring made easiest",
    image: Location,
    content:
      "Book last minute, skip lines & amp; get free cancellation for easier exploring",
  },
  {
    id: 4,
    title: "Travel you can trust",
    image: medal,
    content:
      "Read reviews & get reliable customer support. We're with you at every step.",
  },
];




// Contact Us Data
const contactUs = [
  {
    id: 1,
    title: "Call Us",
    description: 'Our travel experts are just a call away. Reach out to us for instant assistance, personalized tour planning, or any queries regarding your travel bookings.',
    image: call,
    contact: "+91 7674938299",
    icon: "fa-solid fa-phone",
  },
  {
    id: 2,
    title: "Email Us",
    description: "Have questions or need a customized travel package? Drop us an email and our team will get back to you with the best options tailored to your needs.",
    image: mail,
    contact: "gouthamsomaraju11@gmail.com",
    icon: "fa-solid fa-envelope",
  },
  {
    id: 3,
    title: "Social Media",
    description: "Stay connected with us through social media. Follow our journey, explore new destinations, and get the latest travel updates and offers!",
    image: globe,
    contact: "github.com/GouthamSomaraju",
    icon: "fa-brands fa-linkedin  fa-brands fa-github",
  },
];

export { destinations, features, locationIcon, star, time, contactUs };