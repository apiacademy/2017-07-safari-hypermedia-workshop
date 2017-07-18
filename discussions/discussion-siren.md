# What is Different about Siren

## Advantages
 * clients are insulated from changes on the server side (ACTIONS)
 * already handles all the LINK (ADDRESS) elements we got from HAL
 * handle OAA challenge gracefully (client doesn't break outright)
 
## Drawbacks
 * JSON response is complex (including rendering for HTML UI)
 * verbosity/payload size
 * Doesn't carry the OBJECT meta data -- doesn't support UI display updates
