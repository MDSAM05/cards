import logo from './logo.svg';
import './App.css';
import TestCards from './componets/TestCards';

function App() {
     const cards = [
      {
        fullName : "Sarah Dole",
        userName : "@sarahdole",
        description : "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
        imge : "./assets/profile-thumbnail.png",

      }
     ]

  return (
    <div>
      {cards.map((data) => (
      <TestCards
      fullName = {data.fullName}
      userName = {data.userName}
      description = {data.description}
      imge = {data.imge} />
      ))}
    </div>

  );
}

export default App;
