import './App.css'
import PersonCard from './components/PersonCard'

function App() {

  return (
    <>
    <PersonCard firstName={'Jane'} lastName={'Doe'} age={45} hairColor={'black'} />
    <PersonCard firstName={'Smith'} lastName={'John'} age={88} hairColor={'brown'} />
    <PersonCard firstName={'Fillmore'} lastName={'Millard'} age={50} hairColor={'brown'} />
    <PersonCard firstName={'Smith'} lastName={'Maria'} age={62} hairColor={'brown'} />
    </>
  )
}

export default App
