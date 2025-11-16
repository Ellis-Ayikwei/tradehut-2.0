export const sendTelegramMessage = async (message: string): Promise<boolean> => {
  try {
    const response = await fetch("/api/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    return data.ok === true;
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    return false;
  }
};

