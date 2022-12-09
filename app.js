// Learning Goals
//   Explicitly override the default context with call and apply
//   Explicitly lock the context object for a function with bind
// Introduction


// Explicitly Override Context with call and apply
const asgardianBrothers = [
    {
        firstName: "Thor",
        lastName: "Odinsson"
    },{
        firstName: "Loki",
        lastName: "Laufeysson-Odinsson"
    }
]
function intro(person, line){
    return `${person.firstName} ${person.lastName} says: ${line}`;
}
const phrase = "I like this brown drink very much, bring me another!"
console.log(intro(asgardianBrothers[0], phrase));
console.log(intro(asgardianBrothers[1], phrase));



///////////////////////////////////////////////
///////////////////////////////////////////////

function introWithContext(line){
    return `${this.firstName} ${this.familyName} says: ${line}`
}

introWithContext.call(asgardianBrothers[0], phrase);
introWithContext.apply(asgardianBrothers[[0], phrase]);

///////////////////////////////////////////
intro(asgardianBrothers[0], phrase) === introWithContext.call(asgardianBrothers[0], phrase) //=> true
intro(asgardianBrothers[0], phrase) === introWithContext.apply(asgardianBrothers[0], [phrase]) //=> true

const complaint = "I was falling for thirty minutes!"
intro(asgardianBrothers[1], complaint) === introWithContext.call(asgardianBrothers[1], complaint) //=> true
intro(asgardianBrothers[1], complaint) === introWithContext.apply(asgardianBrothers[1], [complaint]) //=> true


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////


const asgardianBrother = [
    {
      firstName: "Thor",
      familyName: "Odinsson"
    },
    {
      firstName: "Loki",
      familyName: "Laufeysson-Odinsson"
    }
  ]
  function introWithContext(line){
    return `${this.firstName} ${this.familyName} says: ${line}`
  }
  
  const thorIntro = introWithContext.bind(asgardianBrother[0])
  thorIntro("Hi, Jane") //=> Thor Odinsson says: Hi, Jane
  thorIntro("I love snakes") //=> Thor Odinsson says: I love snakes