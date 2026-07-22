export function calculateScore(metrics:any){


const views = metrics.views || 0;

const whatsappClicks = metrics.whatsappClicks || 0;

const shares = metrics.shares || 0;



const score =

(views * 1)

+

(whatsappClicks * 10)

+

(shares * 5);



return score;


}