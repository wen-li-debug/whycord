import Toast from './Toast'

const obj = {}

obj.install = function(Vue) {
    //1.创建构造器
    const toastContructor = Vue.extend(Toast);

    //创建一个组件对象
    const toast = new toastContructor();

    //将组件对象挂载到某个元素上
    toast.$mount(document.createElement('div'));

    //将创建好的toast放到body元素上去
    document.body.appendChild(toast.$el);

    //将Toast 添加到vue原型
    Vue.prototype.$toast = toast;
}


export default obj;