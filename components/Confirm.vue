<template>
    <transition name="fade">
        <div class="confirm-mask"></div>
        <div class="confirm-wrapper">
            <div class="confirm-header">
                <h5>{{title}}</h5>
                <!-- close img -->
            </div>
            <div class="confirm-content" :class="{'showCancel': cancelBtn}">
                <p v-html="content"></p>
                <button class="cancel" v-if="cancelBtn" @click="preClose">{{cancelBtn}}</button>
                <button @click="confirm">{{confirmBtn}}</button>
            </div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active {
    animation: fadeIn .5s;
}
.fade-leave-active {
    animation: fadeOut .5s;
}
@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.confirm-mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.6);
    z-index: 99;
}
.confirm-wrapper {
    width: 494px;
    background-color: #f9f9f9;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    .confirm-header {
        position: relative;
        background-image: linear-gradient(to right, #f1f1f4, #dfe0e4);
        h5 {
            margin: 0;
            line-height: 50px;
            font-size: 16px;
            color: #7f7f7f;
            text-align: center;
        }
        img {
            position: absolute;
            top: 12px;
            right: 12px;
            cursor: pointer;
        }
    }
    .confirm-content {
        padding: 36px 0;
        text-align: center;
        p {
            font-size: 20px;
            font-weight: bold;
            margin: 0 0 36px;
        }
        button {
            cursor: pointer;
            display: inline-block;
            margin: 0 auto;
            color: #fff;
            width: 350px;
            height: 50px;
            border: none;
            font-size: 16px;
            font-weight: bold;
            background-image: linear-gradient(135deg, #eb5d4d, #fb2464);
        }
        &.showCancel {
            button {
                width: 181px;
                &.cancel {
                    color: #7f7f7f;
                    background-color: transparent;
                    background-image: none;
                    border: 1px solid rgba(24,24,24,.1);
                    margin-right: 36px;
                }
            }
        }
    }
}
</style>
