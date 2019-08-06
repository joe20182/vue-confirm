# vue-confirm
confirm popup global component

> usage:<br>
> clone this repo to your vue-cli project<br>
> and then in your main.js
> ```js
> import Confirm from './xxx/confirm'
> Vue.use(Confirm)
> ```
> in your vue components
> ```js
> /**
>  * this.$confirm(obj[, callback1, callback2])
>  * if you don't pass obj.cancelBtn, then there will be only submit button
>  */
> this.$confirm({
>     title: 'this is title',
>     content: 'contents here',
>     confirmBtn: 'submit text',
>     cancelBtn: 'cancel text'
> }, callbackSubmit, callbackCancel)
> ```
![img-1](https://github.com/joe20182/vue-confirm/blob/master/docs/confirm-1.JPG?raw=true)
![img-2](https://github.com/joe20182/vue-confirm/blob/master/docs/confirm-2.JPG?raw=true)
