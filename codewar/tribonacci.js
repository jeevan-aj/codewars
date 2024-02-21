function tribonacci(signature,n){
    if(n==0) return null;
    let total = [...signature];
    let next = 0
    
    for(let i = total.length;i<n;i++){
      next = total[i-3]+total[i-2]+total[i-1]
      total.push(next)
    }
    return total
  }


  console.log(tribonacci([1,1,1],10))