// Version: 1.0.0

import { Api } from "../api";

export declare namespace Proxy {
	import IApiListRequestProperties = Api.IApiListRequestProperties;

	export interface IProxy {
		country: string;
		ip: string;
		password: string;
		port: number;
		username: string;
	}

	export interface IProxyGetListProperties extends IApiListRequestProperties {
		country?: string;
	}
}
