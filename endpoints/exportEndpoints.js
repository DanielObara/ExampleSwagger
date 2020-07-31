const listAllPlaylists = require('./playlists/listAll.js');
const listOnePlaylist = require('./playlists/listOnePlaylist')
const login = require('./authenticator/login');

module.exports = {
	listOnePlaylist,
	listAllPlaylists,
	login
}

