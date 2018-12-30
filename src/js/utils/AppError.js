
export class AppError extends Error {
	constructor(code, ...params) {
		super(code, ...params);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}

		/**
		 * @type {string}
		 */
		this.code = code;

		/**
		 * @type {Array<*>}
		 */
		this.data = params;
	}

	toString() {
		return `AppError: ${JSON.stringify(this)}`;
	}
}
