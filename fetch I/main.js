let arr = ["https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/yot9zfocxiqxeghusxny", 
"https://www.tiffinboxfood.com/wp-content/uploads/2020/03/chicken-momo-1.jpg",
 "https://mcdonaldsblog.in/wp-content/uploads/2016/11/maharaja-mac-story_McDonalds_081116.jpg",
  "https://images.saymedia-content.com/.image/t_share/MTc2MjEzMTEzOTg3NzM3MDAx/pizza-poem.jpg", 
  "https://media.istockphoto.com/photos/szechuan-chicken-which-is-a-popular-indochinese-non-vegetarian-recipe-picture-id1091602572?k=20&m=1091602572&s=170667a&w=0&h=YZRL6SAkaZ_ukEwbKKQwnaraAs-24jtoOg62lWvUy14="]
let main = document.getElementById("main")
let select = document.getElementById("select")
// select.addEventListener("change" )
let Pizza = document.getElementById("biriyani").value
let Burger = document.getElementById("momos").value
let VadaPav = document.getElementById("burger").value
let ChickenRoll = document.getElementById("pizza").value
let Momo = document.getElementById("chicken_lolipop").value
let image = document.createElement("img")
image.setAttribute("class", "image")
let nav = document.getElementById("navbar")
let submit = document.getElementById("submit")
let num = document.createElement("h2")
num.setAttribute("id", "h22")
let ans = Math.floor(Math.random() * 100000) + 100000;
num.innerText = "Order Id-" + "#" + ans
submit.addEventListener("click", function () {
    event.preventDefault()
    let my_promise = new Promise(function (solved, rejected) {

        setTimeout(function () {
            if (select.value !== "Choose Items") {
                solved(select.value)
            }
            else {
                rejected("Rejected")
            }
        }, 3000)

    })
    // console.log(my_promise)
    // console.log(select.value)
    // promise. then for resolve
    my_promise.then(function (value) {
        main.innerHTML = ""
        switch (value) {
            case Pizza: image.src = arr[0];
                break;
            case Burger: image.src = arr[1];
                break;
            case ChickenRoll: image.src = arr[2];
                break;
            case VadaPav: image.src = arr[3];
                break;
            case Momo: image.src = arr[4];
                break;
            // }
        }
        main.append(image)
        nav.append(num)
    })
    // promise .catch for reject
    my_promise.catch(function () {
        console.log("Rejected")
    })
})

console.log(ans)