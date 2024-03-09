// Version: 0.0.0
import type { IResponse as IMerchantBalance } from "../../user/balance/balance.t";
import type { IResponse as IWay } from "../ways/ways.t";

export enum EMerchantStatus {
	ACTIVE = "active",
	BLOCKED = "blocked",
	CONFIRMATION = "confirmation",
	MODERATION = "moderation",
	SUSPENDED = "suspended",
}

export enum ERequestMethodEnum {
	GET = "GET",
	POST = "POST",
}

export enum EHashingAlgorithms {
	BLAKE2B_512 = "BLAKE2b512",
	SHA2_256 = "SHA256",
	SHA2_512 = "SHA512",
}

interface IMerchantCallbackParameters {
	method: ERequestMethodEnum;
	url: string;
}

export interface IMerchantFee {
	depositRatio: number;
	transferType: boolean;
	value: {
		deposit: number;
		transfer: number;
	};
}

export interface IMerchantCallbacks {
	fail: IMerchantCallbackParameters;
	notification: IMerchantCallbackParameters;
	success: IMerchantCallbackParameters;
}

export interface ICreate {
	host: string;
	name: string;
}
export interface IFindById {
	id: string;
}
export interface IUpdate {
	id: string;
	name: string;
}

export interface IDelete {
	id: string;
}

export interface IResponseCreate {
	createdAt: Date;
	id: string;
	status: EMerchantStatus;
	updatedAt: Date;
}

export interface IResponse extends IResponseCreate {
	balance: IMerchantBalance;
	callback: IMerchantCallbacks;
	hashingAlgorithm: EHashingAlgorithms;
	key: string;
	secret: string;
	ways: Array<IWay>;
}
