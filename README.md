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
      

      Primenumbers
    
      Not working when string having Capital letter
      Not working when string having Special character
      Not working with numbers like 123
      
      I have used the array from 2 to 61 out of this  13 and 61 are failing, instead there are many failures from 2 to 1000. Also I have tested for string value to check the {"message": "Internal Server Error"}
      
