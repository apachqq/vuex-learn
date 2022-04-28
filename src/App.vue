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
</style>
