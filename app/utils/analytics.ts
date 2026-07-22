import { supabase } from "../lib/supabase";
import { getVisitorId } from "./visitor";

console.log(
"SUPABASE:",
supabase
);


export async function trackEvent(

businessId:number,

event:string

){


try {


const visitor = getVisitorId();



const newEvent = {

business_id: businessId,

event_type: event,

visitor_code: visitor

};



const { data, error } = await supabase

.from("business_events")

.insert(newEvent)

.select();



if(error){


console.error(
"❌ ERROR SUPABASE EVENTO:",
error
);


return;


}



console.log(

"✅ EVENTO GUARDADO SUPABASE:",

{

businessId,

event,

visitor

}

);



return data;



}

catch(error){


console.error(

"❌ ERROR TRACK EVENT:",

error

);



}



}