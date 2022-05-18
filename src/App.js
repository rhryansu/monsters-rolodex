import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [matchedMonsters, setMatchedMonsters] = useState([]);
  
  const onSearchChange = (event) => {
    const searchFieldLocal = event.target.value.toLocaleLowerCase();
    console.log(event.target.value);
    setSearchField(searchFieldLocal);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
       .then((response) => response.json())
       .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const matchedMonstersList = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));
    setMatchedMonsters(matchedMonstersList);
  }, [monsters, searchField]);
  

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>

      <SearchBox 
        className='search-box' 
        onChangeHandler={onSearchChange} 
        placeholder='search here'
      />
      
      <CardList 
        monsters={matchedMonsters}
      />
    </div>
  )
}


// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(() => {
//         return {monsters: users};
//       }))
//   }


//   render() {

//     const onSearchChange = (event) => {
//       const searchField = event.target.value;
//       console.log(event.target.value);
//       this.setState(() => {return {searchField}});
//     }

//     const originalList = this.state.monsters;
//     const matchedMonstersList = originalList.filter(monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox className='search-box' onChangeHandler={onSearchChange} placeholder='search here'/>
      
//         <CardList monsters={matchedMonstersList}/>
//       </div>
//     );
//   }
// }
export default App;
