window.dom = {
    //获取标签
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    //更改样式
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === "string") {
                return node.style[name]
            } else if (name instanceof Object) {
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    //遍历
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    }
}


const div = dom.find('.red')[0] // 获取对应的元素
dom.style(div, { border: '1px solid red', color: 'red' }) // 设置 div.style.color
const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素
