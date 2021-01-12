<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form 
                v-on:reloadList="getList()"
            />
        </div>
        <list-view 
            :items="items" 
            v-on:reloadList="getList()"
        />
    </div>
</template>

<script>
import addItemForm from "./addItemForm"
import listView from "./listView"

export default {
    components: {
        addItemForm,
        listView
    },
    data: function () {
        return {
            items: []
        }
    },
    methods: {
        getList() {
            axios.get('api/items')
            .then( response => {
                this.items = response.data
            })
            .catch( error => {
                console.log(error);
            })
        }
    },
    created() {
        this.getList();
    }
}
</script>

<style scoped>
.todoListContainer {
    width: 400px;
    margin: auto;
}

.heading {
    background: white;
    padding: 10px;
    margin-top: 60px;
    margin-bottom: 10px;
}

#title {
    text-align: center;
    font-family: sans-serif;
    font-size: 34px;
}

</style>