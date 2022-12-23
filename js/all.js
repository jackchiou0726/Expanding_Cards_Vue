

const App = {
    data() {
        return {
            isPanel:true,
            current:0,
            player:[
                {
                    name:"Derek Fisher",
                    imgUrl:"./img/fisher.jpg"
                },
                {
                    name:"Kobe Bryant",
                    imgUrl:"./img/Kobe_Bryant_2014.jpg"
                },
                {
                    name:"Metta World Peace",
                    imgUrl:"./img/worldpeace.jpg"
                },
                {
                    name:"Lamar Odom",
                    imgUrl:"./img/odom.jpeg"
                },
                {
                    name:"Pau Gasol",
                    imgUrl:"./img/gasol.jpg"
                }
            ],
        }
    },
    methods: {
        addClass(index){
            this.current = index;
            console.log(index)
        }
    },

}

Vue.createApp(App).mount('#app')