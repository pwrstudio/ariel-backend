import S from '@sanity/desk-tool/structure-builder'
import Description from 'react-icons/lib/md/description'
import Event from 'react-icons/lib/md/event'
import Book from 'react-icons/lib/md/book'
import Comment from 'react-icons/lib/md/comment'
import Face from 'react-icons/lib/md/sentiment-neutral'
import Order from 'react-icons/lib/md/reorder'

export default () =>
    S.list()
        .title('arielfeminisms.dk')
        .items([
            S.listItem()
                .title('General Information')
                .icon(Description)
                .child(
                    S.editor()
                        .title('General Information & settings')
                        .schemaType('generalInformation')
                        .documentId('generalInformation')
                ),
            S.listItem()
                .title('Ariel')
                .child(
                    S.list()
                        .title('Ariel')
                        .items([
                            S.listItem()
                                .title('About')
                                .icon(Description)
                                .child(
                                    S.editor()
                                        .title('About Ariel')
                                        .schemaType('about')
                                        .documentId('aboutAriel')
                                ),
                            S.listItem()
                                .title('Program')
                                .icon(Event)
                                .schemaType('program')
                                .child(S.documentTypeList('program').title('Program')),
                            S.listItem()
                                .title('Program order')
                                .icon(Order)
                                .child(
                                    S.editor()
                                        .title('Program order')
                                        .schemaType('programOrder')
                                        .documentId('383ec65c-0b94-453a-b6a1-ddd8fcaa39bd')
                                ),
                        ])
                ),
            S.listItem()
                .title('Ari')
                .child(
                    S.list()
                        .title('Ari')
                        .items([
                            S.listItem()
                                .title('About')
                                .icon(Description)
                                .child(
                                    S.editor()
                                        .title('About Ari')
                                        .schemaType('about')
                                        .documentId('aboutAri')
                                ),
                            S.listItem()
                                .title('Readings')
                                .icon(Event)
                                .schemaType('reading')
                                .child(S.documentTypeList('reading').title('Reading')),
                        ])
                ),
            S.listItem()
                .title('YGRG')
                .child(
                    S.list()
                        .title('Young Girl Reading Group')
                        .items([
                            S.listItem()
                                .title('About')
                                .icon(Description)
                                .child(
                                    S.editor()
                                        .title('About Young Girl Reading Group')
                                        .schemaType('about')
                                        .documentId('aboutYGRG')
                                ),
                            S.listItem()
                                .title('Texts')
                                .icon(Book)
                                .schemaType('ygrgText')
                                .child(S.documentTypeList('ygrgText').title('Texts')),
                            S.listItem()
                                .title('Events')
                                .icon(Event)
                                .schemaType('event')
                                .child(S.documentTypeList('event').title('Events')),
                            S.listItem()
                                .title('Comments')
                                .icon(Comment)
                                .schemaType('ygrgComment')
                                .child(S.documentTypeList('ygrgComment').title('Comments')),
                            S.listItem()
                                .title('Avatars')
                                .icon(Face)
                                .schemaType('userAvatar')
                                .child(S.documentTypeList('userAvatar').title('Avatars')),
                        ])
                ),
        ])