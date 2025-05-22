//获取元素
const uname = document.querySelector('.uname')
const uage = document.querySelector('.age')
const gender = document.querySelector('.gender')
const city = document.querySelector('.city')
const tbody = document.querySelector('tbody')
//获取所有带class的元素
const items = document.querySelectorAll('[class]')
//声明空数组
let arr = JSON.parse(localStorage.getItem('arr')) || []
render()
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    //非空验证
    for (let i = 0; i < items.length; i++) {
        if (items[i].value === '') {
            return alert('输入内容不能为空！')
        }
    }


    //创建新对象
    const obj = {
        stuId: arr.length + 1,
        uname: uname.value,
        age: uage.value,
        gender: gender.value,
        city: city.value,

    }

    arr.push(obj)
    localStorage.setItem('arr', JSON.stringify(arr))
    //重置表单-清空
    this.reset()
    render()
})
//渲染函数
function render() {
    arr = JSON.parse(localStorage.getItem('arr')) || []
    //清空表
    tbody.innerHTML = ''


    const trArr = arr.map(function (ele, index) {

        return `
        <tr>
                <td>${ele.stuId}</td>
                <td>${ele.uname}</td>
                <td>${ele.age}</td>
                <td>${ele.gender}</td>
                <td>${ele.city}</td>
                <td><a href="javascript:" data-id=${index}>删除</a></td>
        </tr>
        `
    })
    // console.log(trArr);


    //新增数据
    tbody.innerHTML = trArr.join('')
}

//删除操作
tbody.addEventListener('click', function (e) {
    //清空表
    // tbody.innerHTML = ''

    if (e.target.tagName === 'A') {
        arr.splice(e.target.dataset.id, 1)
        localStorage.setItem('arr', JSON.stringify(arr))
    }
    render()
})
