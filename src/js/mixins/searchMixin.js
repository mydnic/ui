const searchMixin = {
    methods: {
        searchHasResult (searchable, query) {
            const terms = query ? query.split(' ') : []
            const matches = []
            let stop = false

            terms.forEach((term) => {
                const termResults = []
                searchable.forEach((word) => {
                    if (word) {
                        const result = word
                            .toLowerCase()
                            .includes(term ? term.toLowerCase() : '')
                        if (result) { termResults.push(result) }
                        matches.push(result)
                    }
                })

                if (termResults.length === 0) {
                    stop = true
                }
            })
            if (stop) {
                return false
            }
            return matches.filter(m => m).length >= terms.length
        }
    }
}

export default searchMixin
