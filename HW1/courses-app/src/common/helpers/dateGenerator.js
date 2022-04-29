import moment from 'moment';
export const dateGenerator = () => {
	return moment().format('L');
};
