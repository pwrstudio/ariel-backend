// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Schemas
import generalInformation from './generalInformation'
import about from './about'
import reading from './reading'
import program from './program'
import event from './event'
import text from './text'
import comment from './comment'
import userAvatar from './userAvatar'
import programOrder from './programOrder'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    generalInformation,
    about,
    program,
    reading,
    text,
    event,
    comment,
    userAvatar,
    programOrder
  ])
})
