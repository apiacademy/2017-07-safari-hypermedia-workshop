# POD Spec Discussion

```javascript
{
  "user" : {
    "id" : {"prompt" : "ID", "render" : "none"},
    "nick" : {"prompt" : "Nickname", "render" : "text"},
    "email" : {"prompt" : "Email", "render" : "text"},
    "name" : {"prompt" : "Full Name", "render" : "text"},
    "password" : {"prompt" : "Password", "render" : "text"},
    "dateCreated" : {"prompt" : "Date Created", "render" : "none"},
    "dateUpdated" : {"prompt" : "Date Updated", "render" : "none"}
  }
}
```

## Suggested additional properties

 * Expanding the values for `render`
 * order of display (numerical? string?)
 * display mask ($#,###.##, YYYY0-MMM-DD, etc.)
 * handle array of properties???
 * possibly switch from dictionary to array format
 * display length of the data ("show first 50 chars", etc.)
 * display height/width (images, text windows[textarea])
 * CSS class or style or some other "open use field"
 
## Other Good Ideas
 * enumerables (for templates/forms?)
 * versioning on the fields (client can decide which to display)
  

## Template Controls/Improvements
 * all the attributes of HTML INPUT could be added to template attributes
 * section in the response that holds common lists or lookup tables for use throughout the display.
 
  
