const tooltipDirective = (app) => {
    app.directive('tooltip', {
        mounted (el, binding) {
            init(el, binding)
        },
        updated (el, binding) {
            init(el, binding)
        }
    })
}

function init (el, binding) {
    let text, position
    const value = binding.value

    if (typeof value === 'string') {
        text = value
        position = 'top'
    } else if (typeof value === 'object') {
        if (value.visible !== false) {
            text = getContent(value.content) || ''
            position = value.position || 'top'
        }
    }

    el.setAttribute('position', position)
    el.setAttribute('tooltip', text)
}

function getContent (content) {
    if (typeof content === 'object') {
        return content.join('\n')
    }

    return content
}

export default tooltipDirective
