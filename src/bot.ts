import { Bot } from "gramio";
import { config } from "./config";
import { registerCommands } from "./handler/commands.handler";
import { composer } from "./plugins/main.composer";

registerCommands(composer)

export function initBot() {
    const bot = new Bot(config.BOT_TOKEN)
        .extend(composer)

    bot.start()
}