export default {
    title: 'Text',
    name: 'ygrgText',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Author(s)',
            name: 'authors',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ]
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            validation: Rule => Rule.required(),
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'caption',
                    type: 'text',
                    title: 'Caption'
                },
                {
                    name: 'attribution',
                    type: 'string',
                    title: 'Attribution'
                }

            ]
        },
        {
            title: 'PDF file',
            name: 'pdfFile',
            validation: Rule => Rule.required(),
            type: 'file'
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
                        decorators: [{ title: 'Strong', value: 'strong' }]
                    }
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
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
            }
        },
        {
            title: 'Related Texts',
            name: 'relatedTexts',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'ygrgText' }]
                }
            ]
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'image'
        }
    }
}
