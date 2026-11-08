# Send Message to Telegram

**Author**: Mark Munene (**[https://github.com/marknesh](https://github.com/marknesh)**)

> [!WARNING]
> **Firebase Extensions are deprecated and will shut down on March 31, 2027. No publisher-authored Function Kit replacement is available for this extension.**
>
> - Function Kits (the replacement for Extensions) are built on **2nd gen (v2) Cloud Functions**.
> - This extension uses the Auth `onCreate` trigger (`functions.auth.user().onCreate`), which is a **1st gen (v1)** trigger.
> - **v2 has no production-ready equivalent yet.** The v2 `onUserCreated` trigger is still in beta/preview and Firebase says not to use it in production, so this extension cannot become a Function Kit for now.
>
> If you need this behaviour going forward, write your own function. The stable v2 option is the `beforeUserCreated` blocking function, which requires Firebase Authentication with Identity Platform.

**Description**: Sends a message to your telegram bot once a new user is created.

**Details**: Use this extension to send instant notifications to a telegram bot which notifies you when a new user is created.

### Billing

This extension uses other Firebase or Google Cloud Platform services which may have associated charges:

- Cloud Functions

To install an extension, your project must be on the [Blaze (pay as you go) plan](https://firebase.google.com/pricing)



**Configuration Parameters:**

- TELEGRAM_BOT_TOKEN: The unique authentication token assigned to your Telegram bot by the BotFather.

- TELEGRAM_CHAT_ID: The telegram chat ID.

- TELEGRAM_MESSAGE: The message to send to the telegram bot.This field is optional.

## How to get your Telegram bot token and chat ID

### 1. Create a bot with BotFather

1. Open Telegram and search for [@BotFather](https://t.me/BotFather).
2. Start a chat and send `/newbot`.
3. Follow the prompts to choose a display name and a username (the username must end in `bot`).
4. BotFather will reply with your bot token. It looks like:
  `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`

Save this token — you’ll use it as **TELEGRAM_BOT_TOKEN** when configuring the extension.

### 2. Get your chat ID with getUpdates

1. Open a chat with your new bot and send it any message (for example: `hello`).
2. In a browser, open:
  `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   Replace `<YOUR_BOT_TOKEN>` with the token from BotFather.

In the JSON response, find `"chat":{"id": ... }`. That number is your chat ID.

Use that `id` value as **TELEGRAM_CHAT_ID** when configuring the extension.

If `result` is empty (`[]`), send another message to the bot and refresh the URL.

**Cloud Functions:**

- **sendMessage:** Sends a message to the telegram bot.
