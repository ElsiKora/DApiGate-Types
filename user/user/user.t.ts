// Version: 0.0.0
import type { IResponse as UserBalance } from "../balance/balance.t";

export interface IPatch {
	name: string;
	refreshToken?: string;
}

export interface IResponse {
	balance: UserBalance;
	createdAt: Date;
	id: string;
	name: string;
	updatedAt: Date;
	wallet: number;
}
