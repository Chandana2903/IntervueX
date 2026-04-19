import { StreamChat } from "stream-chat"
import {ENV} from "./env.js"

const apiKey=ENV.STREAM_API_KEY
const apiSecret=ENV.STREAM_API_SECRET

if(!apiKey||!apiSecret){
    console.error("Stream Api or Strem secret key is missing")
}

export const chatClient=StreamChat.getInstance(apiKey,apiSecret);

export const upperStreamUser = async (userData) => {
    try {
        console.log("➡️ Sending to Stream:", userData);

        const res = await chatClient.upsertUser(userData);

        console.log("✅ Stream response:", res);
    }
    catch(error){
        console.error("❌ FULL Stream Error:", error);
        throw error; // IMPORTANT (don’t hide error)
    }
}

export const deleteStreamUser=async(userId)=>{
    try{
        await chatClient.deleteUser(userId)
        console.log("stream user deleted successfully",userId)
    }
    catch(error){
        console.error("Error deleting stream user:",error);
    }
}