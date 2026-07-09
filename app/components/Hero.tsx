export default function Hero() {
  return (

<section
id="inicio"
className="
relative
mx-4
mt-6
overflow-hidden
rounded-[2.5rem]
min-h-[650px]
flex
items-center
"
>


{/* Imagen fondo */}

<div
className="
absolute
inset-0
bg-cover
bg-center
"
style={{
backgroundImage:"url('/ciudad.jpg')"
}}
/>



{/* Capa degradada */}

<div
className="
absolute
inset-0
bg-gradient-to-r
from-black/80
via-black/60
to-black/30
"
/>




{/* CONTENIDO */}

<div
className="
relative
z-10
max-w-7xl
mx-auto
w-full
grid
md:grid-cols-2
gap-10
items-center
px-8
py-16
"
>



{/* TEXTO */}

<div>


<div
className="
inline-flex
items-center
gap-2
bg-yellow-400/20
border
border-yellow-400/40
text-yellow-300
px-4
py-2
rounded-full
font-bold
mb-6
"
>

✨ Publicidad local digital

</div>




<h1
className="
text-5xl
md:text-7xl
font-black
leading-[1.05]
text-white
"
>

Conecta

<br/>

<span
className="
text-yellow-400
"
>
Duitama
</span>

<br/>

con el mundo


</h1>




<p
className="
mt-6
text-lg
md:text-xl
text-gray-200
max-w-xl
"
>

Descubre negocios, productos y servicios
de nuestra ciudad.

<br/>

Apoya lo local y encuentra todo
en un solo lugar.

</p>







</div>





{/* QR */}

<div
className="
flex
justify-center
"
>


<div
className="
bg-white
rounded-[2rem]
p-7
shadow-2xl
text-center
"
>


<div
className="
w-52
h-52
rounded-2xl
bg-gray-100
flex
items-center
justify-center
border-4
border-yellow-400
"
>

<span
className="
text-6xl
"
>
▦
</span>


</div>



<h3
className="
mt-5
text-xl
font-black
text-gray-900
"
>

Escanea y conecta

</h3>



<p
className="
text-yellow-500
font-bold
"
>

Duitama

</p>


</div>


</div>



</div>



</section>

  );
}