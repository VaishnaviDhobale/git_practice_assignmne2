function prime(num){
  if(num<=1){
    return "not prime";
  }
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i==0){
      return "not prime";
    }
  }
  return "prime";
}
let data=prime(20);
console.log(data);