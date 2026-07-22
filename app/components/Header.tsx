export default function Header() {


const whatsapp =
"https://wa.me/573102879880?text=Hola%20quiero%20publicar%20mi%20negocio%20en%20Duitama%20Conecta";


return (

<header
className="
sticky
top-0
z-50
bg-white/90
backdrop-blur-md
shadow-sm
"
>


<div
className="
max-w-7xl
mx-auto
px-4
py-3
flex
items-center
justify-between
gap-3
"
>



{/* LOGO */}

<a
href="/"
className="
flex
items-center
gap-2
min-w-0
"
>


<div
className="
w-10
h-10
md:w-12
md:h-12
rounded-2xl
bg-gradient-to-br
from-yellow-400
to-orange-400
flex
items-center
justify-center
shadow-md
text-xl
"
>
📍
</div>



<div
className="
leading-none
"
>


<h1
className="
text-xl
md:text-3xl
font-black
text-gray-900
whitespace-nowrap
"
>

Duitama

<span
className="
text-yellow-500
"
>
 Conecta
</span>


</h1>



<p
className="
hidden
sm:block
text-xs
text-gray-500
font-medium
mt-1
"
>

Negocios locales

</p>


</div>



</a>






{/* MENU DESKTOP */}

<nav
className="
hidden
lg:flex
items-center
gap-8
font-semibold
text-gray-700
"
>


<a
href="#inicio"
className="
hover:text-yellow-500
transition
"
>
Inicio
</a>



<a
href={whatsapp}
target="_blank"
className="
hover:text-yellow-500
transition
"
>
Anúnciate
</a>


</nav>






{/* WHATSAPP SIEMPRE VISIBLE */}

<a
href={whatsapp}
target="_blank"
className="
bg-green-500
hover:bg-green-600
text-white
px-4
md:px-6
py-3
rounded-2xl
font-black
shadow-lg
flex
items-center
gap-2
transition
hover:scale-105
text-sm
md:text-base
whitespace-nowrap
"
>


<span>
💬
</span>


<span>
Escribenos a Whatsapp
</span>


</a>




</div>


</header>

)

}