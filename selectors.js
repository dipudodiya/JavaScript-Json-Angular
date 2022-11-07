function demoSelector()
{
    var heading=document.querySelectorAll('.h2');
    heading.forEach(x=>{
        x.style.color='white';
      x.style.background='green';
    });
}

function demoSelector1()
{
   document.querySelectorAll('span').forEach((x,index)=>{
    x.innerText+=` Text added successfully =${index+1}`;
   });
}

function demoSelector2()
{
  document.querySelectorAll("h2[align $='t']").forEach(x=>{
    x.style.border="5px solid red";
  })
}

function demoSelector3()
{
 document.querySelector("data").classList.toggle('head2');
}

function demoSelector4(){
document.querySelectorAll("section").forEach(x => {
    if (x.textContent.toLocaleLowerCase().includes('davis')) {
    x.style.color = 'red';
    } });
}