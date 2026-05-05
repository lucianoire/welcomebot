const { Client, GatewayIntentBits, MessageFlags } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const WELCOME_CHANNEL_ID = "1501118790577164348";

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
_ _                  <:line_001:1501138510474903602><:line_001:1501138510474903602><:line_001:1501138510474903602><:line_001:1501138510474903602><:line_001:1501138510474903602>
_ _  <a:aaa_1:1501121970228432936>.  weℓcome to ℓuciα noire  ˚ ︵
_ _`
              }
            ],
            accessory: {
              type: 11,
              media: {
                url: "https://cdn.discordapp.com/attachments/1501109360473149522/1501144891655454800/dollEmoji.gif"
              }
            }
          },

          { type: 14 }, // divider (same place)

          {
            type: 1, // BUTTON ROW (HINDI GINALAW)
            components: [
              {
                type: 2,
                style: 5,
                label: "verify",
                emoji: {
                  id: "1501122940723396730",
                  name: "crown_1",
                  animated: true
                },
                url: "https://discord.com/channels/1455613450935079109/1501109330437476372"
              },
              {
                type: 2,
                style: 2,
                label: " ",
                emoji: {
                  id: "1501141865905258527",
                  name: "cutesy_001",
                  animated: false
                },
                custom_id: "emoji_button"
              }
            ]
          }
        ]
      }
    ]
  });
});

client.login(process.env.TOKEN);
