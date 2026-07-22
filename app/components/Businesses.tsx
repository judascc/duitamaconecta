"use client";

import { useEffect, useState } from "react";

import BusinessCard from "./BusinessCard";

import { businesses } from "../data/businesses";

import { getBusinessMetrics } from "../utils/metrics";

import { calculateScore } from "../utils/ranking";


export default function Businesses() {


const [rankedBusinesses,setRankedBusinesses] = useState<any[]>([]);



useEffect(()=>{


async function loadBusinesses(){


const updatedBusinesses = await Promise.all(


businesses.map(async (business)=>{


const metrics = await getBusinessMetrics(

business.id

);



const score = calculateScore({


views:metrics.views ?? 0,


whatsappClicks:metrics.whatsappClicks ?? 0,


compartir:{


whatsapp:metrics.shares.whatsapp ?? 0,


facebook:metrics.shares.facebook ?? 0,


instagram:metrics.shares.instagram ?? 0


}


});




return {


...business,


views:metrics.views ?? 0,


whatsappClicks:metrics.whatsappClicks ?? 0,


score:score,


compartir:{


whatsapp:metrics.shares.whatsapp ?? 0,


facebook:metrics.shares.facebook ?? 0,


instagram:metrics.shares.instagram ?? 0


}


};



})


);



const sorted = updatedBusinesses.sort(

(a,b)=>b.score-a.score

);



setRankedBusinesses(sorted);



}



loadBusinesses();



},[]);




return (


<section

id="negocios"

className="
py-20
px-4
bg-gray-50
"

>


<div

className="
max-w-7xl
mx-auto
"

>


{/* ENCABEZADO */}


<div

className="
text-center
mb-14
"

>


<p

className="
inline-block
bg-yellow-100
text-yellow-600
px-5
py-2
rounded-full
font-bold
text-sm
"

>

🏪 COMERCIO LOCAL

</p>



<h2

className="
mt-5
text-4xl
md:text-5xl
font-black
text-gray-900
"

>

Negocios destacados

</h2>




<p

className="
mt-4
text-gray-600
text-lg
max-w-2xl
mx-auto
"

>

Conoce empresas, emprendimientos y servicios
de Duitama en un solo lugar.

</p>




<div

className="
mt-8
flex
justify-center
gap-6
flex-wrap
"

>


<div

className="
bg-white
px-6
py-4
rounded-2xl
shadow-sm
"

>


<p

className="
text-3xl
font-black
text-yellow-500
"

>

{rankedBusinesses.length}+

</p>


<p

className="
text-gray-500
font-medium
"

>

Negocios

</p>


</div>




<div

className="
bg-white
px-6
py-4
rounded-2xl
shadow-sm
"

>


<p

className="
text-3xl
font-black
text-green-500
"

>

24/7

</p>


<p

className="
text-gray-500
font-medium
"

>

Conexión

</p>


</div>



</div>



</div>





{/* LISTADO */}


<div

className="
space-y-8
"

>


{

rankedBusinesses.map((business)=>(


<div

key={business.id}

className="
hover:-translate-y-1
transition
duration-300
"

>


<BusinessCard

business={business}

/>



</div>


))


}



</div>



</div>


</section>


);


}