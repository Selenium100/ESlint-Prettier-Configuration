# Configure ESlint and Prettier


__ESLint__

Eslint is uded to find error in code.

1. Install Eslint - npm i eslint -D
2. We need to create one configuration file for Eslint, where we can add all rules. So create a file .eslintrc.js

__Create Rule__
To create a rule, we need to add the following file: .eslintrc.js at root of project folder.

Example:

module.exports = {
    "rules":{
        "semi":[
            "error",
            "always"

        ]
    }
}

This will tell that if there's no semicolon after variable declaration it should be added automatically by linter (eslint). Or its will give error.

3. You can create one ".eslintignore" file and add specify there which file you don't want to lint. Ex: .eslintrc.js


__Create Configuration__

1. You can use Eslint recommended configuration. Configuration is collection od rules.

Example:

module.exports = {
    "extends":[
        "eslint: recommended"
    ]
}

2. To lint ES6 also, You have to use below configuration:

module.exports = {
    parserOptions:{
        ecmaVersion:6,
        sourceType:"module"
    },

    "extends":[
        "eslint: recommended"
    ]
}

3. Download Eslint extension in Vscode. Then autimativally it will detect eslint errors in editor itself.


__Plugin: Create Plugin__

1. There are some plugins aviliable which are specific for some frameworks. Like: React, Cypress.
2. We can use react plugin like below:

module.exports = {
    parserOptions:{
        ecmaVersion:6,
        sourceType:"module",
        ecmaFeatures:{
            jsx:true
        },
        "plugins":["react"],
    },

    "extends":[
        "eslint: recommended"
    ]
}



__Prettier__

1. Prettier is normally user for formating of code purpose.
2. Install Prettier - npm i prettier --save-dev
3. Create a file .prettierrc.js and define all rules. You can refer Prettier playground link - https://prettier.io/playground/

Example:

module.exports={
    
        "arrowParens": "always",
        "bracketSameLine": false,
        "bracketSpacing": true,
        "semi": true,
        "singleQuote": false,
        "jsxSingleQuote": false,
        "quoteProps": "as-needed",
        "trailingComma": "all",
        "singleAttributePerLine": false,
        "htmlWhitespaceSensitivity": "css",
        "vueIndentScriptAndStyle": false,
        "proseWrap": "preserve",
        "insertPragma": false,
        "printWidth": 80,
        "requirePragma": false,
        "tabWidth": 2,
        "useTabs": false,
        "embeddedLanguageFormatting": "auto"
      }



**NOTE**

1. To use Eslint and Prettier together and withput conflict, then we should use below packages:

      1. eslint-config-prettier
      2. eslint-plugin-prettier

2. Install these two packages - npm i eslint-config-prettier eslint-plugin-prettier -D
3. Add in .eslintrc.js

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

4. Now we need to run only "eslint ." command and all errors related to Eslint and Prettier will display all together.


__Pre Commit Hooks__

1. Pre commit hooks are the actions which are performed before commit.
2. We can perform some checks on code like linting or testing etc..
3. It is very useful to prevent bad commits from being pushed into git repository by performing precommit hooks.
3. In order to install precommit hook for git , run this command :
git config --global core.hooksPath .githooks
4. Now create a file named husky.sh inside githooks folder (inside project root)
5. Copy paste following script into it
#!/bin/bash
npm test && echo "\033[92mAll tests passed\033[0m" || exit $?
6. Make sure that you have added execute permission by running chmod +x ./husky.sh

__Run lint-staged__

1. lint-staged package is used to lint only the changed files, Not all the files.
2. Install lint-staged package - npx mrm lint-staged
3. It will install husky and lint-staged package.

use below line in package.json:

"husky":{
    "hooks":{
      "pre-commit":"lint-staged",
      "per-push":"npm run lint"
    }
  },
"lint-staged":{
    "*.{js,json,jsx}":"eslint --cache --fix"
}

4. You can add "--no-verify" with commit to skip lint-staged pre commit hook. But its not recommended.







