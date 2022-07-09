function findDuplicateTransactions(transactions) {
  let newTransaction = (transactions).slice().sort((a, b) => {
     return a.id - b.id;
  })

  const result = [];
  const timeCheck = (firstTime, secondTime) => {
    return (new Date(firstTime).getTime() - new Date(secondTime).getTime())/60000;
  }

   while(newTransaction.length){
     let member = [];
      let reference = newTransaction.shift()
      member.push(reference);

      for(let i = 0; i < newTransaction.length; i++) {
        if(reference.sourceAccount == newTransaction[i].sourceAccount &&
           reference.targetAccount == newTransaction[i].targetAccount &&
           reference.amount == newTransaction[i].amount &&
           reference.category == newTransaction[i].category && timeCheck(newTransaction[i].time, reference.time) <= 1){

            member.push(newTransaction[i]);
            reference = newTransaction[i];
            newTransaction.splice(i, 1);
            i--;
          }
      }
      if(member.length > 1){
      result.push(member);
      }
    }
   return result;
  }
  export default findDuplicateTransactions;
