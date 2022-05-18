import "./card-list.styles.css";
import CardContainer from "./card-container.component.jsx"

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return(
//       <div className="card-list">
//       {
//         monsters.map((monster) => (
          
//           <CardContainer monster={monster}/>
          
//         ))
//       }
//       </div>
//     )
//   }
// }

const CardList = ({monsters}) => {
  return (
    <div className="card-list">
      {
        monsters.map((monster) => (
          
          <CardContainer monster={monster}/>
          
        ))
      }
      </div>
  )
};

export default CardList;