function prime(num){
  for(let i=0;i<=Math.sqrt(num);i++){
    if(num%i==0){
      return "not prime"
    }
    return "prime"
  }
}
let data=prime(20);
console.log(data)