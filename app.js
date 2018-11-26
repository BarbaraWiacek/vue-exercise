const hello = new Vue({  
    el: '#helloVue', //which HTML element to attach to
    data: { //what to include in data binding
        title: "HELLOOOO",
        name: "user"
    }
});

const component1 = new Vue({  
    el: '#component', //which HTML element to attach to
    data: { //what to include in data binding
        text: "component data",
        img: {
            src: "https://placeimg.com/200/200/animals",
            alt: "A placeholder image of animals"
        }
    }
});

const book = new Vue ({
    el: '#book',
    data: {
        title: 'The Sirens of Titan',
        author: 'Hurt Vonnegut',
        summary: 'This is a summary',
        showDetail: false
    },
    methods: { //methods is a predefined vue object in which we can define any number of methods we wanna use
        sayHello: function() {
            alert(this.title); //this is used to acces the data object
        },
        toggleDetails: function() {
            this.showDetail = !this.showDetail;
        }
    }
});

const App = new Vue ({
    el: '#app',
    data: {
        title: "Welcome to Vue!",
        summary: "How to write an application in vue.js",
        thumbnail: "https://placeimg.com/75/75/any",
        alt: "Avatar of the author",
        votes: 0
    },
    methods: {
        increment: function() {
            this.votes++;
        },
        decrement: function() {
            if(this.votes > 0) {
                this.votes--;
            }
        }
    }
});

// COLORS

const colorsOfTheRainbow = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
];

const colors = new Vue ({
    el: "#colors",
    data: {
        rainbow: colorsOfTheRainbow
    }
});


// LIBRARY
const media = [
    {
      title: 'Hop on Pop', 
      description: "A delightful children's book.",
      type: 'book',
      contributor: 'Dr. Suess',
      showDetail: false,
    },
    {
      title: 'The Joy of Painting', 
      description: "Create a world of happy little trees!",
      type: 'DVD',
      contributor: 'Bob Ross',
      showDetail: false
    },
    {
      title: 'Supernatural: The Complete 12th Season', 
      description: "A (literally) neverending roadtrip.",
      type: 'DVD',
      contributor: "",
      showDetail: false
    },
    {
      title: 'Planet Earth II', 
      description: "Hours of beautiful but heart attack-inducing nature footage",
      type: 'streaming video',
      contributor: 'David Attenborough',
      showDetail: false,
    },
    {
      title: 'Titanic', 
      description: "The boat sinks.",
      type: 'DVD',
      contributor: 'James Cameron',
      showDetail: false,
    },
    {
      title: 'The Sirens of Titan', 
      description: "Mankind flung its advance agents ever outward, ever outward... it flung them like stones.",
      type: 'book',
      contributor: 'Kurt Vonnegut',
      showDetail: false,
    },
    {
      title: 'Better Call Saul', 
      description: "A slow-burning Breaking Bad prequel.",
      type: 'streaming video',
      contributor: '',
      showDetail: false,
    }
  ]

const library = new Vue({
    el: '#media-list',
    data: {
      title: 'Treehouse Public Library',
      mediaList: media,
      selectedType: ''
    },
    methods: {
        toggleDetails: function(media) {
            media.showDetail = !media.showDetail;
        },
        filterList: function() {
            this.selectedType = event.target.value;
            // vue automatically provides us with the event object, which we can then access without providing it in the parameters of the function
        }
    },
    computed: {
        //computed properties run immediately, whereas methods run when they are explicitly called, and only update when the data changes. these properties are then cached in the browser
        uniqueItemsList: function () {
            const types = [];
            this.mediaList.forEach( function (item) {
                if (!types.includes(item.type)) {
                    types.push(item.type);
                }
            });
            return types;
        }
    }
  });