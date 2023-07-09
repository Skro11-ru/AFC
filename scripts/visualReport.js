const { promisify } = require('util');
const { readdir, writeFile } = require('fs');
const { join: joinPath, relative } = require('path');

const asyncReaddir = promisify(readdir);
const writeFileAsync = promisify(writeFile);

const lokiDirectory = joinPath(__dirname, '..', '.loki');
const actualDirectory = joinPath(lokiDirectory, 'current');
const expectedDirectory = joinPath(lokiDirectory, 'reference');
const diffDirectory = joinPath(lokiDirectory, 'difference');

(async function main() {
	const diffs = await asyncReaddir(diffDirectory);

	await writeFileAsync(
		joinPath(lokiDirectory, 'report.json'),
		JSON.stringify({
			newItems: [],
			deletedItems: [],
			passedItems: [],
			failedItems: diffs,
			expectedItems: diffs,
			actualItems: diffs,
			diffItems: diffs,
			actualDir: relative(lokiDirectory, actualDirectory),
			expectedDir: relative(lokiDirectory, expectedDirectory),
			diffDir: relative(lokiDirectory, diffDirectory),
		}),
	);
})();
