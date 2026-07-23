import Businesses from "./components/Businesses";
import Header from "./components/Header";
import Hero from "./components/Hero"

export const metadata = {

title:
"Negocios destacados en Duitama",


description:
"Conoce los mejores negocios, promociones y servicios locales de Duitama."

};


export default function Home(){

return(

<main>

<Header/>



<Businesses />

<section className="min-h-screen">

<h1>
Duitama Conecta
</h1>


</section>


</main>

)

}