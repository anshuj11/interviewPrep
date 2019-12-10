# ice-breaker 
The person asked if I moved to bay-area at some point or if I was born and raised there. How did I like being in bay-area. He shared his eperience of living in Georgia(Russia). I think we spent like 5 mins talking about the pros-cons of SF bay. He said he didn't like San Francisco that much but couldn't quite put his finger on why.

He had a comnsiderable Russian accent which made it difficult to understand what he was saying. I had to ask him to repeat himself( sometimes twice) many times. He didn't seem to be annoyed by this and repeated whenever I asked.

# interviewPrep
# Coding Round : Screenshare ( I picked javascript for this)
* Design a class to implement Spreadsheet. It takes in number of rows and columns and has two methods
 update and
eg.
Alice|5|foo
Bob|10|
||
||
* pretty_print - Left aligned, dynamically assigned width
Alice |5 |foo
Bob   |10|


hello-philo


skeleton (36).zip
skeleton (37).zip
skeleton (38).zip
skeleton (39).zip
skeleton (4).zip
skeleton (40).zip
skeleton (41).zip
skeleton (5).zip
skeleton (6).zip
skeleton (7).zip
skeleton (8).zip
skeleton (9).zip
skeleton 10
skeleton 11
skeleton 12
skeleton 13
skeleton 14
skeleton 15
skeleton 16
skeleton 17
skeleton 18
skeleton 19
skeleton 2
skeleton 20
skeleton 21
skeleton 22
skeleton 23
skeleton 24
skeleton 25
skeleton 26
skeleton 27
skeleton 28
skeleton 29
skeleton 3
skeleton 30

      for (let j = 0; j < columns; j++) {
        temp[j] = "";
      }
      this.arr.push(temp);
    }
  }
  update(row_num, col_num, data) {
    this.arr[row_num][col_num] = data;
  }
  printSheet() {
    for (let i = 0; i < this.rows; i++) {
      let tempStr = this.arr[i].join("|");
      // for (let j = 0; j < this.columns; j++) {
      console.log(tempStr);

      //}
    }
  }

    prettyPrint() {
        let maxWidths = [];
        for (let j = 0; j < this.columns; j++) {
            let maxColWidth = 0;
            for (let i = 0; i < this.rows; i++){
      for (let j = 0; j < columns; j++) {
        temp[j] = "";
      }
      this.arr.push(temp);
    }
  }
  update(row_num, col_num, data) {
    this.arr[row_num][col_num] = data;
  }
  printSheet() {
    for (let i = 0; i < this.rows; i++) {
      let tempStr = this.arr[i].join("|");
      // for (let j = 0; j < this.columns; j++) {
      console.log(tempStr);

      //}
    }
  }

    prettyPrint() {
        let maxWidths = [];
        for (let j = 0; j < this.columns; j++) {
            let maxColWidth = 0;
            for (let i = 0; i < this.rows; i++){
      for (let j = 0; j < columns; j++) {
        temp[j] = "";
      }
      this.arr.push(temp);
    }
  }
  update(row_num, col_num, data) {
    this.arr[row_num][col_num] = data;
  }
  printSheet() {
    for (let i = 0; i < this.rows; i++) {
      let tempStr = this.arr[i].join("|");
      // for (let j = 0; j < this.columns; j++) {
      console.log(tempStr);

      //}
    }
  }

    prettyPrint() {
        let maxWidths = [];
        for (let j = 0; j < this.columns; j++) {
            let maxColWidth = 0;
            for (let i = 0; i < this.rows; i++){
                if (this.arr[i][j].length > maxColWidth) {
                    maxColWidth = this.arr[i][j].length;
               }
            }
            maxWidths.push(maxColWidth)
        }

  }
}
      for (let j = 0; j < columns; j++) {
        temp[j] = "";
      }
      this.arr.push(temp);
    }
  }
  update(row_num, col_num, data) {
    this.arr[row_num][col_num] = data;
  }
  printSheet() {
    for (let i = 0; i < this.rows; i++) {
      let tempStr = this.arr[i].join("|");
      // for (let j = 0; j < this.columns; j++) {
      console.log(tempStr);

      //}
    }
  }

    prettyPrint() {
        let maxWidths = [];
        for (let j = 0; j < this.columns; j++) {
            let maxColWidth = 0;
            for (let i = 0; i < this.rows; i++){
                if (this.arr[i][j].length > maxColWidth) {
                    maxColWidth = this.arr[i][j].length;
               }
            }
            maxWidths.push(maxColWidth)
        }

  }
}

