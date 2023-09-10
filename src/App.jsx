import { default as TopBar } from "./components/TopBar.jsx";
import { default as Card } from "./components/Card.jsx";
import './App.css'

function App() {
  return (
    <>
      <TopBar />
      <main>
        <Card
          key={0}
          img="/public/white-tiger.jpg"
          location="India"
          locationLink="https://goo.gl/maps/wDkYMztGXFNhJyao6"
          title="The White Tiger"
          altNames="Ghost Tiger, Royal White Tiger"
          description="The white tiger, scientifically known as Panthera tigris,
          is a majestic and rare subspecies of the Bengal tiger 
          (Panthera tigris tigris). What sets the white tiger apart
          from its orange counterparts is its unique genetic 
          variation, resulting in a striking coat coloration characterized
          by white fur with black stripes."
        />
      </main>
    </>
  )
}

export default App
