import vue from 'vue'
import Confirm from './components/Confirm'

const ConfirmConstructor = vue.extend(Confirm);

/**
 * usage:
 * import registryConfirm from '...'
 * Vue.use(registryConfirm)
 * 
 * this.$confirm(obj, callback)
 */
function showConfirm(data, callback, callback2) {
    let title = data.title ? data.title : '溫馨提示';
    let content = data.content ? data.content : '';
    let confirmBtn = data.confirmBtn ? data.confirmBtn : '確定';
    let cancelBtn = data.cancelBtn ? data.cancelBtn : null;

    const confirmDom = new ConfirmConstructor({
        el: document.createElement('div'),
        data() {
            return {
                title,
                content,
                confirmBtn,
                cancelBtn,
                show: false
            }
        },
        watch: {
            show(val) {
                if (val === true) {
                    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                } else {
                    document.getElementsByTagName('body')[0].style.overflow = 'auto';
                }
            }
        },
        mounted() {
            setTimeout(() => {
                this.show = true;
            }, 100);
        },
        methods: {
            close() {
                this.show = false;
                // 避免dom一直疊加
                setTimeout(() => {
                    document.body.removeChild(confirmDom.$el);
                }, 100);
            },
            confirm() {
                if (callback && typeof callback == 'function') {
                    callback();
                    this.close();
                } else {
                    this.close();
                }
            },
            preClose() {
                if (callback2 && typeof callback2 == 'function') {
                    callback2();
                    this.close();
                } else {
                    this.close();
                }
            }
        }
    });

    document.body.appendChild(confirmDom.$el);
}

function registryConfirm() {
    vue.prototype.$confirm = showConfirm;
}

export default registryConfirm