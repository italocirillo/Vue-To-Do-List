const { createApp } = Vue;

createApp({
    data(){
        return{
            toDoList : [
                {
                    text : "fare la spesa",
                    done : true,
                },
                {
                    text : "fare gli esercizi",
                    done : true,
                },
                {
                    text : "portare fuori il cane",
                    done : false,
                },
                {
                    text : "leggere il libro",
                    done : true,
                },

            ]
        }
    },
    methods:{
        
    }
}).mount("#app");
