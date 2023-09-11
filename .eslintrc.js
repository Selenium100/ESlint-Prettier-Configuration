module.exports = {
   parserOptions:{
    ecmaVersion: 6,
    sourceType:"module",
   },
   "extends":[
   "eslint:recommended",
   "plugin:prettier/recommended"
   ],

   "rules":{
    "semi":[
        "error",
        "always"
    ]
    
   }
}