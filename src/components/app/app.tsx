import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {AddReview} from '../../pages/AddReview';
import {Main} from '../../pages/Main';
import {MoviePage} from '../../pages/MoviePage';
import {MyList} from '../../pages/MyList';
import {SignIn} from '../../pages/SignIn';
import {Player} from '../../pages/Player';
import {Page404} from '../../pages/Page404';
import {ProtectedRoute} from '../ProtectedRoute';
import {AuthorizationStatus} from '../../config/enumAuthorizationStatus';
import {AppRoute} from '../../config/enumAppRoute';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={AppRoute.Root} element={<Main />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.MyList} element={
          <ProtectedRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList />
          </ProtectedRoute>
        }
        />
        <Route path={AppRoute.MoviePage}>
          <Route index element={<MoviePage />} />
          <Route path={AppRoute.AddReview} element={<AddReview />} />
        </Route>
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
