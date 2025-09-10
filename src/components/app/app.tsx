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


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Main />} />
        <Route path='login' element={<SignIn />} />
        <Route path='mylist' element={
          <ProtectedRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList />
          </ProtectedRoute>
        }
        />
        <Route path='films'>
          <Route path=':id' element={<MoviePage />}>
            <Route path='review' element={<AddReview />} />
          </Route>
        </Route>
        <Route path='player'>
          <Route path=':id' element={<Player />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
