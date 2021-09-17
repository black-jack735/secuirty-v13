const { Client, Intents, MessageEmbed, Permissions } = require("discord.js");
const client = new Client({ intents: [ Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES,]});
const fs = require ("fs")
const ms = require("ms")

const prefix = "b!"
client.on("ready", () => console.log(`${client.user.tag} Telah Online!`));

let channelc = JSON.parse(fs.readFileSync('./channelc.json' , 'utf8'));
let channeld = JSON.parse(fs.readFileSync('./channeld.json' , 'utf8'));
let antiban = JSON.parse(fs.readFileSync('./antiban.json' , 'utf8'));
let antiroleD = JSON.parse(fs.readFileSync('./antiroleD.json' , 'utf8'));
let antiroleC = JSON.parse(fs.readFileSync('./antiroleC.json' , 'utf8'));
let antikick = JSON.parse(fs.readFileSync('./antikick.json' , 'utf8'));
client.on("ready", () => {
  console.log("ALLAH AKBAR");
  console.log("♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔");
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ");
  client.user.setPresence({ activities: [{ name: `${prefix}help | BlackJack Is best` }], status: 'dnd' });
  console.log(`Logined`);
});

var p = require("./prefix.json");
function savePrefix() {
    fs.writeFileSync("./prefix.json", JSON.stringify(p, null, 4));
}
client.on('messageCreate', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
  if (message.content.startsWith(prefix + "setprefix")) {
            if (!message.member.permissions.has('MANAGE_GUILD')) return 
    let newPrefix = message.content.split(' ').slice(1).join(" ")
    if(!newPrefix) return message.reply(`**Usage: ${prefix}setprefix <prefix>**`)
    p[message.guild.id].prefix = newPrefix
 
       let embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle(`${message.guild.name}`)
        .setDescription("**The Code SetPrefix has been Setup**")
        .addField("**Prefix**", newPrefix)
        .addField("**Moderation**", `<@${message.author.id}>`)
        .setColor("9e1c36")
        .setFooter(`${client.user.username}`)
        .setTimestamp()
        message.channel.send({ embeds: [embed]})
 
}
savePrefix()  
});
 
client.on("messageCreate", message => {  
const prefix = p[message.guild.id].prefix
  if (message.content.startsWith(prefix + "infoPrefix")) {
  let embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle(`${message.guild.name}`)
        .setDescription("**The Code SetPrefix has been Setup**")
        .addField("**Message**", prefix)
        .addField("**Moderation**", `<@${message.author.id}>`)
        .setColor("9e1c36")
        .setFooter(`${client.user.username}`)
        .setTimestamp()
        message.channel.send({ embeds: [embed]})  
  }
})

let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "tAntihack on")) {
                if(!message.channel.guild) return;
              if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")               
        antihack[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle Security is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antihack[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})       
                        fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "tAntihack off")) {
                if(!message.channel.guild) return;
          if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")
        antihack[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle Security is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antihack[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})                  
                    fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
               })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "tChannelC on")) {
                if(!message.channel.guild)
                        if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")           
        channelc[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ChannelC is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${channelc[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})       
                        fs.writeFile("./channelc.json", JSON.stringify(channelc), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "tChannelC off")) {
                if(!message.channel.guild) return;
              if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")
       channelc[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ChannelC is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${channelc[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})                  
                    fs.writeFile("./channelc.json", JSON.stringify(channelc), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "tChannelD on")) {
              if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")
                if(!message.channel.guild) return;
        channeld[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ChannelD is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${channeld[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})       
                        fs.writeFile("./channeld.json", JSON.stringify(channeld), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "tChannelD off")) {
                if(!message.channel.guild) return;
              if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")
        channeld[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ChannelD is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${channeld[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})                  
                    fs.writeFile("./channeld.json", JSON.stringify(channeld), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            }); 
                  }
        
                })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "tban on")) {
                if(!message.channel.guild) return;
              if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")
        antiban[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ban is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiban[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})       
                        fs.writeFile("./antiban.json", JSON.stringify(antiban), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "tban off")) {
              if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")
                if(!message.channel.guild) return;
        antiban[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle ban is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiban[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})                  
                    fs.writeFile("./antiban.json", JSON.stringify(antiban), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "tkick on")) {
                if(!message.channel.guild) return;
              if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")
        antikick[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle kick is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antikick[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})       
                        fs.writeFile("./antikick.json", JSON.stringify(antikick), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "tkick off")) {
                if(!message.channel.guild) return;
              if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")
        antikick[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle kick is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antikick[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})                  
                    fs.writeFile("./antikick.json", JSON.stringify(antikick), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "troleD on")) {
                if(!message.channel.guild) return;
             if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")
        antiroleD[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle roleD is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiroleD[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})       
                        fs.writeFile("./antiroleD.json", JSON.stringify(antiroleD), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "troleD off")) {
                if(!message.channel.guild) return;
              if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")
        antiroleD[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle antiRoleD is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiroleD[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})                  
                    fs.writeFile("./antiroleD.json", JSON.stringify(antiroleD), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "troleC on")) {
                if(!message.channel.guild) return;
              if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")
        antiroleC[message.guild.id] = {
        onoff: 'On',
        }
        
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle roleC is On**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiroleC[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})       
                        fs.writeFile("./antiroleC.json", JSON.stringify(antiroleC), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })
