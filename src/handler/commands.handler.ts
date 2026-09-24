import type { BotType } from "../plugins/main.composer";

export function registerCommands(bot: BotType) {
    bot.command("start", (ctx) => {
        return ctx.send("Привет, это тестовая команда!")
    });
}