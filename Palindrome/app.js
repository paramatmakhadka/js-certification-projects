const btn = document.querySelector("#check-btn");

const answer = document.querySelector("#result");

const textInput = document.querySelector("#text-input");

const palindrome = () =>{
 const text = textInput.value.trim().toLowerCase();
 const sanitizedText = text.replace(/[^a-z0-9]/gi, "");
  const dublicate = sanitizedText.split('').reverse().join('');

if (sanitizedText === ""){
  alert("Please input a value");
  answer.innerText = "Please input a value";
} else if (sanitizedText === dublicate){
  answer.innerText = `${text} is a palindrome`;
}else{
  answer.innerText = `${text} is not a palindrome`;
}
};

btn.addEventListener('click', palindrome);