client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "troleC off")) {
                if(!message.channel.guild) return;
              if (message.author.id !== message.guild.ownerId) return message.reply("You Dont Have Owner SHIP")
        antiroleC[message.guild.id] = {
        onoff: 'Off',
        }
       let embed = new MessageEmbed()
                      .setTitle('**✅Done Check The Toggle antiRoleC is Off**')
                      .addField('Name Server', message.guild.name)
                      .addField('Toggle', `${antiroleC[message.guild.id].onoff}`)
                      .addField('By', `${message.author.username}`)
                      .setThumbnail(message.author.avatarURL())
                      .setFooter(`${client.user.username}`)                  
                     message.channel.send({embeds: [embed]})                  
                    fs.writeFile("./antiroleC.json", JSON.stringify(antiroleC), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
                  }
        
                })

let banse = new Set();
  let bane = JSON.parse(fs.readFileSync('security1.json' , 'utf8'));//require data1.json
  let data = JSON.parse(fs.readFileSync('security.json' , 'utf8'));//require data.json
  client.on('guildBanAdd', function(guild) {
    guild.fetchAuditLogs().then(logs => {
      const ser = logs.entries.first().executor;
      if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
        bans: 2
      }
      if (!antiban[guild.guild.id])
      antiban[guild.guild.id] = {
        onoff: "Off"
      };
          if (antiban[guild.guild.id].onoff === "Off") return; 
      if(antihack[guild.guild.id].onoff === 'Off') return;
      let boner = bane[ser.id+guild.id]
  banse.add(ser.id)
  boner.bans = Math.floor(boner.bans+1)
 
 
  setTimeout(() => {
    boner.bans = 2
    banse.delete(ser.id)
  },8000)
 
  if(boner.bans > 2) {
    let roles = guild.members.cache.get(ser.id).roles.array()
  guild.members.cache.get(ser.id).roles.remove(roles)
  }
 
      })
      fs.writeFile("security1.json", JSON.stringify(bane), (err) => {
  if (err) console.error(err);
  })
 
  })
client.on('guildMemberRemove', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `MEMBER_KICK`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            }; 
            if (!antikick[u.guild.id])
      antikick[u.guild.id] = {
        onoff: "Off"
      };
          if (antikick[u.guild.id].onoff === "Off") return; 
            if(antihack[u.guild.id].onoff === 'Off') return;
 
        } else {  
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
  data[ss.executor.id].time = 0
     u.guild.members.cache.get(ss.executor.id).roles.cache.forEach(r => {
                  r.edit({
                      permissions : []
                  });            
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          })
};
      });
      fs.writeFile("security.json", JSON.stringify(data) ,(err) =>{
          if (err) console.log(err.message);
      });
  });
client.on('roleDelete', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `ROLE_DELETE`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
      if (!antiroleD[u.guild.id])
      antiroleD[u.guild.id] = {
        onoff: "Off"
      };
    if (antiroleD[u.guild.id].onoff === "Off") return; 
            if(antihack[u.guild.id].onoff === 'Off') return;
 
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
 
  data[ss.executor.id].time = 0
  u.guild.members.cache.get(ss.executor.id).roles.cache.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          },60000)
      };
      });
      fs.writeFile("security.json", JSON.stringify(data) ,(err) =>{
          if (err) console.log(err.message);
      }); 
  });
 
