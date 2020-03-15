fetch('https://www.breakingbadapi.com/api/characters')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        info(data);
        console.log(data[0].img);
    });

function info(data) {
    img1.setAttribute("src", data[0].img);
    img2.setAttribute("src", data[1].img);
    img3.setAttribute("src", data[2].img);
    img4.setAttribute("src", data[3].img);
    name1.textContent = data[0].name;
    name2.textContent = data[1].name;
    name3.textContent = data[2].name;
    name4.textContent = data[3].name;
    nickname1.innerHTML = "Nickname: " + data[0].nickname;
    nickname2.innerHTML = "Nickname: " + data[1].nickname;
    nickname3.innerHTML = "Nickname: " + data[2].nickname;
    nickname4.innerHTML = "Nickname: " + data[3].nickname;
    birthday1.innerHTML = "Birthday: " + data[0].birthday;
    birthday2.innerHTML = "Birthday: " + data[1].birthday;
    birthday3.innerHTML = "Birthday: " + data[2].birthday;
    birthday4.innerHTML = "Birthday: " + data[3].birthday;
}
