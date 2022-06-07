import { Navigate } from 'react-router-dom';
import { routes } from '../../common/constants/routes';
import Preloader from '../../common/Preloader/Preloader';
import { useAppSelector } from '../../hooks';
import { getCurrentUser } from '../../store/user/selectors';

const AdminPrivateRoute = ({ children }: any) => {
	const { role, isFetching } = useAppSelector(getCurrentUser);
	const isAdmin = role === 'admin';
	if (isFetching) {
		return <Preloader />;
	}
	return isAdmin ? children : <Navigate to={routes.courses} />;
};

export default AdminPrivateRoute;
