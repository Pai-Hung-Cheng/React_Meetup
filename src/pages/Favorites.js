import { useContext } from "react";
import FavortiesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavortiesContext);

  let content;
  if (favoritesCtx.totalFavorties === 0) {
    content = <p>You got no favorites yet.</p>;
  } else {
    content = <MeetupList meetup={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