client.on('roleCreate', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `ROLE_CREATE`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
                if (!antiroleC[u.guild.id])
      antiroleC[u.guild.id] = {
        onoff: "Off"
      };
    if (antiroleC[u.guild.id].onoff === "Off") return; 
            if(antihack[u.guild.id].onoff === 'Off') return;
 
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
 
  data[ss.executor.id].time = 0
  u.guild.members.cache.get(ss.executor.id).roles.cache.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          },60000)
      };
      });
      fs.writeFile("security.json", JSON.stringify(data) ,(err) =>{
          if (err) console.log(err.message);
      }); 
  });
 
 client.on('channelDelete', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `CHANNEL_DELETE`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
     if (!channeld[u.guild.id])
      channeld[u.guild.id] = {
        onoff: "Off"
      };
    if (channeld[u.guild.id].onoff === "Off") return; 
            if(antihack[u.guild.id].onoff === 'Off') return;
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
  data[ss.executor.id].time = 0
  u.guild.members.cache.get(ss.executor.id).roles.cache.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          })
      };
      });
      fs.writeFile("security.json", JSON.stringify(data) ,(err) =>{
          if (err) console.log(err.message);
      });
  })
client.on('channelCreate', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `CHANNEL_CREATE`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
           if (!channelc[u.guild.id])
      channelc[u.guild.id] = {
        onoff: "Off"
      };
    if (channelc[u.guild.id].onoff === "Off") return; 
            if(antihack[u.guild.id].onoff === 'Off') return;
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
  data[ss.executor.id].time = 0
  u.guild.members.cache.get(ss.executor.id).roles.cache.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          })
      };
      });
      fs.writeFile("security.json", JSON.stringify(data) ,(err) =>{
          if (err) console.log(err.message);
      });
  })


var antibots = require("./antibots.json");
function saveAbot() {
    fs.writeFileSync("./antibots.json", JSON.stringify(antibots, null, 4));
}

client.on("message", message => {
  if (message.content.startsWith(prefix + "antibots on")) {
    if (message.author.bot || !message.channel.guild) return;
    if (message.author.id !== message.guild.ownerId)return message.channel.send("**🔐 Sorry just For Owner ship**");
    antibots[message.guild.id] = {
      onoff: "on"
    };
    saveAbot()
         let embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle("Toggle Antibot")
        .setDescription("**The Anti Bots Join Is On 🔐 **")
        .addField("**By**", `<@${message.author.id}>`)
        .setColor("9e1c36")
        .setFooter(`${client.user.username}`)
        .setTimestamp()
        message.channel.send({embeds: [embed]})
  }})
client.on("message", message => {
    if(message.content.startsWith(prefix + "antibots off")) {
          if(!message.channel.guild) return;
  if (message.author.id !== message.guild.ownerId) return message.reply("Just For Owner ship")
  antibots[message.guild.id] = {
  onoff: 'Off',
  }
  saveAbot()
      let embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle("Anti Bot")
        .setDescription("**The AntiBots Join Is Off 🔐 **")
        .addField("**By**", `<@${message.author.id}>`)
        .setColor("9e1c36")
        .setFooter(`${client.user.username}`)
        .setTimestamp()
       message.channel.send(embed)
    }    
 
 })
  client.on("guildMemberAdd", member => {
    if(!antibots[member.guild.id]) antibots[member.guild.id] = {
  onoff: 'Off'
  }
    if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.kick("Anti Bots Is On✅")
  saveAbot();
  })

client.on("messageCreate", async message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix  
  if (message.content.startsWith(prefix + "help")) {
    let help = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setThumbnail(message.guild.iconURL())    
      .setDescription(`
**General Commands**
\`server,botinfo,ping,listemojis,membercount\`
**MODERATION**
\`lock,unlock,warning,warnlevel
temprole,tempmute,mute,unmute
clear,setprefix,setAfk,ban,unban,kick
roleadd,roleremove\`
**SECURITY**
toggles,infoToggles,antibots [on/off]

`);
    message.channel.send({embeds: [help]});
  }
});

client.on("messageCreate", async message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix  
  if (message.content.startsWith(prefix + "toggle")) {
          if (message.author.id !== message.guild.ownerId) return message.reply("Just For Owner ship")
    let toggle = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setThumbnail(message.guild.iconURL())    
      .setDescription(`
**SECURITY COMMANDS**
\`${prefix}tAntihack on/off
${prefix}tban on/off
${prefix}tkick on/off
${prefix}tChannelD on/off
${prefix}tChannelC on/off
${prefix}troleC on/off
${prefix}troleD on/off\`

`);
    message.channel.send({embeds: [toggle]});
  }
});

