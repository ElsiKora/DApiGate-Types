// Version: 1.0.0

export declare namespace Phone {
	export interface IPhone {
		carrier: null | string;
		country: null | string;
		isValid: boolean;
		phone: string;
	}

	export interface IPhoneGetProperties {
		phone: number;
	}
}
