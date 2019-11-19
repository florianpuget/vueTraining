new Vue({
    el: '#root',
    data: {
        users: [
            { name: "Ewa", age: "31", brands: "a, b, c" },
            { name: "Flo", age: "31", brands: "d, e, f" }
        ],
        newUser: { name: "", age: "", brands: ""},
        currentUser: {},
    },
    methods: {
        addUser() {
            this.users.push(this.newUser);
            this.newUser = { name: "", age: "", brands: ""};
        },
        setUser(index) {
            this.currentUser = this.users[index];
        }
    }
});