/**
 * Created by z001hgg on 4/24/16.
 */
var frisby = require('frisby');
var strings_to_reverse = ["shaik","shaik younus","Shaik Younus","shaik.younus2@target.com","YOUNUS","123 432"," ","123"]

for(var i = 0; i<strings_to_reverse.length;i++ ) {

    frisby.create('Reverse a string')
        .post('http://findthebug.herokuapp.com/reversewords?',{
            string:strings_to_reverse[i]
        })
        .expectStatus(200)
        .expectBodyContains(
            strings_to_reverse[i].split("").reverse().join("").split(" ").reverse().join(" ")
        )
        .toss();
}
