// Import the images using relative paths
import Place1Image1 from "./Assets/TokyoImage1.jpg";
import Place1Image2 from "./Assets/TokyoImage2.jpg";
import Place1Image3 from "./Assets/TokyoImage3.jpg";

import Place2Image1 from "./Assets/LondonImage1.jpg";
import Place2Image2 from "./Assets/LondonImage2.jpg";
import Place2Image3 from "./Assets/LondonImage3.jpg";

import Place3Image1 from "./Assets/SFImage1.jpg";
import Place3Image2 from "./Assets/SFImage2.jpg";
import Place3Image3 from "./Assets/SFImage3.jpg";

const TravelData = [
  {
    id: 1,
    placeHeading: "Tokyo",
    images: [Place1Image1, Place1Image2, Place1Image3],
    placeDescription: "Lorem ipsum dolor sit amet...",
  },
  {
    id: 2,
    placeHeading: "London",
    images: [Place2Image1, Place2Image2, Place2Image3],
    placeDescription: "Lorem ipsum dolor sit amet...",
  },
  {
    id: 3,
    placeHeading: "San Francisco",
    images: [Place3Image1, Place3Image2, Place3Image3],
    placeDescription: "Lorem ipsum dolor sit amet...",
  },
];

export default TravelData;
