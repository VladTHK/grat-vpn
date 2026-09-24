export const config = {
    BOT_TOKEN: process.env.BOT_TOKEN as string
}

if (!config.BOT_TOKEN) {
    throw new Error(".env is empty")
}