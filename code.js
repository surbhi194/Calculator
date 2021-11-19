let screen=document.getElementById('floatingTextarea');
let screenValue='';
let button=document.querySelectorAll('button');
for(item of button)
{
    item.addEventListener('click',function(e)
    {
        buttonText=e.target.innerText;
         if(buttonText=='C')
        {
            screenValue='';
            screen.value=screenValue;
        }
        else if(buttonText=='=')
        {
            screen.value=eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}