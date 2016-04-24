# blipper
To run this need to install below Modules/tools
* [NodeJS](https://nodejs.org/en/download/)
* [frisbyjs](http://frisbyjs.com/)
* [jasmine node](http://jasmine.github.io/2.0/introduction.html)


## Installation and running frisbyjs

* npm install --save-dev frisby

## To intsall jasmine-node

* npm install -g jasmine-node

## Run the files

* jasmine-node reverse.string_spec.js
* jasmine-node test.primeNumber_spec.js 

## Issues found
      Reverse String
    
      Not working when string having Capital letter
      Not working when string having Special character
      Not working with numbers like 123
      
      Result :
      
      34363bcbbc8a:checkoutMOD z001hgg$ jasmine-node reverse.string_spec.js 
..FFFFFF

Failures:

  1) Frisby Test: Reverse a string 
	[ POST http://findthebug.herokuapp.com/reversewords? ]
   Message:
     Expected '"Shaik Younus"
' to contain 'kiahS sunuoY'.
   Stacktrace:
     Error: Expected '"Shaik Younus"
' to contain 'kiahS sunuoY'.
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:545:42)
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:1074:43)
    at Timer.listOnTimeout (timers.js:92:15)

  2) Frisby Test: Reverse a string 
	[ POST http://findthebug.herokuapp.com/reversewords? ]
   Message:
     Expected '"shaik.younus2@target.com"
' to contain 'moc.tegrat@2sunuoy.kiahs'.
   Stacktrace:
     Error: Expected '"shaik.younus2@target.com"
' to contain 'moc.tegrat@2sunuoy.kiahs'.
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:545:42)
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:1074:43)
    at Timer.listOnTimeout (timers.js:92:15)

  3) Frisby Test: Reverse a string 
	[ POST http://findthebug.herokuapp.com/reversewords? ]
   Message:
     Expected '"YOUNUS"
' to contain 'SUNUOY'.
   Stacktrace:
     Error: Expected '"YOUNUS"
' to contain 'SUNUOY'.
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:545:42)
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:1074:43)
    at Timer.listOnTimeout (timers.js:92:15)

  4) Frisby Test: Reverse a string 
	[ POST http://findthebug.herokuapp.com/reversewords? ]
   Message:
     Expected '"123 432"
' to contain '321 234'.
   Stacktrace:
     Error: Expected '"123 432"
' to contain '321 234'.
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:545:42)
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:1074:43)
    at Timer.listOnTimeout (timers.js:92:15)

  5) Frisby Test: Reverse a string 
	[ POST http://findthebug.herokuapp.com/reversewords? ]
   Message:
     Expected '""
' to contain ' '.
   Stacktrace:
     Error: Expected '""
' to contain ' '.
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:545:42)
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:1074:43)
    at Timer.listOnTimeout (timers.js:92:15)

  6) Frisby Test: Reverse a string 
	[ POST http://findthebug.herokuapp.com/reversewords? ]
   Message:
     Expected '"123"
' to contain '321'.
   Stacktrace:
     Error: Expected '"123"
' to contain '321'.
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:545:42)
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:1074:43)
    at Timer.listOnTimeout (timers.js:92:15)

Finished in 4.968 seconds
8 tests, 8 assertions, 6 failures, 0 skipped


      Primenumbers
    
      Not working when string having Capital letter
      Not working when string having Special character
      Not working with numbers like 123
      
      I have used the array from 2 to 61 out of this  13 and 61 are failing, Actually there are many failures from 2 to 1000. Also I have tested for string value to check the {"message": "Internal Server Error"} and it is working fine.
      
.....F...........F.

Failures:

  1) Frisby Test:  Testing Prime numbers API 
	[ POST http://findthebug.herokuapp.com/primenumbers ]
   Message:
     Expected 'false
' to contain true.
   Stacktrace:
     Error: Expected 'false
' to contain true.
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:545:42)
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:1074:43)
    at Timer.listOnTimeout (timers.js:92:15)

  2) Frisby Test:  Testing Prime numbers API 
	[ POST http://findthebug.herokuapp.com/primenumbers ]
   Message:
     Expected 'false
' to contain true.
   Stacktrace:
     Error: Expected 'false
' to contain true.
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:545:42)
    at null.<anonymous> (/Users/z001hgg/node_modules/frisby/lib/frisby.js:1074:43)
    at Timer.listOnTimeout (timers.js:92:15)

Finished in 12.82 seconds
19 tests, 19 assertions, 2 failures, 0 skipped

