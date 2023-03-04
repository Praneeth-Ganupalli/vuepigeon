import { createStore } from "vuex";
const store=createStore({
    state:{
        appTitle:"Inbox",
        messages:[],
        displayedMessages:[]
    },
    mutations:{
        setAppTitle(state,data)
        {
            state.appTitle=data;
        },
        setMessages(state,data)
        {
            state.messages=data
            state.messages.forEach((ms,idx)=>{
                ms.id=idx+ms.subject;
            })
        },
        setImportantMessages(state)
        {
            state.displayedMessages=state.messages.filter(msg=>msg.isImportant && !msg.isDeleted)
        },
        setInboxMessages(state)
        {
            state.displayedMessages=state.messages.filter(msg=>!msg.isDeleted && msg.type==="incoming");
        },
        setDeletedmessages(state)
        {
            state.displayedMessages=state.messages.filter(msg=>msg.isDeleted);
        },
        setOutGoingMessages(state)
        {
            state.displayedMessages=state.messages.filter(msg=>msg.type!=="incoming");
        },
        toggleImportantMark(state,data)
        {
           const exIdex=state.messages.findIndex(msg=>msg.id===data.id && msg.subject===data.subject && msg.content===data.content);
           if(exIdex>-1)
           {
                state.messages[exIdex].isImportant=!state.messages[exIdex].isImportant
           }
           if(state.appTitle==="Important")
           {
            state.displayedMessages=state.messages.filter(msg=>msg.isImportant && !msg.isDeleted)
           }
        },
        updateSentMail(state,data)
        {
            state.messages=[...state.messages,data];
            if(state.appTitle==="Sent")
            {
                state.displayedMessages=[...state.displayedMessages,data];
            }
        }
    },
    getters:{
        inboxCount(state){
            return state.messages.filter(msg=>!msg.isDeleted && msg.type==="incoming").length;
        },
        importantMessageCount(state)
        {
            return state.messages.filter(msg=>msg.isImportant && !msg.isDeleted).length
        },
        trashMessagesCount(state)
        {
            return state.messages.filter(msg=>msg.isDeleted).length;
        },
        outgoingMessagesCount(state)
        {
           return state.messages.filter(msg=>msg.type!=="incoming").length;
        }
    }
})
export default store;