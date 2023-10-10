// const modal = document.querySelector(".modal");
// console.log(modal);
// if (modal) 
//     setTimeout(function  () {
//         modal.classList.add("is-show")
// }, 3000);
    
const template = `<div class="modal">
<div class="modal-content">
    <i class="fa fa-times modal-close"></i>
    <div class="modal-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi alias quia soluta quas, fuga aspernatur incidunt rerum atque exercitationem illum eum unde blanditiis harum nam delectus voluptatem velit illo iusto.
        <div class="modal-action">
            <button class="modal-submit">confirm</button>
            <button class="modal-cancel">cancle</button>

        </div>
    </div>
</div>
</div>`;
const body = document.body;
body.insertAdjacentHTML("afterbegin", template);
const modal = document.querySelector(".modal");
console.log(modal);
if (modal) 
    setTimeout(function  () {
        modal.classList.add("is-show")
}, 3000);
    // 
// const modal = document.createElement("div");
// modal.classList.add("modal");
// const modalContent= document.createElement("div");
// modalContent.classList.add("modal-content");
// modal.appendChild(modalContent);
// const modalClose = document.createElement("i");
// modalClose.className= "fa fa-times modal-close";
// document.body.appendChild(modal);
// const modalDesc = document.createElement("div");
// modalDesc.classList.add("modal-desc");
// modalDesc. textContent = "lLorem ipsum dolor sit, amet consectetur adipisicing elit. Modi alias quia soluta quas, fuga aspernatur incidunt rerum atque exercitationem illum eum unde blanditiis harum nam delectus voluptatem velit illo iusto."
// modalContent.appendChild(modalDesc);
// document.body.appendChild(modal);
// modalTime = document.querySelector(".modal");
// console.log(modal);
// if (modalTime) 
//     setTimeout(function  () {
//         modal.classList.add("is-show")
// }, 3000);
//     // 