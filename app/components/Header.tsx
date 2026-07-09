export default function Header() {

return (

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">

<div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">


{/* LOGO */}

<a 
href="/"
className="flex items-center gap-3"
>


<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center shadow-md">

<span className="text-2xl">
📍
</span>

</div>



<div className="leading-none">

<h1 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900">

Duitama

<span className="text-yellow-500">
 Conecta
</span>

</h1>


<p className="text-xs text-gray-500 font-medium">

Negocios locales

</p>


</div>


</a>



{/* MENU DESKTOP */}

<nav className="hidden md:flex items-center gap-10 font-semibold text-gray-700">





<a 
href="#anunciate"
className="hover:text-yellow-500 transition"
>
Anúnciate
</a>


</nav>




{/* WHATSAPP */}

<a
href="#"
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