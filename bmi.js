var height=document.getElementById('ht');
var setHeight=document.getElementById('h-value');
setHeight.innerText=height.value;

height.oninput = function()
{
  setHeight.innerText = this.value;
}

var weight=document.getElementById('wt');
var setWeight=document.getElementById('w-value');
setWeight.innerText=weight.value;
weight.oninput = function()
{
  setWeight.innerText = this.value;
}

const calculateBmi = document.getElementById('calculate');

calculateBmi.addEventListener('click',function(){
  new_height = document.getElementById('ht').value;
  new_weight = document.getElementById('wt').value;
  metre = new_height/100;
  bmi = (new_weight)/(metre*metre);
  console.log(bmi);
  if(bmi<18.5)
  {
  document.getElementById('bmi-value').innerText=bmi.toFixed(1);
  document.getElementById('condition').innerText="UnderWeight";
  }
  if(bmi>=18.5 && bmi<=25)
  {
    document.getElementById('bmi-value').innerText=bmi.toFixed(1);
  document.getElementById('condition').innerText="Normal";
  }
  if(bmi>25 && bmi<=30)
  {
    document.getElementById('bmi-value').innerText=bmi.toFixed(1);
  document.getElementById('condition').innerText="OverWeight";
  }
  if(bmi>30)
  {
    document.getElementById('bmi-value').innerText=bmi.toFixed(1);
  document.getElementById('condition').innerText="Obese";
  }
});

