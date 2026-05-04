const { Client, GatewayIntentBits, MessageFlags } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const WELCOME_CHANNEL_ID = "1455623211831267359";

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", async (member) => {
  const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
  if (!channel) return;

  await channel.send({
    flags: MessageFlags.IsComponentsV2,
    components: [
      {
        type: 17, // BOX
        components: [
          {
            type: 9,
            components: [
              {
                type: 10,
                content:
`_ _
_ _          heℓℓo there   ✿    ${member} !
_ _                  <:line_1:1500846098082824273><:line_1:1500846098082824273><:line_1:1500846098082824273><:line_1:1500846098082824273><:line_1:1500846098082824273>
_ _  <a:cutesy_1:1500496943787544637>.  weℓcome to ℓuciα noire  ˚ ︵`
              }
            ],
            accessory: {
              type: 11,
              media: {
                url: "https://cdn.discordapp.com/attachments/1480096108410568785/1500511013831966951/dollEmoji.gif"
              }
            }
          },

          { type: 14 }, // 👈 ISANG DIVIDER LANG (dito na lang sa baba)
          
          {
            type: 1, // 👈 BUTTON (HINDI NA BINAGO POSISYON)
            components: [
              {
                type: 2,
                style: 5,
                label: "verify",
                emoji: {
                  id: "1500508074606329946",
                  name: "crown_1",
                  animated: true
                },
                url: "https://discord.com/channels/1455613450935079109/1456606731240083476"
              }
            ]
          }
        ]
      }
    ]
  });
});

client.login(process.env.TOKEN);
