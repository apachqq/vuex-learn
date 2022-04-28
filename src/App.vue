<template>
    <the-navbar></the-navbar>
    <div class="container with-nav">
        <div class="card">
            <h1>{{ uppercaseTitle }}</h1>
            <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
            <button class="btn primary" @click="add">Добавить</button>
            <button class="btn danger" @click="incrementAsync({value: 10, delay: 200})">Добавить 10</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations, mapActions } from 'vuex'
    import TheNavbar from '@/components/TheNavbar'

    export default {
        components: {TheNavbar},
        computed: {
            ...mapGetters(['counter', 'doubleCounter', 'uppercaseTitle'])
        },
        methods: {
            ...mapMutations({add: 'increment'}),
            ...mapActions(['incrementAsync'])
            // incrementAsync() {
            //     this.$store.dispatch('incrementAsync', {
            //         value: 10,
            //         delay: 200
            //     })
            // }
        }
    }
</script>

<style>

    .btn {
        color: #42b983;
        position: relative;
        place-content: center;
        place-items: center;
        width: fit-content;
        border-radius: 99px;
        letter-spacing: 0.05em;
        border: 1px solid #42b983;
        text-decoration: none;
        text-transform: uppercase;
        margin-right: 10px;
        padding: 0.5rem 1.5rem;
        white-space: nowrap;
        font-weight: 700;
        outline: none;
        background: #fff;
        transition: all 0.22s;
    }

    .btn:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    .btn:disabled {
        cursor: not-allowed;
        opacity: 1!important;
        background: #eee!important;
        border-color: #ddd!important;
        color: #999!important;
    }

    .btn:active {
        box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
    }

    .btn.primary {
        background: #42b983;
        color: #fff;
    }

    .btn.danger {
        background: #e53935;
        color: #fff;
        border-color: #e53935;
    }

    .btn.warning {
        background: #c25205;
        color: #fff;
        border-color: #c25205;
    }

    .container {
        margin: 0 auto;
        max-width: 1000px;
    }

    .container.with-nav {
        margin-top: 70px;
    }

    .card {
        overflow: hidden;
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 10px;
        box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
        background: #fff;
    }

    .card.marked {
        border: 4px solid #42b983;
    }

    .card.center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    hr {
        margin: 1rem 0;
    }

    strong,
    .bold {
        font-weight: 500;
    }

    ol,
    p,
    ul {
        line-height: 1.7;
    }

    a {
        color: #3eaf7c;
        font-weight: 500;
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 500;
        line-height: 1.45;
    }

    h1 {
        font-size: 2.2rem;
        font-weight: 600;
    }

    h2 {
        font-size: 1.65rem;
        padding-bottom: 0.3rem;
        border-bottom: 1px solid #eaecef;
    }

    h3 {
        font-size: 1.35rem;
    }

</style>
