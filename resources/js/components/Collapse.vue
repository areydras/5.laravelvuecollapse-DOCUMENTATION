<template>
    <div class="container">
        <section class="section" id="root">
        <div class="container">
            <h1 class="title">Vue2 + Bulma collapse example</h1>
            <hr />
            
            <a class="button is-primary" @click="expandAll">
            Close All
            </a>
            
            <br />
            <br />

            <div class="columns is-multiline">
            <Accordion title="Test 1" @expand="expandAll">
                <p>Stuff 1</p>
            </Accordion>
            <Accordion title="Test 2" @expand="expandAll">
                <p>Stuff 2</p>
            </Accordion>
            <Accordion title="Test 3" @expand="expandAll">
                <p>Stuff 3</p>
            </Accordion>
            <Accordion title="Test 4" @expand="expandAll">
                <p>Stuff 4</p>
            </Accordion>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
        const Accordion = Vue.component("Accordion", {
        props: ["title", "expandAll"],
        data() {
            return {
            "expanded": false
            }
        },
        methods: {
            toggleCardState() {
            this.expanded = !this.expanded;
            },
            closeAll() {
            this.expanded = false;
            }
        },
        created() {
            EventBus.$on("closeAll", this.closeAll);
        },
        template: `
            <div class="column is-half">
            <div class="card" :class="{ 'not-expanded': !this.expanded }">

                <header class="card-header" @click="toggleCardState">
                <p class="card-header-title">
                    {{title}}
                </p>
                <a class="card-header-icon">
                    <span class="icon">
                    <i class="fa fa-angle-up"></i>
                    </span>
                </a>
                </header>

                <div class="card-content">
                <div class="content">
                    <slot></slot>
                </div>
                </div>

            </div>
            </div>
        `
        });

        const EventBus = new Vue();

        const App = new Vue({
        el: "#root",
        components: {
            Accordion
        },
        methods: {
            expandAll() {
            EventBus.$emit("closeAll");
            }
        }
        });
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
