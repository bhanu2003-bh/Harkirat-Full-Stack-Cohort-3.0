let counter = 0;

setInterval(() => {
   counter++;
   console.log(Math.floor((counter/(60*60))%24)+":"+Math.floor((counter/(60))%60)+":"+(counter%60));
}, 1000);