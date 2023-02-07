let names = "Masai"
let bag ="";
for(let i=names.length-1;i>=0;i--){
  bag=bag+=names[i];  
}
if(names==bag){
  console.log("Yes")
}else{
  console.log("No")
}