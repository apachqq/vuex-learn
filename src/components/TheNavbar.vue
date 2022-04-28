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

    .navbar {
        display: flex;
        padding: 0 2rem;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        z-index: 20;
        top: 0;
        left: 0;
        right: 0;
        height: 56px;
        background-color: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #eaecef;
    }

</style>
