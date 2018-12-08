const fs = require('fs');

module.exports = {
	devServer: {
		host: 'myname.l',
		https: {
			key: fs.readFileSync('./ssl/myname.l.key', { encoding: 'utf8' }),
			cert: fs.readFileSync('./ssl/myname.l.pem', { encoding: 'utf8' }),
		},
	},
};