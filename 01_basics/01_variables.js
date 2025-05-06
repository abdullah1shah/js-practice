const accountId = 13324             // value locked
let accountEmail = "abdullah@gmail.com"  // value can be changed, only let is used for mutable variables
var accountPassword = "1234"        // var is not used anymore, bcz of block scope and functional scope
accountCity = "karachi"             // not recommended to use but allowed by JS
let accountState;               // if value not given then variable is undefined

// accountId = 2 //not allowed because, const

accountEmail = "hc@hc.com"
accountPassword = "2323"
accountCity = "lahore"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])