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
_ _  <a:cutesy_1:1500496943787544637>.  weℓcome to ℓuciα noire  ˚ ︵
_ _`
              }
            ],
            accessory: {
              type: 11,
              media: {
                url: "https://cdn.discordapp.com/attachments/1480096108410568785/1500511013831966951/dollEmoji.gif"
              }
            }
          },

          { type: 14 }, // 👈 gray thin line (mahaba)

          {
            type: 1, // 👈 VERIFY BUTTON (same position, hindi ginalaw)
            components: [
              {
                type: 2,
                style: 2, // 👈 button lang (walang link)
                label: "verify",
                emoji: {
                  id: "1500855939002142867",
                  name: "bow_1",
                  animated: true
                },
                custom_id: "verify_button"
              }
            ]
          }
        ]
      }
    ]
  });
});

client.login(process.env.TOKEN);
