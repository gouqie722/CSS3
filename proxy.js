var obj = {
    age: 12,
    b: 34,
    obj: {
        name: '苟且',
        age: 21
    },
    list: [{a: 'name', age: 10}]
}

var targetObj = {}

function observer(originObj, targetObj, prop) {
    if (type(originObj[prop]) === 'Object') {
        console.log(originObj[prop])
        proxy(originObj[prop], targetObj[prop] = {})
    } else {
        Object.defineProperty(targetObj, prop, {
            enumerable: true,
            get () {
                originObj[prop]
            },
            set (val) {
                console.log(prop)
                originObj[prop] = val
            }
        })
    }
}

function type(val) {
    return Object.prototype.toString.call(val).slice(8, -1)
}

function proxy(originalObj, targetObj) {
    for (var prop in originalObj) {
        observer(originalObj, targetObj, prop)
    }
}

proxy(obj, targetObj)
