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

type FilmsCardPromoProps = {
  preview: string;
  title: string;
  genre: string;
  releaseDate: number;
};

function App(props: FilmsCardPromoProps): JSX.Element {
  return (
    <body>
      <IconSprite />
      <Main {...props} />
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
