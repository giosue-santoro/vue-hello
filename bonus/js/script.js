var app = new Vue ({
    el: '#root',
    data: {
        message : 'MESSAGGIO PROVA',
        linkImg : 'https://michelenasti.com/images/vuejs.png',
        myHtml : '<b>PROVA MESSAGGIO<b>'
    },
    methods : {
        react() {
            this.linkImg = 'https://img.icons8.com/ios-glyphs/452/react.png'; 
        },
        angular() {
            this.linkImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'; 
        },
        vue() {
            this.linkImg = 'https://michelenasti.com/images/vuejs.png'; 
        }
    }
})

Vue.config.devtools = true;