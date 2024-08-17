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
    acceptData();
  }
}
let data = {};
function acceptData() {
  data["title"] = input.value;
  posts.innerHTML += `
  <div>
            <p>${data.title}</p>
            <span class="option">
              <i onClick="updatePost(this)" class="fas fa-edit"></i>
              <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
          </div>
  `;
  input.value = "";
}
function deletePost(e) {
  e.parentElement.parentElement.remove();
}
function updatePost(e) {
  e.parentElement.parentElement.remove();
  input.value = e.parentElement.previousElementSibling.innerHTML;
}
