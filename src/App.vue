<template>
    <the-navbar></the-navbar>
    <div class="container with-nav">
        <div class="card">
            <h1>Про Vuex</h1>
            <h2>Счетчик {{ $store.getters.counter }} ({{ $store.getters.doubleCounter }})</h2>
            <button class="btn primary" @click="add">Добавить</button>
            <button class="btn danger" @click="incrementAsync">Добавить 10</button>
        </div>
    </div>
</template>

<script>
    import TheNavbar from '@/components/TheNavbar'

    export default {
        components: {TheNavbar},

        methods: {
            add () {
                this.$store.commit('increment')
            },
            incrementAsync () {
                this.$store.dispatch('incrementAsync', {
                    value: 10,
                    delay: 200
                })
            }
        }
    }
</script>

<style>
</style>
