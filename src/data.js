
export const API_KEY = 'AIzaSyBEFNiF_X4gUg4Wn96KdU8T5vwAjXBU1kA'


export const value_converter =(value)=>{

    if(value>=1000000){
        return Math.floor (value/100000)+"M"
    }
    
    else if(value>=1000){
        return Math.floor (value/1000)+"M"

    }
    else{
        return value;
    }

}