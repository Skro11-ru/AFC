import { classNames } from '@src/7.shared/lib/classNames/classNames';

describe('classNames', () => {
	test('with only one param', () => {
		expect(classNames(['someClass'])).toBe('someClass');
	});
	test('with some params', () => {
		const expected = 'someClass testClass superClass';
		expect(classNames([expected])).toBe('someClass testClass superClass');
	});
	test('with mods', () => {
		const expected = 'someClass hovered active';
		expect(classNames(['someClass'], { hovered: true, active: true })).toBe(
			expected,
		);
	});

	test('with mods false', () => {
		const expected = 'someClass hovered';
		expect(classNames(['someClass'], { hovered: true, active: false })).toBe(
			expected,
		);
	});

	test('with mods undefined', () => {
		const expected = 'someClass hovered';
		expect(
			classNames(['someClass'], {
				hovered: true,
				active: false,
				// @ts-ignore
				disabled: undefined,
			}),
		).toBe(expected);
	});
});
