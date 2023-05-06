import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const LOCAL_KEY = "feedback-form-state";
const formInput = {};

form.addEventListener("input", throttle(onInput),500);
form.addEventListener("submit", onSubmit)

function onInput(evt) {
    formInput[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formInput));
};

function onSubmit(evt) {
    evt.preventDefault();

    if(!form.email.value.length || !form.message.value.length){
      return alert("Заповніть всі поля")
    } else{
        console.log(formInput);
        localStorage.removeItem(LOCAL_KEY);
        evt.target.reset();
    }
};

function checkLocal(){
    const savedSettings = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if(savedSettings){
        const {email, message} = savedSettings;
        form.email.value = email||'';
        form.message.value = message||'';
        formInput.email = email||'';
        formInput.message = message||'';
    }
}
checkLocal();