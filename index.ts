//100 days coding challenge
//Q1 install Node js Typescript and vs code
//Q2
let myName="aisha";
console.log(`hello ${myName} would you like to learn some typescript today?`);

//Q3 upper lower and title case
let person="aisha khurram";
console.log(person.toLowerCase());
console.log(person.toUpperCase());
console.log(person.charAt(0).toUpperCase()+person.slice(1).toLowerCase()+person.charAt(6).toUpperCase()+person.slice(7).toLowerCase());

//Q4
console.log(`Albert Einstien once said, "a person who never made a mistake never tried anything new"`);

//Q5
let famous_person="Albert Einstien";
let message=`${famous_person} once said,"A person who never made a mistake never tried anything new`;
console.log(message);

//Q6
let personName="   ayan  \n  \t";
console.log(personName);
console.log(personName.trim());

//Q7 and Q8
console.log(5+3); //addition
console.log(12-4); //subtraction
console.log(4*2); //multiply
console.log(16/2); //divide
 //Q9
 let favoriteNumber=8;
 console.log(`my favorite number is ${favoriteNumber}`);

 //Q10
 //already added many comments to my work

 //Q11
 let names=["maryam","tooba","afreen","sadia"];
 //Q12
 for(let name of names){
    console.log(`how are u ${name}`);}

    //Q13
    let transport=["suzuki alto","honda accord","sonata"];
    transport.forEach(transport=>{
        console.log(`I would like to own a ${transport}`);



    })

    //Q14
    let guests=["sana","subhan","ayan"];
    guests.forEach(guests=>{
        console.log(`${guests} you are invited to the dinner`);
    })

    //Q15
    let unableToAttend="sana";
    console.log(`${unableToAttend} cant make it ot the dinner`);
    let newGuest="abida";
    guests[guests.indexOf(unableToAttend)]=newGuest;
    guests.forEach(guests=>{
        console.log(`${guests} would u join me for dinner`);
    })

    //Q16
    console.log("good news i've got a bigger table");
    guests.push("amna","fatima","maryam");
    guests.forEach(guests=>{
        console.log(`${guests} lets have a bigger party`);
    })

    //Q17
    console.log("unfortunately only two people can be invited");
    while(guests.length>2){
        let removedGuests=guests.pop()
        console.log(`${removedGuests} i cat invite u to the party`);
    }
    guests.forEach(guests=>{
        console.log(`${guests} you are still invited`);
    })


    //Q18

    let places=["paris","bali","turkey","london","italy"];
    console.log("original order:",places);
    console.log("alphabetical order:",[...places].sort());
    console.log("reverse alphabetical order:",[...places].sort().reverse());
    console.log("original order:",places);
    console.log("reversed order:",places.reverse());
//Q19
console.log(`i am inviting ${guests.length} people to dinner`);


//Q20
let languages=["urdu","punjabi","english","memoni"];
console.log(`i can speak 4 languages and these are ${languages}`);

//Q21

let mountain={
    name:"mount everest",
    height:8610,
    location:"nepal"
}
console.log(`highest mountain in the world is ${mountain.name}, its height is ${mountain.height},
and it is situated in ${mountain.location}`);


//Q22

let cars=["elantra","santro","subaru"];
//intentional error: console.log(cars[3]);
console.log(cars[0]);
let index=cars.indexOf("santro");
console.log(index);

//Q23

let flower="rose";
console.log(flower==="rose");
console.log(flower==="jasmine");
console.log(flower==="daffodil");
let num1=10;
let num2=3;
console.log(num1>num2);
console.log(num1===num2);
console.log(num1<num2);
console.log(num1+num2>num1);
console.log(num1-num2<num1);
console.log(num1*num2>num2);
console.log(num2/num1>num1);

//Q24
console.log("testing equality with strings");
console.log("apple"==="apple");
console.log("testing with lowercase");
console.log("Apple".toLowerCase()==="apple");
console.log("numeric test");
console.log(10>5);
console.log("testing with 'and' & 'or' operators");
console.log(true&&true);
console.log(true&&false);
console.log(true||false);
let boys=["ahmed","ali","shayan"];
console.log("is ahmed in boys?");
console.log(boys.includes("ahmed"));
console.log("is sarim in boys?");
console.log(boys.includes("sarim"))


//Q25

let alien_color="green";
if (alien_color="green"){
    console.log("you earned 5 points");
}
//alien_color="red";
if(alien_color="red"){

}

//Q26
if(alien_color="green"){
    console.log("you earned 5 points");
}
else{
    console.log("you earned 10 points");
}

//Q27
alien_color="green";
if (alien_color="green"){
    console.log("you earned 5 points");
}
else if(alien_color="yellow"){
    console.log("you earned 10 points");
}
else if(alien_color="red"){
    console.log("you earned 15 points");
}

alien_color="red";
if (alien_color="green"){
    console.log("you earned 5 points");
}
else if(alien_color="yellow"){
    console.log("you earned 10 points");
}
else if(alien_color="red"){
    console.log("you earned 15 points");
}

alien_color="yellow";
if (alien_color="green"){
    console.log("you earned 5 points");
}
else if(alien_color="yellow"){
    console.log("you earned 10 points");
}
else if(alien_color="red"){
    console.log("you earned 15 points");
}

