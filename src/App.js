import './App.css';

const cards = [
  {
    title: "Odoyá, Yemanjá",
    image: "https://i.imgur.com/xS8uZ3R.jpg",
    link: "https://www.instagram.com/p/CvMhAA2ODrj/",
  },
  {
    title: "Constelação Preta",
    image: "https://i.imgur.com/6KjXuA6.jpg",
    link: "https://www.instagram.com/p/CyBZZWtsL_c/",
  },
  {
    title: "Black Medals",
    image: "https://i.imgur.com/99UwBaS.jpg",
    link: "https://www.instagram.com/p/Cw9T7NMuFep/",
  },
];

function App() {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <a className="card" key={index} href={card.link} target="_blank" rel="noopener noreferrer">
          <img src={card.image} alt={card.title} />
          <h2>{card.title}</h2>
        </a>
      ))}
    </div>
  );
}

export default App;
