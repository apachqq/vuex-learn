<template>
    <header class="navbar">
        <strong>Счетчик {{ counter }}</strong>
        <button class="btn" @click="add">Добавить 5</button>
    </header>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        methods: {
            ...mapMutations({
                addFive: 'add'
            }),
            add() {
                this.addFive({
                    value: 5
                })
                // this.add({
                //     value: 5
                // })
                // this.$store.commit('add', {
                //     value: 5
                // })
                //
                // Идентичные записи
                //
                // this.$store.commit({
                //     type: 'add',
                //     value: 5
                // })
            }
        },
        computed: {
            // counter() {
            //     return this.$store.getters.counter
            // },
            ...mapGetters(['counter'])
        }
    }
</script>

<style scoped>
</style>
