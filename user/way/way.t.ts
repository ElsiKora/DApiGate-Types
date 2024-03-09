// Version: 0.0.0
export interface IMerchantFee {
	depositRatio: number;
	transferType: boolean;
	value: {
		deposit: number;
		transfer: number;
	};
}

export type TPurseType = "card" | "wallet";
export type TCurrencyType = "crypto" | "fiat";

export interface IFindById {
	way: string;
}

interface IWayType {
	createdAt?: Date;
	id: string;
	mask: string;
	name: string;
	pursePattern: string;
	purseType: TPurseType;
	updatedAt?: Date;
}

export interface IWayCurrency {
	code: string;
	createdAt?: Date;
	id: string;
	precision: number;
	type: TCurrencyType;
	updatedAt?: Date;
}

export interface IResponse {
	currency: IWayCurrency;
	deposit: boolean;
	enabled: boolean;
	fee: IMerchantFee;
	id: string;
	transfer: boolean;
	type: IWayType;
}