client.on("messageCreate", async message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix  
  if (message.content.startsWith(prefix + "infoToggles")) {
          if (message.author.id !== message.guild.ownerId) return message.reply("Just For Owner ship")
    let toggle = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setThumbnail(message.guild.iconURL())    
      .setDescription(`
**SECURITY COMMANDS**
**toggle ban ${antiban[message.guild.id].onoff}
toggle kick ${antikick[message.guild.id].onoff}
toggle channelc ${channelc[message.guild.id].onoff}
toggle channeld ${channeld[message.guild.id].onoff}
toggle roleD ${antiroleD[message.guild.id].onoff}
toggle roleC ${antiroleC[message.guild.id].onoff}**

`);
    message.channel.send({embeds: [toggle]});
  }
});

client.on("messageCreate", message => {
if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
  if (message.content.startsWith(prefix + "botinfo")) {
       const embed = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
       .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        .setColor("#00F0FF")
        .setTitle("INFO |__=_=__|") 
        .addField("``Channels``", `[ ${client.channels.cache.size} ]`, true)
        .addField("``Users``", `[ ${client.users.cache.size} ]`, true)
        .addField("``My Name``", `[ ${client.user.tag} ]`, true)
        .addField("``My ID``", `[ ${client.user.id} ]`, true)
        .addField("``OWNER``", `[ <@744957669164712050> ]`, true)
        .addField("``My Prefix``", `[ ${prefix} ]`, true)
        .addField("``My Language``", `[ JavaScript ]`, true)
        .addField("``Bot Version``", `[ 12.4.0 ]`, true)
      message.channel.send({ embeds: [embed] })
  }
});


client.on("messageCreate", black => {
  if(!p[black.guild.id]) p[black.guild.id] = {
    prefix: "b!"
}
const prefix = p[black.guild.id].prefix
  if (black.content.startsWith(prefix + "serverinfo")) {
    var embed = new MessageEmbed()
      .setAuthor(black.guild.name)
      .setThumbnail(black.guild.iconURL())
      .setTitle("**Info Server**")
      .addField("**Server Name:**", `${black.guild.name}`)
      .addField("**Owner Server:**", `<@${black.guild.ownerId}>`)
      .addField("**Server ID:**", `${black.guild.id}`)
      .addField("**Created:**", `${black.guild.createdAt.toLocaleString()}`)
      .addField("**Emojis**", `${black.guild.emojis.cache.size}`, true)
      .addField("**Members:**", `${black.guild.memberCount}`)
      .addField("**Channels:**", `${black.guild.channels.cache.size}`)
      .addField("**Region**:", black.guild.region || `None`)
      .addField(`**Boosts**`, `${black.guild.premiumSubscriptionCount}`, true)
      .addField("**Roles:**", ` ${black.guild.roles.cache.size}`)
      .addField("AFK Timeout", black.guild.afkTimeout / 60 + " minutes", true)
      .setFooter(`Requested | ${black.author.tag}`, black.author.avatarURL())
      .addField('**Onlines**',`${black.guild.members.cache.filter(m=>m.presenceStatus == 'online').size}`)
      .addField('**DO NOT DISTRUB**',`${black.guild.members.cache.filter(m=>m.presenceStatus == 'dnd').size}`)
      .addField('**Idle**',`${black.guild.members.cache.filter(m=>m.presenceStatus == 'idle').size}`)
      .addField('**Offlines**',`${black.guild.members.cache.filter(m=>m.presenceStatus == 'offline').size}`)
      .addField('**All Members**',`${black.guild.memberCount}`)
      .setColor("RANDOM")
      .setTimestamp();
    black.channel.send({ embeds: [embed]})
  }
});

client.on('messageCreate', async message => {
    if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
  if (message.content.startsWith(prefix + "clear")) {
if(!message.member.permissions.has("MANAGE_CHANNELS")) return;
message.channel.messages.fetch().then(messages => {
message.channel.bulkDelete(messages)
let embed = new MessageEmbed()
.setTitle(`Cleared Messages`)
.addField(`Moderation`,`<@${message.author.id}>`)
.setFooter(`Requested By | ${message.author.tag} `)
message.channel.send({ embeds: [embed]}).then(mssg => {
mssg.delete(35000)
})
})
}});      