//Q28

let age=3;
if(age<=2){
    console.log("you are a baby");
}
else if(age>2 && age<4){
    console.log("you are a toddler");
}
else if(age>=4 && age<13){
    console.log("you are a kid");
}
else if(age>=13 && age<20){
    console.log("you are a teenager");
}
else if(age<=20 && age<65){
    console.log("you are an adult");
}
else if(age>=65){
    console.log("you are an elder");
}

//Q29
let favFruit=["pear","strawberry","kiwi","melon","falsa"];
if(favFruit.includes("pear")){
    console.log("you like pear");

}
if(favFruit.includes("strawberry")){
    console.log("you like strawberry");
}
if(favFruit.includes("kiwi")){
    console.log("you like kiwi");
}
if(favFruit.includes("melon")){
    console.log("you like melon");
}
if (favFruit.includes("falsa")){
    console.log("you like falsa");
}
//Q30

let users=["admin","user1","user2","user3"];
users.forEach(users=>{
    if(users==="admin"){
        console.log("hello admin");
    }
    else{
        console.log(`hello ${users} thank you for logging in`);
    }
})

//Q31

let userName=[];
if(userName.length===0){
    console.log("we need to find some users");
}
else{
    // greet users
}

//Q32
let current_user=["user1","ADMIN","user3","User2","moderator"];
let new_user=["admin","user4","user2","user6"];
new_user.forEach(new_user=>{
    if(current_user.some(current_user=>current_user.toLowerCase()===new_user.toLowerCase())){
        console.log(`${new_user} will need to enter a new user name`)
    }
    else{
        console.log(`${new_user} is available`);
    }
})

//Q33

let numbers=["1","2","3","4","5","6","7","8","9"];
numbers.forEach(numbers=>{
    let suffix="th";
    if(numbers==="1"){
        suffix="st";
    }
    else if(numbers==="2"){
        suffix="nd";
    }
    else if(numbers==="3"){
        suffix="rd";
    }
    console.log(`${numbers}${suffix}`);
})
//Q34

let flavor=["pepperoni","tikka","fajita"];

flavor.forEach(flavor=>{
    console.log(`${flavor} pizza`);
})
flavor.forEach(flavor=>{
    console.log(` I like ${flavor} pizza`);
})
console.log(`pizza is my fav kind of food \n i really enjoy it \n broadway pizza is my fav`);

//Q35
let animals=["dog","cat","parrot"];
animals.forEach(animals=>{
    console.log(`${animals}would make a great pet`);

})
console.log("all these animals are pet animals");

//Q36
function make_shirt(size:string,message:string){
    console.log(`make a ${size} t-shirt with a message ${message} printed on it`)
}
make_shirt("small","smile");

//Q37
function make_shirts(size:string="large",message:string="i love typescript"){
    console.log(`make a shirt size ${size} with a message ${message} printed on it`);


}
make_shirts();
make_shirts("medium");
make_shirts("small","have fun");

//Q38
function describe_city(city:string,country:string="Pakistan"){
    console.log(`${city} is in ${country}`);
}
describe_city("karachi");
describe_city("multan");
describe_city("amritsar");

//Q39
function city_country(city:string,country:string){
    console.log(`${city}, ${country}`);
}
(city_country("karachi","pakistan"));
city_country("delhi","india");
city_country("tehran","iran");


//Q40
interface album {
    artist: string,
    title: string,
    tracks?: number
}
function make_album(artist:string,title:string,tracks?:number){
    let album: album ={artist,title};
    if(tracks){
        album["tracks"] = tracks
    }
    return album;
}

console.log (make_album("atif aslam","jalpari")),
console.log (make_album("ali zafar","rangeen",12));



//Q41
let magicians:string[]=["alibaba","rapunzel","genie"];
function show_magicians(magicians:string[]){
    magicians.forEach(magicians=>{
        console.log(magicians);
    }
        

    )

}
show_magicians(magicians);

//Q42

function make_great(magicians:string[]){
    for(let i=0;i<magicians.length;i++){
        magicians[i]=
        magicians[i]+ " the great";
    }
}
make_great(magicians);
show_magicians(magicians);


//Q43
    let magician:string[]=["alice","david","chris"];
    function make_great1(magician:string[]):string[]{
        let greatmagician:any=[];
        magician.forEach(magician=>{
            greatmagician.push(`${magician} the Great`);}
        )
        return greatmagician;
    };
let greatmagician=make_great1(magician.slice());
console.log("original magician:");
show_magicians(magician);
console.log("Great magician:");
show_magicians(greatmagician);

//Q44
function make_sandwich(...items:string[]){
    console.log(`making a sandwich with: ${items.join(",")}.`);
}
make_sandwich("ham","cheese");
make_sandwich("turkey","avocado","lettuce");
make_sandwich("bacon","tomato","mustard","cheese","mayo");

//Q45
function make_car(manufacturer:string,model:string,...options:[string,any][]):{
    [key:string]:any
}{
    let car:{[key:string]:any}={manufacturer,model};
    options.forEach(([key,value])=>car[key]=value);
    return car;
}
console.log(make_car("hyundai","alsvin",["color","red"],["year",2020]));
console.log(make_car("kia","sportage",["color","black"],["sunroof",true]));