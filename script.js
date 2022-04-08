const btn = document.getElementById("submitBtn");
const f_name = document.getElementById("first");
const l_name = document.getElementById("last");
const check = document.getElementById("check");
const email = document.getElementById("email");
const comment = document.getElementById("comment");

// disabling button
btn.disabled = true; 


// enable button if both first name and last name both have something 
// inside the input field
f_name.addEventListener("input", (e) => {
  const value = e.currentTarget.value;


  // make sure last name has a value
  const lastName = l_name.value


  //if both inputs have something enable the button
  // both first name and last name are field in submit btn works now
  if(lastName.length > 0 && value.length  > 0){
    btn.disabled = false;
  

    //nothing is in the inputs <---> (no first name or last name)
  }else{
   btn.disabled = true;
  
  }
});

l_name.addEventListener("input", (e) => {
  const value = e.currentTarget.value;

  // make sure first name has a value
  // this is how you give value
  const firstName = f_name.value

  // both inputs have something and submit btn changes
  if(firstName.length > 0 && value.length  > 0){
    btn.style.backgroundColor = 'pink';
  
  }else{
    btn.style.backgroundColor = '#eeeeee';
  }
  

  //if both inputs have something enable the button
  if(firstName.length > 0 && value.length  > 0){
    btn.disabled = false;

    //nothing is in the inputs <---> (no first name or last name)
  }else{
    btn.disabled = true;
  }
});

//element that we listen for ("check is the ID for the checked box") & 
// check is defined on top pulled from the html

check.addEventListener('change', (e) => {
  
  // logic based on the event - check some property on the element
  // if box is checked show email
  if(e.currentTarget.checked){ //if true that it has an email
    email.style.display = 'block'; //do this --> show the input field
  }else{ //if not true
    email.style.display = 'none'; //do this
  }
});


// changing text and background color to anything i want
document.getElementById("email").style.color = "#DB4437";


// when entering your email the background color changes if theres nothing it goes white
email.addEventListener('input', event => {
  if (email.value === '') {
    email.style.backgroundColor = '';
  } else {
    email.style.backgroundColor = 'pink';
  }
});

// textarea chages color when text is inside and goes back to default when blank

comment.addEventListener('input', event => {
  if (comment.value === '') {
    comment.style.backgroundColor = '';
  } else {
    comment.style.backgroundColor = 'pink';
  }
});

fetch("https://jsonplaceholder.typicode.com/users",{
  method: 'POST',
  body:JSON.stringify({
    name: ' f_name', 
    'l_name',     
    // I want the full name displaying and not 
    // have a first name and last name values on differen lines is this correct?
    email: 'email',
    comment: 'comment',
    check: 'check'
  }),

});


// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   alert(`${f_name.value} ${l_name.value}`);
// });
