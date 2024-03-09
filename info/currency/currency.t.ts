// Version: 0.0.0
export enum ECurrencyType {
	CRYPTO = "crypto",
	FIAT = "fiat",
}

export enum EOrderDirection {
	ASC = "asc",
	DESC = "desc",
}

export interface IResponse {
	code: string;
	createdAt: Date;
	id: string;
	precision: number;
	type: ECurrencyType;
	updatedAt: Date;
}