client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "membercount")) {
let all = message.guild.memberCount
let users = message.guild.members.cache.filter(member => !member.user.bot).size
let bots = message.guild.members.cache.filter(member => member.user.bot).size
let embed = new MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setTitle("Total Member From Server")
.addField("All Member", all.toString())
.addField("Humans", users.toString())
.addField("Bots", bots.toString())
.setColor("RANDOM")
message.channel.send({embeds: [embed]})
}
});

client.on('messageCreate', message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
            if(message.content.startsWith(prefix + "")) {
}
})

client.on('messageCreate', async message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
  if (message.content.startsWith(prefix + "mute")) {
if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.reply("You Dont Have Permission `MANAGE_CHANNELS`")
 if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.reply("I Dont Have Permission `MANAGE_CHANNELS`")
var member = message.mentions.members.first()
const reason = message.content.split(" ").slice(2)
let muterole = message.guild.roles.cache.find(r => r.name === "Mute BlackJack","Muted");
if(!member) return message.reply("Member Not Founded")
    if(!muterole){
    try{
      muterole = await message.guild.roles.create({ name: "Mute BlackJack", reason: "Creating MuteRole" })    
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.permissionOverwrites.create(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  member.roles.add(muterole)
let embed = new MessageEmbed()
.setThumbnail(message.author.avatarURL())
.setTitle(`Member Has Been Muted`)
.addField(`Member Muted`, member.toString())
.addField(`Reason`, reason.toString() || `None`)
.addField(`Moderation`,`<@${message.author.id}>`)
.setFooter(`Requested By | ${message.author.tag} `)
message.channel.send({ embeds: [embed]})
} 
});
client.on('messageCreate', async message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
  if (message.content.startsWith(prefix + "unmute")) {
  if(!message.member.permissions.has("MANAGE_ROLES")) return;
  var member = message.mentions.members.first()
  let role = message.guild.roles.cache.find(r => r.name === "Mute BlackJack","Muted")
  if(!member) return (`I Cant Find The Member | *Please Mention Member For Unmute, Usage: b!unmute @BlackJack#1000**`)
  member.roles.remove(role)
  const embed = new MessageEmbed()
  .setTitle("Unmuted Member✅")
  .addField("Name Member", member.toString())
  .addField("Moderation", `<@${message.author.id}>`)
  .setFooter(`Requested By | ${message.author.tag}`)
  message.channel.send({embeds: [embed]})
  }
});
client.on("messageCreate", message => {
if (message.content.startsWith(prefix + "tempmute")) {
if (!message.member.permissions.has("MANAGE_GUILD")) return
let args = message.content.split(" ").slice(1)
let member = message.mentions.members.first() || message.guild.members.cache.get(args.id)
let muterole = message.guild.roles.cache.find(bj => bj.name === "Mute BlackJack")
if(!muterole){
    try{
      muterole = message.guild.roles.create({ name: "Mute BlackJack", reason: "Creating MuteRole" })    
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.permissionOverwrites.create(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
}
  let mutetime = args[1]
  if(!mutetime) return message.reply(`Usage: ${prefix}tempmute @Member 10s or 1h or 1d or 1y`)
  member.roles.add(muterole)
  message.channel.send(`<@${member.id}> has been Muted For ${mutetime}`)
  setTimeout(function(){
 
      member.roles.remove(muterole)
      let embed = new MessageEmbed()
      .setTitle("Tempmute is end")
      .setColor("RANDOM")
      .addField("Member UnMuted", member.toString())
      .addField("Moderation", `<@${message.author.id}>`)
      message.channel.send({embeds: [embed]})
    }, ms(mutetime))  
}
});

client.on("messageCreate", message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
if(message.content.startsWith(prefix + "roleadd")) {
if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("You dont Have Permission `MANAGE ROLES`")
if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.reply("I dont Have Permission `MANAGE ROLES`")
let args = message.content.split(" ").slice(1)
let member = message.mentions.members.first()
let role = message.guild.roles.cache.find(r => r.name === args[0]) || message.mentions.roles.first()
if(!args) return message.channel.send("Please Tag Member And Mention role for Adding Role")
if(!member) return message.reply("Member is Not Founded")
if(!role) return message.reply("Role Is not founded")
member.roles.add(role)
let embed = new MessageEmbed()
.setTitle("Done Role is Add")
.addField("Moderation", `<@${message.author.id}>`)
.addField("Member", member.toString())
.addField("Role", role.toString())
message.channel.send({embeds: [embed]})
}
});
client.on("messageCreate", message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
if(message.content.startsWith(prefix + "roleremove")) {
if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("You dont Have Permission `MANAGE ROLES`")
if(!message.guild.me.permissions.has("MANAGE_ROLES")) return message.reply("I dont Have Permission `MANAGE ROLES`")
let args = message.content.split(" ").slice(1)
let member = message.mentions.members.first()
let role = message.guild.roles.cache.find(r => r.name === args[0]) || message.mentions.roles.first()
if(!args) return message.channel.send("Please Tag Member And Mention role for Removing Role")
if(!member) return message.reply("Member is Not Founded")
if(!role) return message.reply("Role Is not founded")
member.roles.remove(role)
let embed = new MessageEmbed()
.setTitle("Done Role is Remove")
.addField("Moderation", `<@${message.author.id}>`)
.addField("Member", member.toString())
.addField("Role", role.toString())
message.channel.send({embeds: [embed]})
}
});


client.on('messageCreate', async message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
  if (message.content.startsWith(prefix + "lock")) {
    if (!message.member.permissions.has("MANAGE_CHANNELS")) return
      return message.channel.send("**Please Check Your Permissions**");
    message.channel.permissionOverwrites.create(message.guild.id, { SEND_MESSAGES: false })
    .then(() => {
        const embed = new MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("LOCKED CHANNEL")
          .addField("Guild name", message.guild.name)
          .addField("Channel", `${message.channel.name}`)
          .addField("By", `<@${message.author.id}>`, true)
          .setColor("RANDOM")
        message.channel.send({ embeds: [embed]})
      });
  }
})
  client.on('messageCreate', async message => {
    if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
 const prefix = p[message.guild.id].prefix   
  if (message.content.startsWith(prefix + "unlock")) { 
        if (!message.member.permissions.has("MANAGE_CHANNELS")) return
    message.channel.permissionOverwrites.create(message.guild.id, { SEND_MESSAGES: true })
    .then(() => {
        const embed = new MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle("UNLOCKED CHANNEL")
          .addField("Guild name", message.guild.name)
          .addField("Channel", `${message.channel.name}`)
          .addField("By", `<@${message.author.id}>`, true)
          .setColor("RANDOM")
        message.channel.send({ embeds: [embed]})
      });
  }
});
client.on("messageCreate", message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
if (message.content.startsWith(prefix + "ban")) {
if (!message.member.permissions.has("BAN_MEMBERS")) return
let args = message.content.split(" ").slice(1)
let Member = message.mentions.users.first() || message.guild.members.cache.get(args.id)
var Reason = message.content.split(" ").slice(2).join(" ")
if(!args) return message.reply("**Please Mention Member Or Id Member**")
if(!Member) return message.reply("Icant find Member")
message.guild.members.ban(Member,{reason: [Reason]})
let embed = new MessageEmbed()
.setTitle("Banned From The Server✅")
.addField("Member Banned", Member.toString())
.addField("Moderation", message.author.tag)
.addField("Reason", Reason.toString() || `None`)
.setFooter(`Requested By | ${message.author.tag}`)
message.channel.send({ embeds: [embed] })
}
});
client.on("messageCreate", message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
if (message.content.startsWith(prefix + "kick")) {
if (!message.member.permissions.has("BAN_MEMBERS")) return
let args = message.content.split(" ").slice(1)
let Member = message.mentions.users.first() || message.guild.members.cache.get(args.id)
var Reason = message.content.split(" ").slice(2).join(" ")
if(!args) return message.reply("**Please Mention Member Or Id Member**")
if(!Member) return message.reply("Icant find Member")
message.guild.members.ban(Member,{reason: [Reason]})
let embed = new MessageEmbed()
.setTitle("Kicked From The Server✅")
.addField("Member Kicked", Member.toString())
.addField("Moderation", message.author.tag)
.addField("Reason", Reason.toString() || `None`)
.setFooter(`Requested By | ${message.author.tag}`)
message.channel.send({ embeds: [embed] })
}
});

