require('dotenv').config();

const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    checkUpdate: false,  
    ws: { properties: { $browser: "Discord Client" } } 
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);

    const guildId = '1109636583642103903'; 
    const voiceChannelId = '1265427135774851244';  

    const guild = client.guilds.cache.get(guildId);
    const voiceChannel = guild.channels.cache.get(voiceChannelId);

    if (voiceChannel && voiceChannel.isVoice()) {
        joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator,
            selfMute: false,  
            selfDeaf: false   
        });
        console.log(`Joined voice channel: ${voiceChannel.name} without mute or deafen`);
    } else {
        console.error('Voice channel not found or invalid.');
    }
});

client.login(process.env.DISCORD_TOKEN); 
