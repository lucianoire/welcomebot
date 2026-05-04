const { Client, GatewayIntentBits, MessageFlags } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

// ✅ WELCOME CHANNEL (dito lalabas message)
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
        type: 17, // Container (box)
        components: [
          {
            type: 9, // Section (text + side image)
            components: [
              {
                type: 10,
                content:
`_ _
_ _            heℓℓo there   ✿    ${member} !
_ _`
              }
            ],
            accessory: {
              type: 11, // side image
              media: {
                url: "https://cdn.discordapp.com/attachments/1480096108410568785/1500511013831966951/dollEmoji.gif"
              }
            }
          },

          { type: 14 }, // gray thin line (divider)

          {
            type: 10,
            content:
`_ _    <a:cutesy_1:1500496943787544637>.  weℓcome to ℓuciα noire  ˚ ︵`
          },

          { type: 14 }, // gray thin line (divider)

          {
            type: 1, // button row (nasa baba ng box)
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

// 🔑 Railway TOKEN
client.login(process.env.TOKEN);
