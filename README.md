# Send Message to Telegram

**Author**: Mark Munene (**[https://github.com/marknesh](https://github.com/marknesh)**)

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

**Cloud Functions:**

- **sendMessage:** Sends a message to the telegram bot.