var warns = require("./warning.json");
function saveWarning() {
    fs.writeFileSync("./warning.json", JSON.stringify(warns, null, 4));
}
client.on("messageCreate", message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
if (message.content.startsWith(prefix + "warning")) {
if (!message.member.permissions.has("MANAGE_GUILD")) return
let user = message.mentions.members.first()
let reason = message.content.split(" ").slice(2)
if(!user) return message.reply("Mn natwanm aw kasa bdozmawa")
if(!reason) return message.reply("Tkaya Hokarek bnwsa")
if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };
  warns[user.id].warns++;  
saveWarning()
let embed = new MessageEmbed()
.setTitle("Done Warned✅")
.addField("Member", user.toString())
.addField("Moderation", message.author.tag)
.addField("Reason", reason.toString())
message.channel.send({embeds: [embed]})
  
if(warns[user.id].warns == 2){
let muterole = message.guild.roles.cache.find(c => c.name === "Muted")
let mutetime = "58s"
user.roles.add(muterole)
message.channel.send("Done Have Been Muted")
setTimeout(function(){
 
      user.roles.remove(muterole)
      message.reply(`<@${user.id}> has been unmuted.`)
 
    }, ms(mutetime))  
  
if(warns[user.id].warns == 3){
message.guild.members.ban(user,{reason: [reason]})
message.reply("Band Kra Bahoy Hala Krdn 3 jar")
saveWarning()
}
}}
});
client.on("messageCreate", message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
  }
