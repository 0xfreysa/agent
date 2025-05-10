"node-telegram
 = process.env.TELEGRAM_BOT_TOKEN;
= process.env.TELEGRAM_CHANNEL_ID;

TelegramBot

ebroadcastTelegram(message: string) {
  
    bot.sendMessage(channelId, message);
    {

  
      success: true,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    return {
      success: false,
      error: "Failed to send message",
    };
  }
}
