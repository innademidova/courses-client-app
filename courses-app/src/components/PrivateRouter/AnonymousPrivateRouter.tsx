import { Navigate } from 'react-router-dom';
import { routes } from '../../common/constants/routes';
import Preloader from '../../common/Preloader/Preloader';
import { useAppSelector } from '../../hooks';
import { getCurrentUser } from '../../store/user/selectors';

const AnonymousPrivateRoute = ({ children }: any) => {
	const { isAuth, isFetching } = useAppSelector(getCurrentUser);
	if (isFetching) {
		return <Preloader />;
	}
	return isAuth ? <Navigate to={routes.courses} /> : children;
};

export default AnonymousPrivateRoute;
