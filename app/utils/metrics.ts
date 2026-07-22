import { supabase } from "../lib/supabase";


export async function getBusinessMetrics(

businessId:number

){


const { data, error } = await supabase

.from("business_events")

.select("*")

.eq(
"business_id",
businessId
);



if(error){


console.error(
"ERROR OBTENIENDO METRICAS:",
error
);



return {

views:0,

whatsappClicks:0,

shares:{
whatsapp:0,
facebook:0,
instagram:0
}

};


}



const events = data || [];



const views = events.filter(

(event:any)=>

event.event_type === "VIEW"

).length;




const whatsappClicks = events.filter(

(event:any)=>

event.event_type === "WHATSAPP_CLICK"

).length;




const whatsappShares = events.filter(

(event:any)=>

event.event_type === "SHARE_WHATSAPP"

).length;




const facebookShares = events.filter(

(event:any)=>

event.event_type === "SHARE_FACEBOOK"

).length;




const instagramShares = events.filter(

(event:any)=>

event.event_type === "SHARE_INSTAGRAM"

).length;




return {


views,


whatsappClicks,


shares:{


whatsapp:whatsappShares,


facebook:facebookShares,


instagram:instagramShares


}


};


}