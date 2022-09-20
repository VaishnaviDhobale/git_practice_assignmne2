let count=0;
function prime(num){
  for(let i=0;i<=num;i++){
    if(num%i==0){
      count++
    }
  }
  if(count==2){
    return true
  }
  return false
}
let data=prime(2);
console.log(data)