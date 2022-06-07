let btn = document.querySelector(".btn")
let counter = document.querySelector(".counter")
let indianFlag = "https://media.istockphoto.com/photos/indian-flag-picture-id177387875?b=1&k=20&m=177387875&s=170667a&w=0&h=K7FtMorv89_SAAFLwhLdlVg8WDklStnozUvmBXqiS3I="

btn.addEventListener('click', () => {
    btn.style.display = "none"
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        setTimeout(() => {
                            setTimeout(() => {
                                setTimeout(() => {
                                    setTimeout(() => {
                                        setTimeout(() => {
                                            setTimeout(() => {
                                                counter.innerHTML = `<p class='wish'>Happy Independence Day</p><img src="${indianFlag}" alt="IndianFlag"/>` 
                                            }, 1 * 1000)
                                            counter.innerHTML = "1"
                                        }, 1 * 1000)
                                        counter.innerHTML = "2"
                                    }, 1 * 1000)
                                    counter.innerHTML = "3"
                                }, 1 * 1000)
                                counter.innerHTML = "4"
                            }, 1 * 1000)
                            counter.innerHTML = "5"
                        }, 1 * 1000)
                        counter.innerHTML = "6"
                    }, 1 * 1000)
                    counter.innerHTML = "7"
                }, 1 * 1000)
                counter.innerHTML = "8"
            }, 1 * 1000)
            counter.innerHTML = "9"
        }, 1 * 1000)
        counter.innerHTML = "10"
    }, 1 * 1000)
})