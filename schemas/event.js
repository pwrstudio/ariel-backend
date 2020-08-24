export default {
    title: 'Event',
    name: 'event',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'array',
            validation: Rule => Rule.required(),
            of: [
                {
                    type: 'block',
                    styles: [],
                    lists: [],
                    marks: {
                        decorators: [],
                        annotations: []
                    }
                },
            ]
        },
        {
            title: 'Start date',
            name: 'startDate',
            type: 'datetime',
            validation: Rule => Rule.required()
        },
        {
            title: 'End date',
            name: 'endDate',
            type: 'datetime'
        },
        {
            title: 'Text',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [],
                    lists: [],
                    marks: {
                        decorators: [{ title: 'Strong', value: 'strong' }]
                    }
                },
            ]
        },
        {
            title: 'Slideshow',
            name: 'slideshow',
            type: 'array',
            description: 'Note that you can link an image to a specific text through the "Link to text" field in the pop-up.',
            options: {
                editModal: 'popover'
            },
            of: [
                {
                    title: 'Slide',
                    name: 'slide',
                    type: 'object',
                    fields: [
                        {
                            title: 'Image file',
                            type: 'image',
                            name: 'img',
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            title: 'Video link (youtube or vimeo)',
                            description: 'Enter the URL of the video. Eg.: https://www.youtube.com/watch?v=F64gQNdC8K0',
                            name: 'videoUrl',
                            type: 'string'
                        },
                        {
                            title: 'Link to text',
                            name: 'textLink',
                            type: 'reference',
                            to: [{ type: 'ygrgText' }]
                        },
                        {
                            title: 'Caption',
                            name: 'caption',
                            type: 'text'
                        }
                    ]
                },

            ]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            validation: Rule => Rule.required(),
            description: 'Press "Generate" to create slug based on title',
            options: {
                source: doc => {
                    console.dir(doc.title)
                    return doc.title && doc.title[0] && doc.title[0].children && doc.title[0].children[0] && doc.title[0].children[0].text ? doc.title[0].children[0].text
                        : 'Event ' + String(Date.now())
                },
                maxLength: 200, // will be ignored if slugify is set
            }
        }
    ],
    preview: {
        select: {
            blockTitle: 'title',
            startDate: 'startDate',
            endDate: 'endDate'
        },
        prepare(value) {
            const block = (value.blockTitle || []).find(block => block._type === 'block')
            return {
                title: block
                    ? block.children
                        .filter(child => child._type === 'span')
                        .map(span => span.text)
                        .join('')
                    : 'No title',
                subtitle: value.startDate.substring(0, 10) + ' – ' + value.endDate.substring(0, 10)
            }
        }
    },
    orderings: [
        {
            title: 'Start Date',
            name: 'eventDateAsc',
            by: [{ field: 'startDate', direction: 'desc' }]
        }
    ]
}
