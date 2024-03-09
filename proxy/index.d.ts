// Version: 1.0.0

import type * as Api from "./api";

export declare namespace Proxy {
	export default interface IProxy {
		country: string;
		ip: string;
		password: string;
		port: number;
		username: string;
	}

	export interface IProxyGetListProperties extends Api.IApiListRequestProperties {
		country?: string;
	}
}
