/// Stack (Primitive) , Heap (Non-Primitive)

let my_name = "Rohit"

let other_name = "Armaan"
other_name = my_name

console.log(my_name)
console.log(other_name)


let user1 = {
    email : "ra079174@gmail.com",
    upi : "ra@paytm"
}

let user2 = user1

user2.email = "rohit@gmail.com"

console.log(user1.email)
console.log(user2.email)