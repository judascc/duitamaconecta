"use client";

import { useEffect, useState, useRef } from "react";

import { getBusinessMetrics } from "../utils/metrics";
import { calculateScore } from "../utils/ranking";
import { trackEvent } from "../utils/analytics";


type Business = {

  id:number;

  name:string;

  category:string;

  description:string;

  image:string;

  location:string;

  whatsapp:string;

  tag:string;

  offer:string;

};


type Metrics = {

  views:number;

  whatsappClicks:number;

  shares:{
    whatsapp:number;
    facebook:number;
    instagram:number;
  };

};



export default function BusinessCard({

business

}:{
business:Business

}){


const cardRef = useRef<HTMLDivElement|null>(null);


const [viewed,setViewed] = useState(false);



const [metrics,setMetrics] = useState<Metrics>({

views:0,

whatsappClicks:0,

shares:{

whatsapp:0,

facebook:0,

instagram:0

}

});



// =============================
// REGISTRAR VISITA
// =============================

useEffect(()=>{


const observer = new IntersectionObserver(

(entries)=>{


if(

entries[0].isIntersecting &&

!viewed

){


trackEvent(

business.id,

"VIEW"

);


setViewed(true);


}


},

{
threshold:0.5
}


);



if(cardRef.current){

observer.observe(cardRef.current);

}



return ()=>{

observer.disconnect();

};



},[

business.id,

viewed

]);





// =============================
// CARGAR METRICAS SUPABASE
// =============================


useEffect(()=>{


async function loadMetrics(){


try{


const data = await getBusinessMetrics(

business.id

);



setMetrics({

views:data.views ?? 0,

whatsappClicks:data.whatsappClicks ?? 0,

shares:{

whatsapp:data.shares?.whatsapp ?? 0,

facebook:data.shares?.facebook ?? 0,

instagram:data.shares?.instagram ?? 0

}

});



console.log(

"METRICAS REALES",

business.name,

data

);



}

catch(error){


console.error(

"ERROR CARGANDO METRICAS",

error

);


}



}



loadMetrics();



},[business.id,business.name]);







// =============================
// CALCULAR SCORE
// =============================


const score = calculateScore({

views:metrics.views,

whatsappClicks:metrics.whatsappClicks,

compartir:{

whatsapp:metrics.shares.whatsapp,

facebook:metrics.shares.facebook,

instagram:metrics.shares.instagram

}

});






return (


<div

ref={cardRef}

className="
bg-white
rounded-3xl
shadow-lg
overflow-hidden
hover:-translate-y-1
transition
duration-300
"

>


{/* IMAGEN */}

<div className="
relative
h-64
">


<img

src={business.image}

alt={business.name}

className="
w-full
h-full
object-cover
"

/>



<div

className="
absolute
top-5
left-5
bg-red-500
text-white
px-4
py-2
rounded-full
font-black
text-sm
"

>

🔥 {business.tag}


</div>


</div>





{/* METRICAS */}


<div

className="
px-6
mt-5
flex
gap-4
flex-wrap
text-sm
text-gray-500
"

>


<div>

🔥 Ranking:

<b>

{score}

</b>

</div>



<div>

👁 {metrics.views}

vistas

</div>




<div>

💬 {metrics.whatsappClicks}

WhatsApp

</div>




<div>

🟢 {metrics.shares.whatsapp}

compartidos

</div>




<div>

🔵 {metrics.shares.facebook}

Facebook

</div>




<div>

🟣 {metrics.shares.instagram}

Instagram

</div>



</div>







{/* CONTENIDO */}



<div

className="
p-6
"

>


<div

className="
text-yellow-600
font-bold
"

>

{business.category}

</div>





<h2

className="
text-3xl
font-black
mt-2
text-gray-900
"

>

{business.name}

</h2>





<p

className="
text-gray-600
mt-3
"

>

{business.description}

</p>







<div

className="
mt-5
bg-yellow-50
rounded-2xl
p-4
"

>


<div

className="
font-bold
text-yellow-600
"

>

PROMOCIÓN

</div>



<div

className="
text-xl
font-black
text-yellow-600
"

>

{business.offer}

</div>


</div>







<div

className="
mt-4
text-gray-500
"

>

📍 {business.location}

</div>







<a

href={`https://wa.me/${business.whatsapp}`}


onClick={()=>{


trackEvent(

business.id,

"WHATSAPP_CLICK"

);


}}



className="
mt-6
block
text-center
bg-green-500
hover:bg-green-600
text-white
py-4
rounded-2xl
font-black
text-lg
transition
shadow-lg
"

>


💬 Pedir por WhatsApp


</a>





</div>



</div>


);


}