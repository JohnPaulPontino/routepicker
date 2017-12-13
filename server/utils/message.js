/**
 * Created by jhaypeepontz on 12/13/17.
 */
let generateMessage = (from, text)=>{
    return {
        from,
        text,
        createdAt: new Date().getTime()
    };
};

 module.exports = {generateMessage};