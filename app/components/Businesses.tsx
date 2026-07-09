import BusinessCard from "./BusinessCard";
import { businesses } from "../data/businesses";


export default function Businesses() {


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

{businesses.length}+

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
businesses.map((business)=>(

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

)

}