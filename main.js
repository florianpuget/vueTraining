Vue.component('progress-view', {
    // no template here, see inline-template in the html
    data()  {
        return { completionRate: 0 };
    }
})

new Vue({
    el: '#root',
});

