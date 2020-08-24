export default {
    title: 'Comment',
    name: 'ygrgComment',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', 'delete', 'publish'],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Author Name',
            name: 'authorName',
            type: 'string'
        },
        {
            title: 'Author ID',
            name: 'authorId',
            type: 'string'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'text'
        },
        {
            title: 'Text',
            name: 'textReference',
            type: 'reference',
            to: [{ type: 'ygrgText' }]
        },
        {
            title: 'Location',
            name: 'location',
            type: 'text'
        }
    ]
}
