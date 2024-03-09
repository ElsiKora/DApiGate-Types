// Version: 0.0.0
import type { IPaginationList } from "../../shared/shared.t";

export interface ICreate {
	key: string;
	section: string;
	value: string;
}

export interface IFindById {
	id: string;
}

export interface IUpdate {
	id: string;
	key?: string;
	value?: string;
}

export interface IDelete {
	id: string;
}

export interface IPaginationFilters extends IPaginationList {
	section?: string;
}

export interface IResponse {
	createdAt: Date;
	id: string;
	key: string;
	updatedAt: Date;
	value: string;
}
