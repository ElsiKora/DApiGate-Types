// Version: 0.0.0
import type { IResponse as IWay } from "../ways/ways.t";

export enum ETransferStatus {
	FAILED = "failed",
	NEW = "new",
	PAID = "paid",
	PROCESS = "process",
	WAITING = "waiting",
}

export enum ETransferType {
	EXTERNAL = "external",
	INTERNAL = "internal",
}

export interface ICreate {
	amount: number;
	customerID: string;
	description: string;
	internalID: string;
	ip: string;
	purse: "";
	way: string;
}

export interface IResponse {
	amount: number;
	createdAt: Date;
	description: string;
	fee: { internal: number; transferType: boolean };
	id: string;
	merchant: { name: string };
	purse: string;
	status: ETransferStatus;
	type: ETransferType;
	updatedAt: Date;
	way: IWay;
}
