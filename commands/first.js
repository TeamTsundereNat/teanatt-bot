const { SlashCommandBuilder, User } = require('discord.js');
const user = require('./user');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('first')
		.setDescription('first here'),
	async execute(interaction) { 
		return interaction.reply('congratz you are first !!');
	},
};