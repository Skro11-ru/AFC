type Mods = Record<string, boolean | string>;

export const classNames = (classes: string[], mods?: Mods): string => [
		...classes,
		...Object.entries(mods || {})
			.filter(([_, value]) => Boolean(value))
			.map(([className]) => className),
	].join(' ');
