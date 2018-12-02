import moment from 'moment'

export const redirectMixin = {
    methods: {
        redirectTo(name) {
            this.$router.push({
                name
            })
        }
    }
}

export const DateMixin = {
    filters: {
        formatDate(str, outputFormat = 'YYYY-MM-DD HH:mm:ss') {
            return moment(str).format(outputFormat);
        },
        diffForHumans(str) {
            return moment(str).fromNow();
        }
    }
}