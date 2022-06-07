export interface ApiResponse<TResult> {
	successful: boolean;
	result: TResult;
	errors: string[];
}
