const { Client } = require('discord.js')
const express = require('express');
const app = express();
const client = new Client({ intents: 53608447}) 
app.get('/', (req, res) => {
  res.send('Hello Express app!')
})

app.use('/ping', (req, res) => {
  res.send(new Date());
});

app.listen(3000, () => {
  console.log('Express is ready.')
});
let autotax = ['1037441579432030229'];

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return

if(autotax.includes(message.channel.id)){

  var args = message.content.split(' ').slice(0).join(' ')
if(!args) return;

if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;
else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;
else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;
else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))

    let embed = new MessageEmbed()

.setAuthor(`TAX CALCULATOR`, client.user.avatarURL({ dynamic: true }))

   .setThumbnail(client.user.avatarURL({ dynamic: true }))   

.addFields([
    {
    name: `Amount: `,
    value: `${tax}`
},
  {
    name: `Tax: `, 
    value: `${tax2}`
  }
])
        .setColor(message.guild.me.displayColor)
  .setTimestamp()

   message.reply({embeds: [embed]}).catch((err) => {
   console.log(err.message)
   });    
  }
}); 
chalk 
client.login("MTI2NjU0MTMzNTA5MjAwNjk1Mw.G1Sm1H.FydpsIFSfEHW2Qoc6GINS6LxwaXHiDoDNzfi8o");
