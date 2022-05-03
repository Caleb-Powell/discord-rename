require('dotenv/config') 
const {Client, Intents} = require("discord.js")
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("interactionCreate", async interaction => {
    if (!interaction.isCommand()) return

    const { commandName } = interaction

    if(commandName === "ping") {
        interaction.member.setNickname("poopybutt")
        interaction.reply("Name changed to poopybutt")
    }
})

client.login(process.env.TOKEN) 