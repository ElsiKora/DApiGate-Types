// Version: 0.0.0
export interface IPaginationList {
	limit: number;
	page: number;
}

export type TPaginationResponse<T> = {
	count: number;
	items: Array<T>;
	totalCount: number;
	totalPages: number;
};

export type TErrorResponse = {
	message: [{ constraints: Array<Record<string, string>> }] | string;
	statusCode: number;
};
