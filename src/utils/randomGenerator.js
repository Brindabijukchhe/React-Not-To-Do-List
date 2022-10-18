const strlength = 6;
const chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
export const randomstr = ()=>{
    let str ="";
    for (let i = 0; i< strlength; i++){
        const position = Math.round (Math.random () * chars.length);

        str += chars[position];
    }

 return str;


}