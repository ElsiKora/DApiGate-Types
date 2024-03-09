// Version: 1.0.0

export declare namespace Api {
	export interface IApiListResponseProperties<T> {
		count: number;
		currentPage: number;
		items: Array<T>;
		totalCount: number;
		totalPages: number;
	}

	export interface IApiListRequestProperties {
		limit: number;
		page: number;
	}
}
