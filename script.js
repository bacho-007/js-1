// 1. მოცემულია ობიექტი ამოიღეთ user ცვლადის სტუდენტის სტატუსი;


let user = {
      firstName: 'George',
      lastName: 'smith',
      age: 25,
      Studentstatus: 'active'
};


console.log(user.Studentstatus);





// 2. შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი;

const cars = ['bmw', 'ford', 'nissan', 'toyota'];

for (let i of cars) {
      console.log(i);
}




// 3.  შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.


let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 5)
            console.log(numbers[i]);
}

//4 თუ უსერის ასაკი მეტია 18 ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: hello;


let User = {
      name: 'George',
      age: 28,
      studentstatus: 'active'
}
if (User.age > 18 && User.studentstatus == 'active') {
      console.log('hello');
}


//5 თუ იუზერის სახელი უდრის ლევანს მაშინ დაიბეჭდოს ტექსტი: hello giorgi;

let Username = {
      name: 'levaN',
      age: 28,
      studentstatus: 'active'
}
if (Username.name == 'levaN') {
      console.log('hello George');
}


// 6 თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;
// ყველა დანარჩენ შემთხვევაში დაილოგოს ტექსტი: error;

let UserBox = {
      name: 'levaN',
      age: 28,
      studentstatus: 'active'
}
if ((UserBox.studentstatus == 'active') || (UserBox.age < 25)) {
      console.log('hello world');
} else {
      console.log('error');
}



// 5.მოცემულია მასივი:  გამოიტანეთ მარტო სრტინგები;

let array = ["watermelon", "pear", 10, 45, 50, "apple", "AnAnaS"];

for (let i of array) {
      if (typeof i == 'string') {
            console.log(i);
      }
}

//  მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:


let arraY = [
      [2, -3, 5, 10],
      [25, -24, -11, 100],
      [-6, -7, 10]
]
for (let x of arraY) {
      for (let y of x) {
            if (y > 0) {
                  console.log(y);
            }
      }

}

// მოცემული მასივიდან ამოარჩიეთ მხოლოდ ციფრები, რომელიბიხ 5-ის ჯერადია


let Array = [32, 10, 'hello', null, 'hello2', 50]
for (let x = 0; x < Array.length; x++) {
      if (typeof Array[x] == "number" && Array[x] % 5 == 0) {
            console.log(Array[x]);
      }
}