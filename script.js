let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted");
  formValid();
});
function formValid() {
  if (input.value === "") {
    msg.innerHTML = "Please fill the input";
  } else {
    console.log("success");
    createPost();
  }
}
let data = {};
function createPost() {
  data["title"] = input.value;
  posts.innerHTML = data.title;
}
