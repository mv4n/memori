import './App.css'
import Button from "./components/Button/Button.jsx";
import LeftPanel from "./layouts/LeftPanel/LeftPanel.jsx";
import Body from "./layouts/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalForm from "./components/JournalForm/JournalForm.jsx";
import JournalItem from "./components/JournalItem/JournalItem.jsx";
import CardButton from "./components/CardButton/CardButton.jsx";

const data = [
  {
    id: 1,
    title: 'Journal 1',
    text: 'First journal entry',
    date: new Date(2024, 2, 9),
  },
  {
    id: 2,
    title: 'Journal 2',
    text: 'Second journal entry',
    date: new Date(2024, 2, 8),
  },
  {
    id: 3,
    title: 'Journal 3',
    text: 'Third journal entry',
    date: new Date(2024, 2, 7),
  }
];


function App() {

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalList>
          {
            data.map( item => (
               <CardButton key={item.id} className="card">
                 <JournalItem title={item.title} date={item.date} text={item.text} />
               </CardButton>
            ))
          }
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm />
      </Body>
    </div>
  )
}

export default App
