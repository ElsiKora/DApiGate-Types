// Version: 0.0.0
import type { IPaginationList } from "../../../shared/shared.t";
import type { IResponse as WayType } from "../../way/way.t";

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
	description?: string;
	purse: string;
	way: string;
}

export interface IFindById {
	way: string;
}

export interface IResponseCreate {
	createdAt: Date;
	id: string;
	status: ETransferStatus;
	updatedAt: Date;
}

export interface IResponse {
	amount: number;
	createdAt: Date;
	description: string;
	expiresIn: Date;
	fee: { internal: number; transferType: boolean };
	id: string;
	internal: boolean;
	internalSender: string;
	purse: string;
	status: ETransferStatus;
	type: ETransferType;
	updatedAt: Date;
	way: WayType;
}

export interface IPaginationFilters extends IPaginationList {
	amountFrom: number;
	amountTo: number;
	currency?: string;
	dateFrom: string;
	dateTo: string;
	description?: string;
	status: Array<ETransferStatus>;
	way?: string;
}
