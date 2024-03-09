// Version: 0.0.0
export interface ICreate {
	code: string;
}
export interface IFindById {
	id: string;
}

export interface IUpdate {
	code: string;
	id: string;
}

export interface IDelete {
	id: string;
}

export interface IResponse {
	code: string;
	createdAt: Date;
	id: string;
	updatedAt: Date;
}