const prefix = p[message.guild.id].prefix
if (message.content.startsWith(prefix + "warnlevel")) {
let user = message.mentions.members.first()
if(!user) return message.reply("I cant Find Member")
if(!warns[user.id]) warns[user.id] = {
      warns: 0
    };
 const embed = new MessageEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Action:', 'Warn Check')
    .addField('User:', user.toString())
    .addField('Number of warnings:', warns[user.id].warns.toString())
    message.channel.send({embeds: [embed]}) 
}
});
  
client.on("messageCreate", message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix
if (message.content.startsWith(prefix + "temprole")) {
if (!message.member.permissions.has("MANAGE_GUILD")) return
let args = message.content.split(" ").slice(2)
let member = message.mentions.members.first() || message.guild.members.cache.get(args)
let role = message.guild.roles.cache.find(bj => bj.name === args[0]) || message.mentions.roles.first()
if(!role) return message.reply("Role Not Founded")
let mutetime = args[1]
if(!mutetime) return message.reply(`Usage: ${prefix}tempmute @Member 10s or 1h or 1d or 1y`)
  member.roles.add(role)
  message.channel.send(`<@${member.id}> Done Has been RoleAdd ${role} ${mutetime}`)
  setTimeout(function(){
 
      member.roles.remove(role)
      let embed = new MessageEmbed()
      .setTitle("Temprole is end")
      .addField("Member UnMuted", member.toString())
      .addField("Moderation", `<@${message.author.id}>`)
      .addField("Role", role.toString())
      message.channel.send({embeds: [embed]})
    }, ms(mutetime))  
}
});

client.on("messageCreate", message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix 
  if (message.content.startsWith(prefix + "unban")) {
  let args = message.content.split(" ").slice(1)
  if(!args) return message.reply("Please Mention Member Or Id")
  var Member = message.mentions.users.first() || message.guild.members.cache.get(args.id)
  message.guild.bans.fetch().then(bans => {
            var Unban = bans.find(m => m.id === args[1]);
            if(!Unban) return message.channel.send(`:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`);
            message.guild.members.unban(Member)
            message.channel.send(`:white_check_mark: Successfully UNBANNED ${args} From the server!`);
  })
}})

client.on("messageCreate", message => {
  if(!p[message.guild.id]) p[message.guild.id] = {
    prefix: "b!"
}
const prefix = p[message.guild.id].prefix 
  if (message.content.startsWith(prefix + "setAfk")) {
  if(!message.member.permissions.has("MANAGE_GUILD")) return
  let args = message.content.split(" ").slice(1)
  let channel = message.guild.channels.cache.find(c=> c.name === args[0])
  if(!args) return message.reply("Please Write Name Channel Voice To Setup")
  if(!channel) return message.reply("Channel not Founded")
  message.guild.setAFKChannel(channel)
  let embed = new MessageEmbed()
  .setTitle("Done Setup Channel Afk")
  .addField("Moderation", `<@${message.author.id}>`)
  .addField("Channel Afk", args.toString())
  .setFooter(`Requested By | ${message.author.tag}`)
  message.channel.send({embeds: [embed]})
  } 
});




client.login("ODg3MDE0NzMyMDQ3OTkwODA0.YT9-2A.Izwr3NfjVpwJnQzLDLxIae3eDmw")
