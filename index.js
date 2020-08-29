const Discord = require("discord.js");
const client = new Discord.Client();
var colors = require('colors');
const setTitle = require('node-bash-title');
const logs = require("discord-logs")
logs(client);
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

colors.setTheme({
    info: 'green',
    clime: 'blue',
    error: `red`,
    yellow: "yellow"
});
console.clear();
setTitle("Message Logger by clout")
rl.question('What is your discord token? ', (answer) => {
   const token = answer
{

client.on("ready", () => {
    console.clear();
    setTitle("Message Logger by clout")
    console.log(`Logging started!`.yellow);
    console.log("");
    console.log("");
    console.log("");

});

client.on("messageContentEdited", (message, oldContent, newContent) => {
    if(message.author.bot) return;
    console.log(`Message by ${message.author.tag} edited in ${message.guild.name} | "${oldContent}" -> "${newContent}"`.info);
    console.log("");

});

client.on("messageDelete", async(message) => {
if(message.author.bot) return;
console.log(`Message by ${message.author.tag} in ${message.guild.name} deleted: "${message}" `.error);
console.log("");
});

client.login(token);
}});

