import { Component } from "react";
import "./card.styles.css";

class CardContainer extends Component {
  render() {
    const { monster } = this.props;
    const { name, email, id } = monster;

    return (
      <div className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    )
  }
}
export default CardContainer;