// Level 0 - Hello Ethernaut
// No vulnerability - just learning to interact with the console

await contract.info()
// 'You will find what you need in info1().'

await contract.info1()
// 'Try info2(), but with "hello" as a parameter.'

await contract.info2("hello")
// 'The property infoNum holds the number of the next info method to call.'

await contract.infoNum()
// 42

await contract.info42()
// 'theMethodName is the name of the method.'

await contract.theMethodName()
// 'The method name is method7123949.'

await contract.method7123949()
// 'If you know the password, submit it to authenticate().'

await contract.password()
// 'ethernaut0'

await contract.authenticate("ethernaut0")
// Transaction sent — level complete!