var lex_schema = {
    type: "array",
    items: {
	type: "object",
	title: "Entry",
	properties: {
	    id: {type: "integer"},
	    lexiconId: {type: "integer"},
	    strn: {type: "string"},
            language: {
              type: "string",
              enum: [
                "sv-se",
                "en-us",
                "ar",
                "no-nb"
              ]
            },
            partOfSpeech: { type: "string" },
            morphology: { type: "string" },
            wordParts: {type: "string" },
	    lemma: {
		type: "object",
		properties: {
		    id: { type: "integer" },
		    strn: { type: "string" },
		    reading: { type: "string" },
		    paradigm: { type: "string" }
		}
	    },
	    transcriptions: {
		type: "array",
		//format: "table",
		//title: "Transcriptions",
		uniqueItems: false,
		items: {
		    type: "object",
		    properties: {
			id: { type: "integer" },
			entryId: { type: "integer" },
			strn: { type: "string" },
			language: {
			    type: "string",
			    enum: [
				"sv-se",
				"en-us",
				"ar",
				"no-nb"
			    ]
			},
			sources: { type: "array" }
		    }
		}
			
	    },
	    status: {
		type: "object",
		//format: "table",
		//title: "Status",
		properties: {
		    id: { type: "integer" },
		    name: {
			type: "string",
			enum: ["imported","unchecked", "ok", "delete"]		    
		    },
		    source: { type: "string" },
		    timestamp: { type: "string" },
		    current: {type: "boolean" }
		}
	    },
	    entryValidations: { type: "array" }
        }
    }
};

var starting_value = [
    {
	id: 75346,
	lexiconId: 1,
	strn: "apa",
	language: "sv-se",
	partOfSpeech: "NN",
	morphology: "SIN|IND|NOM|UTR",
	wordParts: "apa",
	lemma: {
	    id: 8881,
	    strn: "apa",
	    reading: "3694",
	    paradigm: "s1a-flicka"
	},
	transcriptions: [
	    {
		id: 80713,
		entryId: 75346,
		strn: "\"\"A:$pa",
		language: "sv-se",
		sources: [ ]
	    },
	    {
		id: 80714,
		entryId: 75347,
		strn: "\"\"a$pA:",
		language: "sv-se",
		sources: [ ]
	    }
	],
	status: {
	    id: 75346,
	    name: "imported",
	    source: "nst",
	    timestamp: "2016-06-17T08:14:57Z",
	    current: true
	},
	entryValidations: [ ]
    }
];
    
var entry_editor = new JSONEditor(document.getElementById('entry_editor_holder'),{

    startval: starting_value,
    schema: lex_schema

});
      
// Hook up the submit button to log to the console
//document.getElementById('submit').addEventListener('click',function() {
    // Get the value from the editor
//    console.log(editor.getValue());
//});
