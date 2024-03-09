// Version: 0.0.0
export enum EDepositStatus {
	CANCELED = "canceled",
	EXPIRED = "expired",
	FAILED = "failed",
	NEW = "new",
	PAID = "paid",
	REJECTED = "rejected",
	WAITING = "waiting",
}

export interface ICreate {
	amount: number;
	customerID: string;
	description: string;
	internalID: string;
	ip: string;
	way: string;
}

export interface IResponse {
	createdAt: Date;
	id: string;
	status: EDepositStatus;
	updatedAt: Date;
}
