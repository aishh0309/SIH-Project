const asynchandler = require('express-async-handler');
const Chat = require('../Models/Chat');
const Message = require('../Models/Message');
const User = require('../Models/Users');

const sendMessage = asynchandler(async (req,res)=>{
//chatid 
//message
//sender

const {content , chatId }= req.body;

    if(!content||!chatId){
        console.log("Invalid data passed")
       return res.sendstatus(400)
    }
    // console.log(req)

    var newMessage = {
        sender : req.user._id,
        content : content , 
        chat: chatId
    }

    try {
        var message = await Message.create(newMessage)

        message = await message.populate("sender"," name pic");
        message = await message.populate("chat");
        message = await User.populate(message,{
            path : 'chat.users',
            select: "name pic email"
        });

        await Chat.findByIdAndUpdate(req.body.chatId ,{
            latestMessage : message,    
        })

        res.json(message)
    } catch (error) {
        res.status(400)
        return new Error(error.message)
        
    }

})

module.exports = {sendMessage}