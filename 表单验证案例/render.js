//用户名
(function () {
    const name = document.querySelector('.name')
    const reg = /^[a-zA-Z0-9]{2,}$/
    name.addEventListener('change', function () {
        if (!reg.test(name.value)) {
            name.nextElementSibling.style.opacity = 1
            // console.log(name.nextElementSibling);

        } else {
            name.nextElementSibling.style.opacity = 0
        }
    })
})();
//手机号
(function () {
    const num = document.querySelector('.num')
    const reg = /^[1-9][0-9]{10}$/
    num.addEventListener('change', function () {
        if (!reg.test(num.value)) {
            num.nextElementSibling.style.opacity = 1
        }
        else {
            num.nextElementSibling.style.opacity = 0

        }
    })
})();
//验证码
(function () {
    const ma = document.querySelector('.ma')
    const reg = /^[a-zA-Z0-9]{4}$/
    ma.addEventListener('change', function () {
        if (!reg.test(ma.value)) {
            ma.nextElementSibling.nextElementSibling.style.opacity = 1
        }
        else {
            ma.nextElementSibling.nextElementSibling.style.opacity = 0

        }
    })
})();
//密码
(function () {
    const pas = document.querySelector('.pas')
    const reg = /^[a-zA-Z0-9-_@]{6,12}$/
    pas.addEventListener('change', function () {
        if (!reg.test(pas.value)) {
            pas.nextElementSibling.style.opacity = 1
        }
        else if (pas.nextElementSibling.style.opacity === '1') {
            pas.nextElementSibling.style.opacity = 0

        }
    })
})();
// 下一步
(function () {
    const ck = document.querySelector(".dian")
    const btn = document.querySelector('.btn')
    const span = document.querySelectorAll('span')
    const input = document.querySelectorAll('ul input[type="text"]')

    btn.addEventListener('click', function (e) {
        let flag = 0
        let flag1 = 0
        for (let i = 0; i < span.length; i++) {
            if (span[i].style.opacity === '1') {
                flag = 1
                break
            }
        }
        if (flag === 1) {
            alert('请填写正确信息')
            e.preventDefault()
            return
        } else {

            for (let i = 0; i < input.length; i++) {
                if (input[i].value === '') {
                    flag1 = 1
                    alert('输入不能为空')
                    e.preventDefault()
                    return
                }
            }

        }
        if (!ck.checked) {
            alert('请勾选协议')
            e.preventDefault()
            return
        }
    })


})();