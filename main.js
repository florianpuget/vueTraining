// Using a vue instance to handle events, which is accessible from any component 
// and allows parent<>child or siblings communication
window.Event = new Vue();

Vue.component('coupon', {
    template: `<input placeholder="Enter coupon code" @blur="onCouponApplied">`,
    methods: {
        onCouponApplied() {
            Event.$emit('applied')
        }
    }
})

new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    created() {
        Event.$on('applied', () => this.couponApplied = true);
    }
});

