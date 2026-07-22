"use client";

import { trackEvent } from "../utils/analytics";


export default function BusinessInteraction({

businessId

}:{
businessId:number
}){


return (

<div

onClick={()=>{

trackEvent(

businessId,

"VIEW"

)

}}

>

</div>

)

}