export default {
    title: 'Program order',
    name: 'programOrder',
    type: 'document',
    fields: [
        {
            title: 'Order',
            name: 'order',
            type: 'array',
            options: {
                editModal: 'popover'
            },
            of: [
                {
                    title: 'Page',
                    name: 'pageLink',
                    type: 'reference',
                    to: [{ type: 'program' }]
                }
            ]
        },

    ]
}