export default {
    title: 'Reading',
    name: 'reading',
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
            title: 'Date and time',
            name: 'startDate',
            type: 'datetime',
            validation: Rule => Rule.required()
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [],
                    lists: [],
                    marks: {
                        decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Italic', value: 'italic' }]
                    }
                }
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
                            title: 'Image',
                            type: 'image',
                            name: 'img',
                            options: {
                                hotspot: true
                            },
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
                        : 'Reading ' + String(Date.now())
                },
                maxLength: 200, // will be ignored if slugify is set
            }
        }
    ],
    preview: {
        select: {
            blockTitle: 'title',
            startDate: 'date'
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
                subtitle: value.startDate ? value.startDate.substring(0, 10) : ''
            }
        }
    },
    orderings: [
        {
            title: 'Event Date',
            name: 'dateAsc',
            by: [{ field: 'date', direction: 'asc' }]
        }
    ]
}
