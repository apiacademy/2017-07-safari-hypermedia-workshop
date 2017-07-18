    "add": {
      "href": "http://api.example.org/todo-list/",
      "prompt": "Add ToDo",
      "rel": [
        "create-form"
      ],
      "method": "POST",
      "args": {
        "title": {
          "value": "",
          "prompt": "Title",
          "required": true
        },
        "email": {
          "value": "",
          "prompt": "Email",
          "required": false
        },
        "completed": {
          "value": "false",
          "prompt": "Completed",
          "pattern": "^(true|false)$"
        }
      }
