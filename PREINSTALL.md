> [!WARNING]
> **Firebase Extensions are deprecated and will shut down on March 31, 2027. No publisher-authored Function Kit replacement is available for this extension.**
>
> - Function Kits (the replacement for Extensions) are built on **2nd gen (v2) Cloud Functions**.
> - This extension uses the Auth `onCreate` trigger (`functions.auth.user().onCreate`), which is a **1st gen (v1)** trigger.
> - **v2 has no production-ready equivalent yet.** The v2 `onUserCreated` trigger is still in beta/preview and Firebase says not to use it in production, so this extension cannot become a Function Kit for now.
>
> If you need this behaviour going forward, write your own function. The stable v2 option is the `beforeUserCreated` blocking function, which requires Firebase Authentication with Identity Platform.

Use this extension to send a message to a telegram bot once a new user is created.

This extension is triggered when a new user is successfully created.

When you configure this extension, you’ll need to supply your **Telegram token and Chat ID.**

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

## Billing

This extension uses other Firebase or Google Cloud Platform services which may have associated charges:

- Cloud Functions

When you use Firebase Extensions, you're only charged for the underlying resources that you use. A paid-tier billing plan is only required if the extension uses a service that requires a paid-tier plan, for example calling to a Google Cloud Platform API or making outbound network requests to non-Google services. All Firebase services offer a free tier of usage. [Learn more about Firebase billing.](https://firebase.google.com/pricing)