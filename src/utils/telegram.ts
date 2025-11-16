export const sendTelegramMessage = async (message: string): Promise<boolean> => {
  try {
    // In development, use production URL if available, otherwise mock
    // In production, use relative path which Vercel will route correctly
    const apiUrl = import.meta.env.DEV 
      ? (import.meta.env.VITE_API_URL || 'https://tradehut-2-0-g6uomcg4e-ellis-ayikweis-projects.vercel.app/api/sendMessage')
      : '/api/sendMessage';
    
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.ok === true;
  } catch (error) {
    // In development, if API fails, log warning but return success for testing
    if (import.meta.env.DEV) {
      console.warn("⚠️ Telegram API not available in development. Message would be sent in production:", message);
      // Return true in dev to allow testing UI without breaking
      return true;
    }
    console.error("Error sending Telegram message:", error);
    return false;
  }
};

