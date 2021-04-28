    


Round 1 Intro + Project related questions + coding ------------------

Q. What tecnical challenges you faced during your work?
Q. How did you optimize document loading time ( based on my answer to Q1)
Q. How was your experience working with third party service when they proved unreliable?

// non-sorted list of lists where each sub-list is (start time, end time, # of passengers)
const input = [
  [2, 5, 2],
  [3, 4, 1],
  [6, 7, 1],
  [1, 3, 1],
];

console.log(numPassengers(input));
// output = list of tuples where each tuple is (timestamp, # of total passengers)
/*
output = [
  (1, 1),
  (2, 3),
  (4, 2),
  (5, 0),
  (6, 1),
  (7, 0)
]
*/
Q. What is the time complexity of your solution
QW. How will your solution change if we used unix timestamps instead of these timestamps.
Q. I solved it in a sub-optimal way, so she asked if I could solve it in an optimal way

const _ = require('lodash');

function numPassengers(tL) {
  //const tstamps = new Array;
  const passCnt = {};
  
  //tstamps[0] = 0;
  let currNumP = 0;
  for ( let i = 0; i < tL.length; i++) {  //O(n)
    const [start, end, numP] = tL[i];
     currNumP += numP   
     // for (let j = start; j < end; j++) {    //O(m)
     //   if ( tstamps[j] === undefined) {
     //     tstamps[j] = numP;
     //   } else {
     //     tstamps[j] += numP;
     //   }
     // }
     // tstamps[end] === undefined ? tstamps[end] = 0 : tstamps[end] += 0;
     if( passCnt[start] === undefined ) 
       passCnt[start] = [[i, numP]]
     else  
       passCnt[start].push([i, numP])
    
     if( passCnt[end] === undefined ) 
       passCnt[end] = [[i, -numP]]
     else  
       passCnt[end].push([i, -numP])
     
    
  }
  
  let relevantTS = Object.keys(passCnt);
  let res = []
  relevantTS.sort((a,b) => a - b);
  let acc = 0;
  for ( let i = 0; i < relevantTS.length; i++) {
    console.log(passCnt[relevantTS[i]]);
    passCnt[relevantTS[i]].forEach( el => acc += el[1])
    res.push([relevantTS[i], acc]);
    
    
  }
  
  
  // console.table(passCnt);
  return res;
}




/// 0 => [+1, +3, +3, +                  ]  //size of array is equal to timestamps
// 
