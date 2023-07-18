import Navbar from "./components/Navigation.jsx"
import StudentCard from "./components/SheinCard.jsx"
import Scrollaos from "./components/Scroll.jsx"



function App() {
  const students = [
    {
      id: 1,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/6Z8BHk7/black-dress.jpg'
    },
    {
      id: 2,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/zxzwf48/brown-dress.jpg'
    },
    {
      id: 3,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/t3m71mP/green-dress.jpg'
    },
    {
      id: 1,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/6Z8BHk7/black-dress.jpg'
    },
    {
      id: 2,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/zxzwf48/brown-dress.jpg'
    },
    {
      id: 3,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/t3m71mP/green-dress.jpg'
    },
    {
      id: 1,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/6Z8BHk7/black-dress.jpg'
    },
    {
      id: 2,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/zxzwf48/brown-dress.jpg'
    },
    {
      id: 3,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/t3m71mP/green-dress.jpg'
    },
    {
      id: 1,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/6Z8BHk7/black-dress.jpg'
    },
    {
      id: 2,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/zxzwf48/brown-dress.jpg'
    },
    {
      id: 3,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/t3m71mP/green-dress.jpg'
    },
    {
      id: 1,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/6Z8BHk7/black-dress.jpg'
    },
    {
      id: 2,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/zxzwf48/brown-dress.jpg'
    },
    {
      id: 3,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/t3m71mP/green-dress.jpg'
    },
    {
      id: 3,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/t3m71mP/green-dress.jpg'
    }
  ];

  const studentCardList = students.map(
    (student) => <StudentCard key={student.id} firstName={student.firstName} formerPrice={student.formerPrice} latestPrice={student.latestPrice} image={student.image} />
  );

  return (
   <>
      <Navbar/>
      <h1 className="text-warning container">Welcome to the worlds largest brand</h1>
      <div className="container d-flex flex-wrap">
        {studentCardList} 
      </div>
    </>
  )
}

export default App
