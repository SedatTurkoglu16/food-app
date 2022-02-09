import { Fragment } from 'react';

import classes from './Header.module.css'
import mealImage from '../../assets/meal.jpeg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return <Fragment>
      <header className={classes.header}>
          <h1>TurkishFood</h1>
          <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
          <img src={mealImage} alt="turkish cuisine"/>
      </div>
  </Fragment>
}

export default Header;
