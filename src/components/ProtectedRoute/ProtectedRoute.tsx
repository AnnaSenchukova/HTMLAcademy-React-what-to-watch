import {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';

import {AuthorizationStatus} from '../../config/enumAuthorizationStatus';


type ProtectedRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: ReactElement;
};

export function ProtectedRoute({children, authorizationStatus}: ProtectedRouteProps): ReactElement {
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to="/login" replace/>;
}
