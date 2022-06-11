// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import product from './product'
import user from './user'
import order from './order'
import orderItems from './orderItems'
import shippingAddress from './shippingAddress'
import paymentResult from './paymentResult'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    product,
    user,
    order,
    orderItems,
    paymentResult,
    shippingAddress,

  ]),
})
