const images = [
  {
    id: 1,
    description: "Spaghetti Carbonara",
    url: "https://i.imgur.com/CoxeB73.jpeg",
  },
  {
    id: 2,
    description: "Beef Stew",
    url: "https://i.imgur.com/Xjryzf8.jpeg",
  },
  {
    id: 3,
    description: "Stir Fry",
    url: "https://i.imgur.com/oRNqz9M.jpeg",
  },
  {
    id: 4,
    description: "Cheeseburger",
    url: "https://i.imgur.com/H4q9dfb.jpeg",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <h2>Image Gallery</h2>
      <div>
        <img
          src={images[currentIndex].url}
          alt={`Image ${images[currentIndex].id}`}
        />
        <p>{images[currentIndex].description}</p>
      </div>
      <div>
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default Gallery;
