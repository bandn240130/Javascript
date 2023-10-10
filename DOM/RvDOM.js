Document Object Model 
// https://topdev.vn/blog/dom-la-gi/
// nho" cay cau truc DOM
*1*************** Selecting Node*******************
1.1** document.querySelector("selector") tra ve 1node neu ton tai nguoc lai tra ve null
selectors: .header, p, body, #heading
1.2** document.querySelectorAll("selector") tra ve NodeList
chua danh sach cac Node nguoc lai tra ve empty
/// nodelist co the giong mang ( dung loop va for Ech) nhung khong duoc su dung cac phuong thuc trong mang
- document.getElementsByClassName -> tra ve mot HTMLCollection chua danh sach cac node nguoc lai tra ve empty
- document.getElementsByTagName("tagName")
- document.getElementById("id")-> tra ve 1 node co id do nguoc lai tra ve null
*2***** Selector.getAtrribute("attribute") lay ra gia tri cua atribute selector
//attribute:cac thuoc tinh nhu href, id, class, src, Style
//selector: 1 cai
// nhieu cai node list thi dung forEach
vd: trong the ul co li 
length.forEach((item) =>{
    console.log(item.atribute("class"))
});
console.log(li);
2.1 selector.setAttribute("attribute", value)- set cac gia tri attribute cua selector
// nhieu cai node list thi dung forEach
2.2 selector.removeAttribute("attribute")
2.3 selector.hasAttribute("attribute") kiem tra xem co attribute khong [tra ve ket qua true/false]
*3 *******Text *****************
3.1 TextContent 
//: lay noi dung giua cac selector
3.2 innerText
// khac voi textcontent la chi lay text, khong lay duoc cac text giua cac selector
3.3 innerHTML
// lay ra noi dung cua selector bao gom ca HTML
// khi nao muon truyen html thi dung innerHTML
*4 *****************selector.classList.add("abc")************
vd: const container = document.querySelector(".container")
container.classList.add("is-active");
4.1 selector.classlist.remove("abc")
container.classList.remove("container")
4.2 selector.classlist.contains - co chua
4.3 selector.classList.toggle("is-active");
// no hoat dong khi co class se remove va chua co se add vao
//( co lien quan den phan su kien)
vd: container.classList.toggle("is-active")
4.5 selector.classname - tra ra chuoi cac class cua selector
VD: ve toggle ex1
*5 ********Crud ***************
// them, xoa, sua node trong javascript
5.1 tao ra Element trong Javascript: document.createElement("tag")
const div = document.createElement("div");
5.2 selector.appenChild
//document.body
//document.queryselector("body")
const body = document.body;
body.appendChild(div);
div.classList.add("container")
5.3 document.createTextNode 
// 
5.4. cloneNode
// tao ra ban sao element nao do. muon copy giong ban goc thi dung(true)
const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone)
5.5 elenment.hasChildNodes
// kiem tra xem co phan tu con hay ko (true/false)
6****************. InsertAdjacentText, elenment, HTML***********
//
const h3 = document.querySelector("h1");
// h3.InsertAdjacentText("position", text);
//position:
//  beforebegin - phía trước element
// afterbegin - nằm phía trong element, đằng trước node con đầu tiên
// beforeend - nằm phía trong, đằng sau node con cuối cùng.
// afterend - nằm sau element.
7.********Traversing********
7.1 parentNode vs parentElement
//moi lan su dung 1 cai la ra phan tu gan nhat
7.2 removeChild
//selector.parentNode( goi ve phan tu cha).removeChild(selector)
span.parentNode.removeChild(span)
7.3 nextElementSibling vs previousElenmentSibling
// chon phan tu ke tiep vs chon phan tu dung sau no
7.4 childNode vs children
//tra ve cac node ben trong bao gom text node vs tra ve ca node
//khong bao gom textnode
7.5 firstChild vs firstElementChild
7.6 lastChild s lastElementChild
7.7 nẽxt sibling vs previousSibling 
// Active modal
EX2: hien 1 bang thong bao
 lam 2 cach: cach 1 code tu html-css 
cach 2 code truc tiep tu Javascript

Ex3: createNotification

8*******OFFSET*****
8.1 offsetWidth, height, left,parent,top
// tra ve do rong, cao , so voi ben trai, lay ra phan tu cha de lay gia tri cua phan tu cha, phia tren
8.2 clientWidth, height, left , top
//clientWidth : do rong cua phan tu tru di border
8.3 window.inherWidth. outerWidth, innerHeigth, outerHeight
8.4 selector.getBoundingClientRect()
// lay ra toa do kich thuoc cua phan tu
*** HTMLCollection khong su duoc forEach
*** NodeList su dung duoc forEach
9***** document.title, document.head
//replaceChild
// node.replaceChild(newNode,oldNode);
// convert HTML collection, nodelist to array 
const li = document.getElementsByTagName ("li")
li.forEach((item) => item);
Array.from()
[...name].filte((item) => item{
    console.log(li)
    
});
// selector duy nhat: html, body head title
// html: document.documentElement
// body: document.body
// head: document.head
// title: document.title





