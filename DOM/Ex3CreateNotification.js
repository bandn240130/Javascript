function createNotification (tittle = "No monney no funny") {
    const template = `<div class="noti">
    <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
    <div class="noti-content">
      <h3 class="noti-title">${tittle}</h3>
      <p class="noti-desc">
        Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Quisquam
        dolor sit amet consec
      </p>
    </div>
  </div>`
  document.body.insertAdjacentHTML ("afterbegin", template);

    
};
const randomData = ["ABC", "Quang Bao Nguyen", "Fuckmoney",];


// createNotification();
// setTimeout : chay 1 Lan
// set setInterval: chay lien tuc 
const timer = setInterval(function () {
    const item = document.querySelector(".noti");
    if (item) item.parentNode.removeChild(item);
    const title = randomData[Math.floor(Math.random() * randomData.length)];
    createNotification(title);
// 
    
}, 2000);
