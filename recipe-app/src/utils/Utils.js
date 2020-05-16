
class Utils {

    limitText(text, limit=20){
        console.log(text.length)
        if(text.length> limit){
            text = text.substring(0,limit)+"...";
        }
       return text;
    }

}

export default new Utils();