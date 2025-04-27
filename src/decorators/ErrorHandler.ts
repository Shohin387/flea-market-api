export function TryCatch(argsOut: boolean=false) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const origMethod: Function = descriptor.value

		descriptor.value = function (...args: any[]): any {
			try {
				if (argsOut) console.log(args);
				return origMethod.apply(this, args)
			} catch (error) {
				console.log('ltrjhfnjd j jj ')
				console.log(error)
				return {err: error}
			}
		}
	}
}