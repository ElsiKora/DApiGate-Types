// Version: 0.0.0
import type { IPaginationList } from "../../../shared/shared.t";
import type { IResponse as WayType } from "../../way/way.t";

export enum EDepositStatus {
	CANCELED = "canceled",
	EXPIRED = "expired",
	FAILED = "failed",
	NEW = "new",
	PAID = "paid",
	REJECTED = "rejected",
	WAITING = "waiting",
}

export enum EDepositType {
	CRYPTO = "crypto",
	EXTERNAL = "external",
	INTERNAL = "internal",
	P2PCARD = "p2pcard",
	P2PCARD_BANK_SELECT = "p2pcardBankSelect",
	P2PWALLET = "p2pwallet",
	P2PWALLET_BANK_SELECT = "p2pwalletBankSelect",
	QR = "qr",
	THREEDS = "3ds",
}

export interface ICreate {
	amount: number;
	way: string;
}

export interface IFindById {
	way: string;
}

export interface IResponseCreate {
	createdAt: Date;
	id: string;
	status: EDepositStatus;
	updatedAt: Date;
}

export interface IResponse {
	amount: number;
	createdAt: Date;
	description: string;
	expiresIn: Date;
	fee: { depositRatio: number; internal: number };
	id: string;
	internal: boolean;
	internalSender: string;
	status: EDepositStatus;
	type: EDepositType;
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
	status: Array<EDepositStatus>;
	way?: string;
}
