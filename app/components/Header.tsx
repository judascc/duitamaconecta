export default function Header() {


const whatsapp =
"https://wa.me/573102879880?text=Hola%20quiero%20publicar%20mi%20negocio%20en%20Duitama%20Conecta";


return (

<header className="
sticky
top-0
z-50
bg-white/90
backdrop-blur-md
shadow-sm
">


<div className="
max-w-7xl
mx-auto
px-5
py-4
flex
items-center
justify-between
">



{/* LOGO */}

<a
href="/"
className="
flex
items-center
gap-3
"
>


<div className="
w-12
h-12
rounded-2xl
bg-gradient-to-br
from-yellow-400
to-orange-400
flex
items-center
justify-center
shadow-md
"
>

📍

</div>



<div>

<h1 className="
text-2xl
font-black
text-gray-900
tracking-tight
">

Duitama

<span className="
text-yellow-500
">
 Conecta
</span>

</h1>


<p className="
text-xs
text-gray-500
font-medium
">

Negocios locales

</p>


</div>


</a>





{/* MENU */}

<nav className="
hidden
md:flex
items-center
gap-10
font-semibold
text-gray-700
">


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





{/* BOTON WHATSAPP */}

<a
href={whatsapp}
target="_blank"
className="
bg-green-500
hover:bg-green-600
text-white
px-5
py-3
rounded-2xl
font-bold
shadow-lg
flex
items-center
gap-2
transition
hover:scale-105
"
>


<span>
💬
</span>


<span className="hidden sm:block">

WhatsApp

</span>


</a>




</div>


</header>

)

}