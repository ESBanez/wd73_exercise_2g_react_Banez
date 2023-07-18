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
      image: 'https://i.ibb.co/r4JLGJg/sexy-floral-black.jpg'
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
      id: 4,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/C80n51w/green-tube.jpg'
    },
    {
      id: 5,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/K52n3tj/men-black-a.jpg'
    },
    {
      id: 6,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/PGdqKHR/men-jacket.jpg'
    },
    {
      id: 7,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/4gRD39R/men-jacket-monster.jpg'
    },
    {
      id: 8,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/8sFqmGn/men-jogging-pants.jpg'
    },
    {
      id: 9,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/3dT8Kgt/orange-dress.jpg'
    },
    {
      id: 10,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/RjpLF1Y/pink-dress.jpg'
    },
    {
      id: 11,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/6Z8BHk7/black-dress.jpg'
    },
    {
      id: 12,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/341nx4V/white-dress.jpg'
    },
    {
      id: 13,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/yfGYpLK/men-muscle-tee.jpg'
    },
    {
      id: 14,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/f9c06mg/men-polo-line.jpg'
    },
    {
      id: 15,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/mSMh04b/men-shirt-os.jpg'
    },
    {
      id: 16,
      firstName: 'Black Dress',
      formerPrice: 'P 300',
      latestPrice: 'P 100',
      image: 'https://i.ibb.co/V27VnYT/men-plain-black.jpg'
    }
  ];

  const studentCardList = students.map(
    (student) => <StudentCard key={student.id} firstName={student.firstName} formerPrice={student.formerPrice} latestPrice={student.latestPrice} image={student.image} />
  );

  return (
    <>
      <Navbar />
      <h1 className="text-warning container">Welcome to the worlds largest brand</h1>
      <div className="container d-flex flex-wrap">
        {studentCardList}
      </div>
      <Scrollaos /> {/* Include the Scrollaos component here */}
    </>
  );
}

export default App
