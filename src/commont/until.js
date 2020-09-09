//设置防抖
export function debounce(func, day) {
    let time = null;
    return function(...args) {
        if (time) clearTimeout(time);
        time = setTimeout(() => {
            func.apply(this, args);
        }, day);
    };
}

//解析时间
export function formatDate(date, fmt) {
    //y+ 表示1个y或者多个  RegExp.$1表示date   fmt表示格式
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

//用于处理时间时秒加0  03:02
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};