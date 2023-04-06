export const downloadErrorInterceptor = (error) => {
    if (
        error.request &&
        error.request.responseType === 'blob' &&
        error.response.data instanceof Blob &&
        error.response.data.type &&
        error.response.data.type.toLowerCase().includes('json')
    ) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => {
                error.response.data = JSON.parse(reader.result)
                resolve(Promise.reject(error))
            }

            reader.onerror = () => {
                reject(error)
            }

            reader.readAsText(error.response.data)
        })
    }

    return Promise.reject(error)
}
