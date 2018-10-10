var TutorialToken = artifacts.require("./TutorialToken.sol");

contract('TutorialToken', function(accounts) {
   it("should put 12000 TutorialToken in the first account", function() {
     return TutorialToken.deployed().then(function(instance) {
       return instance.getBalance.call(accounts[0]);
     }).then(function(balance) {
       assert.equal(balance.valueOf(), 12000, "12000 wasn't in the first account");
     });
   });

   it("should send coin correctly", function() {
      var tutorial;
  
      // Get initial balances of first and second account.
      var account_one = accounts[0];
      var account_two = accounts[1];
  
      var account_one_starting_balance;
      var account_two_starting_balance;
      var account_one_ending_balance;
      var account_two_ending_balance;
  
      var amount = 10;
  
      return TutorialToken.deployed().then(function(instance) {
        tutorial = instance;
        return tutorial.getBalance.call(account_one);
      }).then(function(balance) {
        account_one_starting_balance = balance.toNumber();
        return tutorial.getBalance.call(account_two);
      }).then(function(balance) {
        account_two_starting_balance = balance.toNumber();
        return tutorial.sendCoin(account_two, amount, {from: account_one});
      }).then(function() {
        return tutorial.getBalance.call(account_one);
      }).then(function(balance) {
        account_one_ending_balance = balance.toNumber();
        return tutorial.getBalance.call(account_two);
      }).then(function(balance) {
        account_two_ending_balance = balance.toNumber();
  
        assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
        assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
      });
   });
});