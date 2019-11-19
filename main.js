Vue.component('coupon', {
    template: `<input placeholder="Enter coupon code" @blur="$emit('applied')">`,
})

new Vue({
    el: '#root',
    data: {
        couponApplied: false
    },
    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});

