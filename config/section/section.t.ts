// Version: 0.0.0
export interface ICreate {
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

export interface IResponse {
	createdAt: Date;
	id: string;
	name: string;
	updatedAt: Date;
}
