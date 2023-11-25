const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
	await new Promise((res) => {
		setTimeout(res, 800);
	});
	next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
	try {
		const { username, password } = req.body;
		const database = JSON.parse(
			fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf8'),
		);
		const { users = [] } = database;

		const userFromBd = users.find(
			(user) => user.username === username && user.password === password,
		);

		if (userFromBd) {
			return res.json(userFromBd);
		}

		return res.status(403).json({ message: 'User not found' });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: error.message });
	}
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({ message: 'AUTH ERROR' });
	}

	next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
	console.log('server is running on 8000 port');
});