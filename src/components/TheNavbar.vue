<template>
    <header class="navbar">
        <strong>Счетчик {{ counter }}</strong>
        <button class="btn" @click="add">Добавить 5</button>
    </header>
</template>

<script>
    export default {
        methods: {
            add() {
                // this.$store.commit('add', {
                //     value: 5
                // })
                //
                // Идентичные записи
                //
                this.$store.commit({
                    type: 'add',
                    value: 5
                })
            }
        },
        computed: {
            counter() {
                return this.$store.getters.counter
            }
        }
    }
</script>

<style scoped>
</style>
