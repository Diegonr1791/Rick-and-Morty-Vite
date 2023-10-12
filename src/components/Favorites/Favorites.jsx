import Card from "../Card/Card";
import { connect, useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import CardFormat from "../Card/Card";
const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);
  console.log(myFavorites);

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <div>
      <select name="" id="" onChange={handleOrder}>
        <option value="A">Acendente</option>
        <option value="D">Decendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allCharacter">All Characters</option>
      </select>
      {myFavorites?.map((fav) => {
        return (
          <CardFormat
            key={fav.id}
            id={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
            origin={fav.origin.name}
            onClose={fav.onClose}
          />
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(Favorites);
