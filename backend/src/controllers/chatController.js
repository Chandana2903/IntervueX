import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req, res) {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const token = chatClient.createToken(req.user.clerkId);

        res.status(200).json({
            token,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage: req.user.profileImage, // FIXED
        });
    }
    catch (e) {
        console.error("Token error:", e);
        res.status(500).json({ message: "Internal server error" });
    }
}