# CRUD Advantages and Drawbacks

## Advantages
 * CRUD is *easy* 
 * Lots of libraries
 * Out-of-the-box support
 * Lots of *good practices* and *conventions*
 * Reading data from server is super safe/easy
 * Discourages fine-grained RPC w/ methods are used correctly
 * CRUD quick to build (Swagger, RAML, Blueprint)
 
## Drawbacks
 * No mexhanism for extending operations (making changes? something else?)
 * Creating linked objects/graphs becomes complex 
 * Focused on data storage/manipulation
 * Domain objects often have more verbs/actions than simple CRUD
 * No media types to define to semantics of representation (no metadata about the stuff)
 * Hard to ensure developers _follow/understand_ the good practices and conventions
 * Bikeshedding (URLs, return-codes, methods)
 * Requires lots of documentation (beyond simple read)
 
