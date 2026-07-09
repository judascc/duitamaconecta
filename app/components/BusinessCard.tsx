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

  views:number;
  clicks:number;
}




export default function BusinessCard({
business
}:{
business:Business
}){


return(

<div
className="
bg-white
rounded-[2rem]
overflow-hidden
shadow-xl
border
border-gray-100
group
"
>



{/* IMAGEN */}

<div
className="
relative
h-72
"
>

<img
src={business.image}
alt={business.name}
className="
w-full
h-full
object-cover
group-hover:scale-105
transition
duration-500
"
/>


{/* ETIQUETA */}

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

<div className="
mt-5
flex
gap-4
text-sm
text-gray-500
">


<p>
👁 {business.views} vistas
</p>


<p>
💬 {business.clicks} contactos
</p>


</div>



{/* CONTENIDO */}

<div
className="
p-6
"
>


<p
className="
text-yellow-500
font-bold
text-sm
"
>

{business.category}

</p>



<h3
className="
text-3xl
font-black
mt-2
text-gray-900
"
>

{business.name}

</h3>



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


<p
className="
text-sm
text-gray-500
"
>
Promoción
</p>


<p
className="
text-xl
font-black
text-yellow-600
"
>

{business.offer}

</p>


</div>




<p
className="
mt-4
text-gray-500
"
>

📍 {business.location}

</p>




<a
href={`https://wa.me/${business.whatsapp}`}
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



)

}