let sheet = new Spreadsheet(4, 3);
sheet.update(0, 0, "bob");
      for (let j = 0; j < columns; j++) {
        temp[j] = "";
      }
      this.arr.push(temp);
    }
  }
  update(row_num, col_num, data) {
    this.arr[row_num][col_num] = data;
  }
  printSheet() {
    for (let i = 0; i < this.rows; i++) {
      let tempStr = this.arr[i].join("|");
      // for (let j = 0; j < this.columns; j++) {
      console.log(tempStr);

      //}
    }
  }

    prettyPrint() {
        let maxWidths = [];
        for (let j = 0; j < this.columns; j++) {
            let maxColWidth = 0;
            for (let i = 0; i < this.rows; i++){
                if (this.arr[i][j].length > maxColWidth) {
                    maxColWidth = this.arr[i][j].length;
               }
            }
            maxWidths.push(maxColWidth)
        }

  }
}

let sheet = new Spreadsheet(4, 3);
sheet.update(0, 0, "bob");
sheet.update(0, 1, 10);
      for (let j = 0; j < columns; j++) {
        temp[j] = "";
      }
      this.arr.push(temp);
    }
  }
  update(row_num, col_num, data) {
    this.arr[row_num][col_num] = data;
  }
  printSheet() {
    for (let i = 0; i < this.rows; i++) {
      let tempStr = this.arr[i].join("|");
      // for (let j = 0; j < this.columns; j++) {
      console.log(tempStr);

      //}
    }
  }

    prettyPrint() {
        let maxWidths = [];
        for (let j = 0; j < this.columns; j++) {
            let maxColWidth = 0;
            for (let i = 0; i < this.rows; i++){
                if (this.arr[i][j].length > maxColWidth) {
                    maxColWidth = this.arr[i][j].length;
               }
            }
            maxWidths.push(maxColWidth)
        }

  }
}

let sheet = new Spreadsheet(4, 3);
sheet.update(0, 0, "bob");
sheet.update(0, 1, 10);
sheet.update(0, 2, "foo");
      for (let j = 0; j < columns; j++) {
        temp[j] = "";
      }
      this.arr.push(temp);
    }
  }
  update(row_num, col_num, data) {
    this.arr[row_num][col_num] = data;
  }
  printSheet() {
    for (let i = 0; i < this.rows; i++) {
      let tempStr = this.arr[i].join("|");
      // for (let j = 0; j < this.columns; j++) {
      console.log(tempStr);

      //}
    }
  }

    prettyPrint() {
        let maxWidths = [];
        for (let j = 0; j < this.columns; j++) {
            let maxColWidth = 0;
            for (let i = 0; i < this.rows; i++){
                if (this.arr[i][j].length > maxColWidth) {
                    maxColWidth = this.arr[i][j].length;
               }
            }
            maxWidths.push(maxColWidth)
        }

  }
}

let sheet = new Spreadsheet(4, 3);
sheet.update(0, 0, "bob");
sheet.update(0, 1, 10);
sheet.update(0, 2, "foo");
sheet.update(1, 0, "alice");
sheet.update(1, 1, 5);
      for (let j = 0; j < columns; j++) {
        temp[j] = "";
      }
      this.arr.push(temp);
    }
  }
  update(row_num, col_num, data) {
    this.arr[row_num][col_num] = data;
  }
  printSheet() {
    for (let i = 0; i < this.rows; i++) {
      let tempStr = this.arr[i].join("|");
      // for (let j = 0; j < this.columns; j++) {
      console.log(tempStr);

      //}
    }
  }

    prettyPrint() {
        let maxWidths = [];
        for (let j = 0; j < this.columns; j++) {
            let maxColWidth = 0;
            for (let i = 0; i < this.rows; i++){
                if (this.arr[i][j].length > maxColWidth) {
                    maxColWidth = this.arr[i][j].length;
               }
            }
            maxWidths.push(maxColWidth)
        }

  }
}

