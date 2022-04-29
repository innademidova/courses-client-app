import moment from 'moment';

export const convertMinutesToHours = (duration) => {
	if (!duration) {
		return ' 00:00 hours';
	}

	if (duration < 10) {
		return ` 00:0${duration} hours`;
	}

	if (duration < 60) {
		return ` 00:${duration} hours`;
	}

	return (
		moment.utc().startOf('day').add({ minutes: duration }).format('hh:mm') +
		' hours'
	);
};
