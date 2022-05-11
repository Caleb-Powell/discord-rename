const { Client, Intents } = require("discord.js");
const NamePicker = require("./namePicker/namePicker");
const RegisterComands = require("./register/register")
const config = require("./config.json");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "changename") {
    let name = NamePicker.getName(config.names);
    interaction.member.setNickname(name);
    interaction.reply(`Name changed to ${name}`);
  }

  if (commandName === "ping") {
    interaction.reply("pong bitch");
  }
});

client.on("guildCreate", async (guild) => {
  RegisterComands.registerCommands(guild.id, config.commands)
})

client.login(config.token);