let sheet = new Spreadsheet(4, 3);
sheet.update(0, 0, "bob");
sheet.update(0, 1, 10);
sheet.update(0, 2, "foo");
sheet.update(1, 0, "alice");
sheet.update(1, 1, 5);
      for (let j = 0; j < columns; j++) {
        temp[j] = "";
      }
      this.arr.push(temp);
    }
  }
  update(row_num, col_num, data) {
    this.arr[row_num][col_num] = data;
  }
  printSheet() {
    for (let i = 0; i < this.rows; i++) {
      let tempStr = this.arr[i].join("|");
      // for (let j = 0; j < this.columns; j++) {
      console.log(tempStr);

      //}
    }
  }

    prettyPrint() {
        let maxWidths = [];
        for (let j = 0; j < this.columns; j++) {
            let maxColWidth = 0;
            for (let i = 0; i < this.rows; i++){
                if (this.arr[i][j].length > maxColWidth) {
                    maxColWidth = this.arr[i][j].length;
               }
            }
            maxWidths.push(maxColWidth)
        }

  }
}

let sheet = new Spreadsheet(4, 3);
sheet.update(0, 0, "bob");
sheet.update(0, 1, 10);
sheet.update(0, 2, "foo");
sheet.update(1, 0, "alice");
sheet.update(1, 1, 5);
//import { threadId } from "worker_threads";

class Spreadsheet {
  constructor(rows, columns) {
    this.arr = [];

    this.rows = rows;
    this.columns = columns;

    for (let i = 0; i < rows; i++) {
      let temp = [];
      for (let j = 0; j < columns; j++) {
        temp[j] = "";
      }
      this.arr.push(temp);
    }
  }
  update(row_num, col_num, data) {
    this.arr[row_num][col_num] = data;
  }
  printSheet() {
    for (let i = 0; i < this.rows; i++) {
      let tempStr = this.arr[i].join("|");
      // for (let j = 0; j < this.columns; j++) {
      console.log(tempStr);

      //}
    }
  }

    prettyPrint() {
        let maxWidths = [];
        for (let j = 0; j < this.columns; j++) {
            let maxColWidth = 0;
            for (let i = 0; i < this.rows; i++){
                if (this.arr[i][j].length > maxColWidth) {
                    maxColWidth = this.arr[i][j].length;
               }
            }
            maxWidths.push(maxColWidth)
        }

  }
}

let sheet = new Spreadsheet(4, 3);
sheet.update(0, 0, "bob");
sheet.update(0, 1, 10);
sheet.update(0, 2, "foo");
sheet.update(1, 0, "alice");
sheet.update(1, 1, 5);

sheet.printSheet();


# Short conceptual questions: VERBAL
## Database
 * What is a normalized db
 * What is foreign key
 * How is foreign key useful to normalize db
 * what are indices
 * How are indices implemented
 * what are the advantages/disadvantages of having indices
 * What are composed indices
 * How do you measure performance of a query ( what tools would you use, what output does it provide that is relevant to you)
## System Level
* What is a mutex
* What is deadlock
* What are reader/writer locks
Data structures
## Hashes and Maps
* How are they implemented
* What are collisions
* If you have 64000 values getting stored using a hash function that has 64 possible outputs, how would you store them.
* What is Bloom Filter
* How do we store passwords in tables
* What is hashing and salting
* Where is salt value stored
https://brilliant.org/wiki/bloom-filter/
* How does malloc function works in C ( what parameters you pass to it and what is the output)
* How does free function work
* Binary Search Trees
* Search time Big O, Worst case search time
* How to you find kth smallest element ( preorder traversal?)
* How is preorder traversal implemented ( I tried to explain it but found it hard to do it verbally probably because I didn't remember the algorithm very well)
# Debugging Round: Screenshare ( I picked Ruby for this)
Find bugs in Web Crawler. They provided nice specs for it.
Make sure to run passing specs after each fix, it's possible to fail passing specs while you THINK you fixed the failing specs ( which would be awful).
# System Architecture :VERBAL
HTTP
Difference between GET and POST requests
How does caching work, what is load balancing?


 Q. A colleague has given you data scraped from Craigslist on used cars.
It contains data about many million cars and has their make, model, color, miles, location etc.
You have to design a system that would query the data and return the details about cars. What would be the API endpoints of this system?
Example - All the red hondas, between 30000 - 50000 miles located in Baltimore.

# Personal Questions
  * Q. Number of years of experience in software
  * Q. What did you work on
  * Q. What are you looking for in your next job
        ( The interviewer commented on my desired job being 180 degree to my previou job)
  * Q. What kind of company I would prefer
  * Q. If I had any questions other than the next steps
  
  

