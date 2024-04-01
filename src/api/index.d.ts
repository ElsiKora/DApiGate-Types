export declare namespace Api {
	export interface IApiListResponseProperties<T> {
		count: number;
		currentPage: number;
		items: Array<T>;
		totalCount: number;
		totalPages: number;
	}

	export interface IApiSimpleListResponseProperties<T> {
		items: Array<T>;
		totalCount: number;
	}

	export interface IApiListRequestProperties {
		limit: number;
		page: number;
	}
}
