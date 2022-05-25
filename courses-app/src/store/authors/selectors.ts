import { State } from '../../common/models/state/state';

export const getAuthors = (state: State) => state.authors.authors;
export const getCoursesAuthors = (state: State) => state.authors.coursesAuthors;
