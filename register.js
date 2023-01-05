function giai(){
  let a = document.getElementById("Register").value;
  let b = document.getElementById("Age").value;
  let c = document.getElementById("Phone").value;

  if (isNaN(a) || isNaN(b)|| isNaN(c)){
      alert(" Vui lòng nhập số");
      return;
} 
}