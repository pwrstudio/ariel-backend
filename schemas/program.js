export default {
    title: 'Program',
    name: 'program',
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
            title: 'Artist(s)',
            name: 'artists',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
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
            type: 'datetime',
            validation: Rule => Rule.required()
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
                            title: 'Image',
                            type: 'image',
                            name: 'img',
                            options: {
                                hotspot: true
                            },
                        },
                        {
                            title: 'Video link (youtube or vimeo)',
                            name: 'videoUrl',
                            type: 'string'
                        },
                        {
                            title: 'Caption',
                            name: 'caption',
                            type: 'text',
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
                        : 'Program ' + String(Date.now())
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
            title: 'Event Date',
            name: 'eventDateAsc',
            by: [{ field: 'startDate', direction: 'asc' }]
        }
    ]
}
