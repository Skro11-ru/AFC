/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'node:path';

export default {
	globals: {
		__IS_DEV__: true,
	},
	rootDir: '../../',
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['/node_modules/'],
	moduleDirectories: ['node_modules'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
	moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
		'@src/(.*)': '<rootDir>/src/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
};
