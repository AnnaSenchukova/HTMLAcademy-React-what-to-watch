import {AddReview} from '../../pages/AddReview';
import {HeadGuest} from '../../pages/HeadGuest';
import {Main} from '../../pages/Main';
import {MoviePage} from '../../pages/MoviePage';
import {MoviePageDetails} from '../../pages/MoviePageDetails';
import {MoviePageReviews} from '../../pages/MoviePageReviews';
import {MoviePageInList} from '../../pages/MoviePageInList';
import {MyList} from '../../pages/MyList';
import {SignIn} from '../../pages/SignIn';
import {SignInError} from '../../pages/SignInError';
import {SignInMessage} from '../../pages/SignInMessage';
import {IconSprite} from '../IconSprite';

function App(): JSX.Element {
  return (
    <body>
      <IconSprite />
      <Main />
      <AddReview />
      <HeadGuest />
      <MoviePage />
      <MoviePageDetails />
      <MoviePageReviews />
      <MoviePageInList />
      <MyList />
      <SignIn />
      <SignInError />
      <SignInMessage />
    </body>
  );
}

export default App;
