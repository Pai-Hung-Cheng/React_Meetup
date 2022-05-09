import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./ＭainNavigation.module.css";
import FavortiesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavortiesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites{" "}
              <span className={classes.badge}>
                {favoritesCtx.totalFavorties}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
