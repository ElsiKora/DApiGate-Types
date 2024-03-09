// Version: 0.0.0
export interface ICreate {
	wallet: number;
}

/**
 * this type for confirmation (check sms validation)
 */
export interface IPatch {
	code: number;
	confirmationId: string;
}

/**
 * this type for refresh token
 */
export interface IUpdate {
	refreshToken: string;
}

/**
 * this type for response confirmation (check sms validation)
 */

export interface IResponsePatch {
	confirmation: string;
	refreshIn: Date;
}

/**
 * this type for response 200ok auth
 */
export interface IResponseCreate {
	expiresIn: number;
	refreshToken: string;
	token: string;
}
