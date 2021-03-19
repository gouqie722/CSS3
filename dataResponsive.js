/**
 * 代理函数
 * @param {*} originObj 
 * @param {*} targetObj 
 * @param {*} prop 属性
 * @param {*} callback 
 */
function proxProp(originObj, targetObj, prop, callback) {
    if(typeof originObj[prop] == 'object') {
        // 如果原始对象的属性是引用值
        var newTarget = {}
        createResponsive(originObj[prop], newTarget, function(propName) {
            callback(prop + '.' + propName);
        });
        Object.defineProperty(targetObj, prop, {
            get: function() {
                return newTarget
            },
            set: function(value) {
                newTarget = value;
                callback && callback(prop)
            }
        })
    }else {
        // 如果原始对象的属性是原始值
        Object.defineProperty(targetObj, prop, {
            get: function() {
                return originObj[prop];
            },
            set: function(value) {
                originObj[prop] = value;
                callback && callback(prop);
            }
        })
    }
}

/**
 * 将原始对象的属性提取到代理对象中
 * @param {*} originObj 原始对象
 * @param {*} targetObj 代理对象
 * @param {*} callback 原始对象的属性值改变时，需要执行的回调函数
 */
export default function createResponsive(originObj, targetObj, callback) {
    for(var prop in originObj) {
        proxProp(originObj, targetObj, prop, callback);
    }
}