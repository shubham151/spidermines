// chatController.js
const chatService = require('../services/chatService');

const createChat = async (req, res) => {
  const { message, senderId, receiverId } = req.body;

  try {
    const newChat = await chatService.createChat(message, senderId, receiverId);
    res.json(newChat);
  } catch (error) {
    console.error('Error creating chat:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const getChats = async (req, res) => {
  try {
    const chats = await chatService.getChats();
    res.json(chats);
  } catch (error) {
    console.error('Error fetching chats:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

const getChatsForUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const chats = await chatService.getChatsForUser(userId);
    res.json(chats);
  } catch (error) {
    console.error('Error fetching chats for user:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { createChat, getChats, getChatsForUser };
