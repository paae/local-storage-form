//variables
const tweetList=document.getElementById("tweet-list")


//event listeners
eventListeners();

function eventListeners(){
//form submition
  document.querySelector('#form')
  .addEventListener('submit',newTweets)
  //remove tweet list
  tweetList.addEventListener('click',removeTweet)
  //document
  document.addEventListener('DOMContentLoaded',localStorageOnload)


 
}

///////////////////////////////////////
//function

function newTweets(e){
  e.preventDefault()
  console.log('form submitted')
  //read the text area value
  const text=document.getElementById('tweet').value

//create remove button
const removeBtn=document.createElement('a')
removeBtn.classList="remove-tweet"
removeBtn.textContent="X";
//remove Button to each tweet genratored

//create li element
const li=document.createElement('li')
li.textContent=text;


//adding the remove button to each tweet
li.appendChild(removeBtn)

//adding list 
tweetList.appendChild(li)

addTweetLocalStorage(text)
//print the alerrt
alert('tweet addded')
this.reset()
}
/////////////////////////////////////////////
//remove the tweet from the dom
function removeTweet(e){
if(e.target.classList.contains("remove-tweet")){
e.target.parentElement.remove()
}

//remove from storage
removeTweetLocalStorage(e.target.parentElement.textContent)
}

//adding tweets to local storage
function addTweetLocalStorage(tweet){
let tweets=getTweetsFromStorage()
console.log(tweets)
//add tweet in to the array
tweets.push(tweet)
//conert tweet array to a string
localStorage.setItem("tweets",JSON.stringify(tweets))
}
/////////////////////////////////
function getTweetsFromStorage(){
  let tweets;
  const tweetsLS=localStorage.getItem("tweets")
  //get values if null i sreturn then we create an empty array
if(localStorage.getItem('tweets')===null){
  tweets=[]
}else{
  tweets=JSON.parse(tweetsLS)
}
return tweets
}
////////////////////////////////////////
function localStorageOnload(){
 
 let tweets= getTweetsFromStorage()
 console.log('tweets'+tweets)
 //loop through storage and print values
 tweets.forEach(function(text){

//create remove button
const removeBtn=document.createElement('a')
removeBtn.classList="remove-tweet"
removeBtn.textContent="X";
//remove Button to each tweet genratored

//create li element
const li=document.createElement('li')
li.textContent=text;


//adding the remove button to each tweet
li.appendChild(removeBtn)

//adding list 
tweetList.appendChild(li)

 })
}


function removeTweetLocalStorage(tweet){

  //get tweets from the storage
let tweets=getTweetsFromStorage();
   console.log(tweets)
   //remove the X from local storage
  const tweetDelete=tweet.substring(0,tweet.length-1)
// loop  through the tweets and remove the tweet that is eqal
tweets.forEach(function(tweetLS,index){
if(tweetDelete===tweetLS){
 tweets.splice(index,1)
}
})
//save the data
localStorage.setItem('tweets',JSON.stringify(tweets))
}