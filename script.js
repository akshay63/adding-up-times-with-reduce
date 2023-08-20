/*
 **--------- Project19: Adding Up Times with reduce method ---------**

GOAL: Given a list, your task is to access all the Time stamps from the list. Convert the string into numbers and then add them all up and console log the total time in Hours, Minutes and Seconds.

 */

//My Approach
//1) loop through the list and convert each string into number one by one
//2) Put every number in an array and then add them up or
//3) convert the total number into hours and log it
const videos = document.querySelector(".videos");
const listItems = videos.querySelectorAll("li");
let total = 0;

listItems.forEach((item) => {
  const time = item.dataset.time;
  let timeInt = Number.parseInt(time);
  total += timeInt;
});

console.log("Total Hours: ", total / 60);

//Wes Approach1: Solving using map() & reduce()
const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((totalMin, vidSeconds) => totalMin + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

//wes Approach2: use reduce to avoid writing multiple map methods. DIY
