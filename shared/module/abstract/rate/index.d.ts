// Version: 1.0.0

export declare namespace AbstractRate {
	namespace AbstractRate {
		// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
		export interface IAbstractRate {
			[code: string]: number;
		}

		export interface IAbstractRateGetSimpleListProperties {
			base: string;
			target?: string;
		}

		export interface IAbstractRateGetSimpleListRequestProperties {
			api_key: string;
			base: string;
			target?: string;
		}

		export interface IAbstractRateGetSimpleListResponseResult {
			base: string;
			exchange_rates: Array<IAbstractRate>;
			last_updated: number;
		}
	}
}
