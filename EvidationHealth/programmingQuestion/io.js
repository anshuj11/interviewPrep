function format() {
  const fs = require("fs")
  const iMap1 = {};
  const iMap2 = {};
  fs.readFile('input1.csv', function (err, data) {
      if (err) {
         return console.error(err);
      }
      input1 = data.toString().split('\n')
      input1 = input1.slice(1)
    input1.forEach(row => {
       const [user_id, age, min_score] = row.split(',')
       if(user_id.length > 0)
         iMap1[user_id] = [user_id, age, min_score]
    })
   });
  fs.readFile('input2.csv', function (err, data) {
      if (err) {
         return console.error(err);
      }
      input2 = data.toString().split('\n')
      input2 = input2.slice(1)
    input2.forEach(row => {
       const [user_id, state, min_score] = row.split(',')
      if ((user_id.length > 0) && iMap1[user_id] !== undefined) {
        iMap1[user_id][2] = Math.min( iMap1[user_id][2], min_score )
        iMap1[user_id].push(state)
      }
      console.log(iMap1[user_id])
    })
   });
   uid = Object.keys(iMap1)
   data = []
  uid.forEach( id => {
    data.push(iMap1[id])
  })
    fs.writeFile('output.csv', data, function(err){
      if (err) {
        return console.error(err)
      }
    })
 }

format()
