export default {
    title: 'General Information',
    name: 'generalInformation',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Tagline',
            name: 'tagline',
            type: 'string'
        },
        {
            title: 'Address',
            name: 'address',
            type: 'text'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        }
    ]
}
