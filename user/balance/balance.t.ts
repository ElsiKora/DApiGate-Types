// Version: 0.0.0
import type { IResponse as ICurrencyResponse } from "../../info/currency/currency.t";
import type { ECurrencyType, EOrderDirection } from "../../info/currency/currency.t";
import type { IPaginationList } from "../../shared";

export interface IPaginationFilters extends IPaginationList {
	order?: EOrderDirection;
	type: ECurrencyType;
}

export interface IFindById {
	id: string;
}

export interface IResponse {
	balance: number;
	createdAt: Date;
	currency: ICurrencyResponse;
	id: string;
	updatedAt: Date;
}
