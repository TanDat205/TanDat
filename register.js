function giai(){
  let a = document.getElementById("name").value;
  let b = document.getElementById("email").value;
  let c = document.getElementById("password").value;

  if (isNaN(a) || isNaN(b)|| isNaN(c)){
      alert(" Vui lòng nhập số");
      return;
} 
}