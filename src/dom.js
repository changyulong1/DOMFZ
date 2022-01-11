window.dom = {
    //创建节点
    create(string) {
        const container = document.createElement('template')//template可容纳任何标签
        container.innerHTML = string.trim()
        //查找template模板.content是只读属性包含模板中所有DON树
        return container.content.firstChild
    },
    //新增弟弟几点
    //insertBefore() 方法可在已有的子节点前插入一个新的子节点
    after(node, node1) {
        node.parentNode.insertBefore(node1, node.nextSibling)
    },
    //邢增哥哥节点
    before(node, node1) {
        node.parentNode.insertBefore(node1, node)
    },
    //新增儿子节点
    append(parent, node) {
        parent.appendChild(node)
    },
    //新增一个爸爸
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },
    //删除节点
    remove(node) {
        node.remove()
        return node
    },
    //删除所有后代
    empty(node) {
        const array = []
        let n = node.firstChild
        while (n) {
            array.push(dom.remove(node.firstChild))
            n = node.firstChild
        }
        return array
    },
    //改属性
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return getAttribute(name)
        }
    },
    //改文本内容
    text(node, string) {
        if (arguments.length === 2) {
            if ("innerText" in node) {
                node.innerText = string
            } else {
                node.innerContent = string
            }
        } else if (arguments.length === 1) {
            if ("innerText" in node) {
                console.log("我是小工")
                return node.innerText
            } else {
                return node.innerContent
            }
        }
    },
    //改HTML内容
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    //改写演示
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value
        } else if (arguments.length == 2) {
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
    //添加class
    class: {
        //添加class
        add(node, value) {
            node.classList.add(value)
        },
        //删除class
        remove(node, className) {
            node.classList.remove(className)
        },
        //判断是否有class
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    //添加监听事件
    on(node, eventName, fn) {
        console.log(333)
        node.addEventListener(eventName, fn)
    },
    //删除事件
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    //获取标签
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    //获取父节点
    parent(node) {
        return node.parentNode
    },
    //获取子节点
    children(node) {
        return node.children
    },
    //获取兄弟姐妹节点
    siblings(node) {
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },
    //获取弟弟
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            console.log(666)
            x = x.nextSibling
        }
        return x
    },
    //获取哥哥
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
            console.log(x)
        }
        return x
    },
    //遍历所有节点
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    //排行老几
    index(node) {
        console.log('----------')
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }


}