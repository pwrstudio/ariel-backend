export default {
    title: 'User Avatar',
    name: 'userAvatar',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', 'delete', 'publish'],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Image',
            name: 'image',
            type: 'string',
        }
    ],
    preview: {
        select: {
            title: 'title'
        }
    }
}
