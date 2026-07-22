export function getVisitorId(){

if(typeof window === "undefined"){
return null;
}


let visitorId = localStorage.getItem(
"duitama_visitor"
);


if(!visitorId){


visitorId =
"visitor_" +
Date.now() +
"_" +
Math.random()
.toString(36)
.substring(2);


localStorage.setItem(
"duitama_visitor",
visitorId
);


}


return visitorId;

}