import React from 'react'
import ReactDOM from 'react-dom'
import Tree from 'tree-creator-bp';

let customData = [
    {
        "id": "1.0",
        "title": "character",
        "description": "A Player Character or Non Player Character",
        "children": [
            {
                "id": "1.1",
                "title": "health",
                "description": "The hit points for the character, this should be a positive integer, once this hits zero the character is dead"
            },
            {
                "id": "1.2",
                "title": "mana",
                "description": "The mana points for the character, this should be a positive integer, this resource is gained draining a lake, and spent by casting spells"
            },
            {
                "id": "1.3",
                "title": "buffs",
                "description": "an array of buffs",
                "children": [
                    {
                        "id": "1.3.1",
                        "title": "on fire",
                        "description": "means you hit super hard",
                    }
                ]
            },
            {
                "id": "1.4",
                "title": "debuffs",
                "description": "an array of buffs",
                "children": [
                    {
                        "id": "1.4.1",
                        "title": "burny burny",
                        "description": "means you are on fire, but not in good way,ouch",
                    }
                ]
            }
        ]
    },
    {
        "id": "2.0",
        "title": "spell",
        "description": "s powerful damaging spell"
    }
];

ReactDOM.render(<Tree data={customData}/>, document.getElementById('root'));
