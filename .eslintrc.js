module.exports = {
    env: {
        es6: true,
        node: true,
    },
    "extends": [
        "plugin:@dword-design/import-alias/recommended", // Adopts recommended settings for managing import aliases, ensuring consistent and readable import statements.
        "plugin:@typescript-eslint/recommended", // Enables a core set of rules recommended for TypeScript, promoting type safety and developer productivity.
        "plugin:@typescript-eslint/recommended-requiring-type-checking", // Extends TypeScript linting with rules that require type information, further enhancing type safety and code quality.
        "prettier", // Ensures your codebase adheres to Prettier's formatting rules, promoting consistency across your code.
        "plugin:prettier/recommended", // Integrates Prettier's auto-formatting capabilities with ESLint, allowing linting errors to include formatting issues.
        "plugin:unicorn/recommended", // Enforces a set of opinionated but beneficial rules to catch common mistakes and improve code readability and maintainability.
        "plugin:sonarjs/recommended", // Applies rules to prevent bugs and suspicious code patterns, leveraging SonarJS's expertise in code quality.
        "plugin:perfectionist/recommended-alphabetical", // Adopts a perfectionist approach to code quality, with an emphasis on alphabetical ordering for declarations and imports.
        "plugin:sort-decorators/strict" // Enforces strict ordering of decorators, ensuring consistency and readability in decorator usage.
    ],
    ignorePatterns: [".eslintrc.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        project: "tsconfig.json",
        sourceType: "module",
        tsconfigRootDir: __dirname,
    },
    plugins: [
        "@typescript-eslint", // Provides linting rules for TypeScript, including type-specific checks and TypeScript syntax.
        "prettier", // Integrates Prettier formatting rules into ESLint, allowing code formatting issues to be reported as lint errors.
        "import", // Provides linting rules related to ES6+ import/export syntax, helping manage module imports and ensuring they are correct and used.
        "unused-imports", // Detects and removes unused imports, keeping the codebase clean and efficient.
        "unicorn", // Contains various JavaScript rules that encourage good coding practices and aim to prevent common mistakes.
        "check-file", // Enables linting rules that enforce file and directory naming conventions and structure.
        "@dword-design/import-alias", // Provides rules for enforcing consistent use of import aliases, improving readability and maintainability.
        "sonarjs", // Focuses on detecting bugs and suspicious patterns in the code, inspired by SonarQube rules.
        "@stylistic", // Enforces stylistic conventions in code for readability and consistency (Note: This is not a standard ESLint plugin and may refer to a custom or hypothetical set of stylistic rules).
        "perfectionist", // Encourages a high degree of code quality and perfection, focusing on best practices and clean code (Note: This is not a standard ESLint plugin and may refer to a custom or hypothetical set of perfectionist rules).
        "typeorm-typescript", // Provides linting rules for TypeORM usage with TypeScript, ensuring proper usage of the ORM.
        "ng-module-sort", // A plugin for sorting NestJS modules, ensuring a consistent ordering of module imports and declarations.
        "sort-decorators", // Offers rules for sorting decorators in a consistent manner, enhancing readability and organization of decorator usage.
        "header", // Enforces the presence of header comments in files, useful for license headers or file documentation.
    ],
    root: true,
    rules: {
        "@dword-design/import-alias/prefer-alias": [
            "error",
            {
                "alias": {
                    "@": "./src"
                }
            }
        ], // Enforce the use of import aliases for improved readability and easier refactoring, specifically using "@" to refer to the "./src" directory.
        "@stylistic/brace-style": ["error", "1tbs", { "allowSingleLine": false }], // Enforce "one true brace style" for consistent brace positioning in control statements and functions, disallowing single-line blocks.
        "@stylistic/comma-spacing": "error", // Require a space after commas for improved readability in lists, object literals, etc.
        "@stylistic/function-call-spacing": "error", // Enforce no space between the function name and the parentheses when calling a function for consistency.
        "@stylistic/lines-between-class-members": "error", // Require an empty line between class members to improve class readability and organization.
        "@stylistic/object-curly-spacing": ["error", "always"], // Enforce spacing inside curly braces of objects for better readability.
        "@stylistic/padding-line-between-statements": [
            "error",
            { blankLine: "always", next: "switch", prev: "*" },
            { blankLine: "always", next: "function", prev: "*" },
            { blankLine: "always", next: "return", prev: "*" },
            { blankLine: "always", next: "multiline-const", prev: "*" },
            { blankLine: "always", next: "multiline-let", prev: "*" },
            { blankLine: "always", next: "block", prev: "*" },
            { blankLine: "always", next: "block-like", prev: "*" },
            { blankLine: "always", next: "class", prev: "*" },
            { blankLine: "always", next: "try", prev: "*" },
            { blankLine: "always", next: "throw", prev: "*" },
            { blankLine: "always", next: "if", prev: "*" },
            { blankLine: "always", next: "for", prev: "*" },
            { blankLine: "always", next: "default", prev: "*" },
            { blankLine: "always", next: "case", prev: "*" },
            { blankLine: "always", next: "break", prev: "*" },
        ], // Each specifies required blank lines around certain statements to ensure consistent vertical spacing and sectioning of code for readability.
        "@stylistic/space-before-blocks": "error", // Require a space before the opening brace of blocks to distinguish blocks from control statements or declarations more clearly.
        "@stylistic/spaced-comment": "error", // Enforce consistent spacing after the comment delimiters (// or /*) for readability.
        "@typescript-eslint/adjacent-overload-signatures": "error", // Require function overloads to be consecutively placed, improving readability and organization of overloaded functions.
        "@typescript-eslint/array-type": ["error", { "default": "generic" }], // Enforce using generic array type syntax (Array<type>) for consistency and clarity in type definitions.
        "@typescript-eslint/ban-ts-comment": "error", // Disallow `@ts-ignore`, `@ts-nocheck`, and `@ts-check` comments to avoid bypassing TypeScript's static type checking.
        "@typescript-eslint/ban-tslint-comment": "error", // Prohibit comments that disable TSLint rules, encouraging the use of ESLint for linting TypeScript.
        "@typescript-eslint/ban-types": "off", // Disables the rule that prevents the use of certain built-in types like `Object`, `String`, `Number`, etc., allowing their use in the codebase.
        "@typescript-eslint/consistent-generic-constructors": "error", // Enforces the use of a consistent generic constructor style, either `new () => T` or `new <T>() => T`, to ensure consistency and readability in type definitions.
        "@typescript-eslint/consistent-indexed-object-style": "error", // Requires a consistent style for indexed objects, either using an interface or type alias for index signatures, to enhance code clarity and maintainability.
        "@typescript-eslint/consistent-type-exports": "error", // Enforces consistent usage of type exports, promoting clarity and consistency in how types are exported from modules.
        "@typescript-eslint/consistent-type-imports": "error", // Enforces using the `import type {}` syntax where possible for importing types, which can lead to more efficient bundling by avoiding unnecessary JavaScript execution.
        "@typescript-eslint/explicit-function-return-type": "error", // Requires explicit return types on functions and class methods, improving code documentation and maintainability by making the intended return type clear.
        "@typescript-eslint/explicit-module-boundary-types": "error", // Enforces explicit return and argument types on exported functions and classes at module boundaries, improving type safety and clarity in module interfaces.
        "@typescript-eslint/interface-name-prefix": "off", // Disables the rule that requires interface names to be prefixed with "I", allowing more flexibility in naming interfaces according to project conventions.
        "@typescript-eslint/naming-convention": ["error",
            {
                "selector": "default",
                "format": null // Disables any format enforcement by default, allowing for flexibility unless specifically overridden.
            },
            {
                "selector": "variable",
                "types": ["boolean"],
                "format": ["PascalCase", "UPPER_CASE"], // Boolean variables should be prefixed with specific keywords and can be in PascalCase or UPPER_CASE.
                "prefix": ["is", "should", "has", "can", "did", "will"]
            },
            {
                "selector": "variableLike",
                "format": ["camelCase", "UPPER_CASE", "PascalCase"] // Variables and variable-like identifiers should use camelCase, UPPER_CASE, or PascalCase, providing flexibility for naming.
            },
            {
                "selector": "parameter",
                "format": ["camelCase"] // Function parameters should always use camelCase.
            },
            {
                "selector": "parameterProperty",
                "format": ["camelCase"] // Class constructor parameters that are also class properties should use camelCase.
            },
            {
                "selector": "memberLike",
                "modifiers": ["private"],
                "format": ["camelCase"], // Private class members should use camelCase and not have a leading underscore.
                "leadingUnderscore": "forbid"
            },
            {
                "selector": "typeLike",
                "format": ["PascalCase"] // Types, interfaces, classes, etc., should use PascalCase.
            },
            {
                "selector": "property",
                "modifiers": ["readonly"],
                "format": ["PascalCase"] // Readonly properties should use PascalCase.
            },
            {
                "selector": "enumMember",
                "format": ["UPPER_CASE"] // Enum members should be in UPPER_CASE.
            },
            {
                "selector": "enum",
                "format": ["PascalCase"], // Enums should use PascalCase and be prefixed with 'E'.
                "prefix": ["E"]
            },
            {
                "selector": "interface",
                "format": ["StrictPascalCase"], // Interfaces should use StrictPascalCase and be prefixed with 'I'.
                "prefix": ["I"]
            },
            {
                "selector": "typeAlias",
                "format": ["StrictPascalCase"], // Type aliases should use StrictPascalCase and be prefixed with 'T'.
                "prefix": ["T"]
            }
        ],
        "@typescript-eslint/no-array-delete": "error", // Disallow using delete on arrays because it may lead to unexpected behavior by leaving a 'hole' in the array.
        "@typescript-eslint/no-base-to-string": "error", // Require explicit toString() method calls on objects which may not safely convert to a string, preventing runtime errors.
        "@typescript-eslint/no-duplicate-enum-values": "error", // Prevent duplicate values in enums, which can lead to confusing and hard-to-trace errors.
        "@typescript-eslint/no-duplicate-type-constituents": "error", // Disallow duplicate type constituents in unions and intersections to maintain clean and understandable type definitions.
        "@typescript-eslint/no-empty-function": "error", // Disallow empty functions to avoid unintentionally incomplete implementations.
        "@typescript-eslint/no-empty-interface": "error", // Prevent the declaration of empty interfaces which can be misleading and unnecessary.
        "@typescript-eslint/no-explicit-any": "off", // Allow the use of 'any' type to enable flexibility in cases where strict typing is excessively restrictive.
        "@typescript-eslint/no-floating-promises": "error", // Require handling of promises to avoid uncaught promise rejections and unhandled async operations.
        "@typescript-eslint/no-for-in-array": "error", // Disallow for-in loops over arrays because they iterate over object keys, not array elements.
        "@typescript-eslint/no-implied-eval": "error", // Disallow methods that can execute code strings, preventing potential security vulnerabilities.
        "@typescript-eslint/no-import-type-side-effects": "error", // Prohibit imports that can have side effects when only importing types, ensuring cleaner and safer code.
        "@typescript-eslint/no-loop-func": "error", // Forbid the creation of functions within loops to prevent errors due to the use of loop variables inside closures.
        "@typescript-eslint/no-loss-of-precision": "error", // Prevent literal numbers that lose precision when converted to JavaScript Number type.
        "@typescript-eslint/no-magic-numbers": ["error", { "detectObjects": true, "ignoreEnums": true }], // Disallow magic numbers to make code more readable and maintainable, with exceptions for enums and object properties.
        "@typescript-eslint/no-misused-promises": "error", // Ensure promises are used and awaited correctly, preventing logical errors in async operations.
        "@typescript-eslint/no-mixed-enums": "error", // Prevent enums from being mixed in nonsensical ways, ensuring that they are used as intended.
        "@typescript-eslint/no-redeclare": "error", // Disallow redeclaration of variables to prevent confusion and potential errors from shadowed variables.
        "@typescript-eslint/no-redundant-type-constituents": "error", // Disallow redundant types in unions or intersections to keep type definitions clear and concise.
        "@typescript-eslint/no-require-imports": "error", // Discourage the use of require imports in favor of ES6 import syntax for consistency and better module resolution.
        "@typescript-eslint/no-restricted-imports": "error", // Allow specifying imports to avoid, helping to keep the dependency graph clean and manageable.
        "@typescript-eslint/no-throw-literal": "error", // Enforce throwing Error objects instead of literals to ensure proper error handling.
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error", // Avoid unnecessary comparisons in boolean expressions for cleaner code.
        "@typescript-eslint/no-unnecessary-condition": ["off", { "allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": true }], // Allow potentially unnecessary conditions to run, acknowledging developer intent under non-strict null checks.
        "@typescript-eslint/no-unused-vars": "error", // Enforce removal of variables that are declared but not used, keeping the codebase clean.
        "@typescript-eslint/no-useless-empty-export": "error", // Disallow empty exports that serve no purpose and clutter the module namespace.
        "@typescript-eslint/no-useless-template-literals": "error", // Prevent template literals with no expressions, where simple strings could be used instead.
        "@typescript-eslint/no-var-requires": "error", // Encourage the use of import statements over require for module importing for consistency and clarity.
        "@typescript-eslint/prefer-enum-initializers": "error", // Suggest using initializers for enums to make values explicit and clear.
        "@typescript-eslint/prefer-for-of": "error", // Encourage the use of for-of loops for iterable objects for clarity and simplicity.
        "@typescript-eslint/prefer-function-type": "error", // Prefer using function type literals over interfaces with call signatures for simplicity and readability.
        "@typescript-eslint/prefer-includes": "error", // Suggest using includes method over indexOf for arrays and strings for better readability and intent.
        "@typescript-eslint/prefer-namespace-keyword": "error", // Recommend the use of the namespace keyword over module to declare custom TypeScript modules.
        "@typescript-eslint/prefer-optional-chain": "error", // Encourage optional chaining for cleaner and safer access to nested object properties.
        "@typescript-eslint/prefer-readonly": "error", // Suggest marking properties that are never reassigned after initialization as readonly.
        "@typescript-eslint/prefer-string-starts-ends-with": "error", // Recommend using startsWith and endsWith methods over equivalent string operations for clarity.
        "@typescript-eslint/require-array-sort-compare": "error", // Require a compare function be provided to Array.sort() when sorting non-string values for predictable sorting.
        "@typescript-eslint/restrict-plus-operands": "error", // Ensure that operands of the plus operator are of compatible types to prevent unexpected type coercion.
        "@typescript-eslint/restrict-template-expressions": "error", // Restrict types allowed in template expressions to prevent runtime errors from unexpected type conversions.
        "@typescript-eslint/return-await": "error", // Enforce returning await in async functions to ensure errors are caught in the try-catch block.
        "@typescript-eslint/sort-type-constituents": "off", // Allow type constituents to be in any order, offering flexibility in type definitions.
        "@typescript-eslint/switch-exhaustiveness-check": "error", // Require exhaustive switch statements over union types, ensuring all possible cases are handled.
        "@typescript-eslint/typedef": [
            "error",
            {
                "arrayDestructuring": true,
                "arrowParameter": true,
                "memberVariableDeclaration": true,
                "objectDestructuring": true,
                "parameter": true,
                "propertyDeclaration": true,
                "variableDeclaration": true,
                "variableDeclarationIgnoreFunction": true
            }
        ], // Enforce type definitions in various situations to ensure code clarity and maintainability. This includes variables, function parameters, and class members among others, with an exception for functions in variable declarations.
        "check-file/filename-blocklist": [
            "error",
            {
                "**/*.enums.ts": "*.enum.ts",
                "**/*.models.ts": "*.model.ts",
                "**/*.tests.ts": "*.test.ts",
                "**/*.types.ts": "*.type.ts"
            }
        ], // Disallow specific filename patterns to enforce a consistent naming convention across the project. For example, preferring `*.enum.ts` over `*.enums.ts`.
        "check-file/filename-naming-convention": [
            "error",
            {
                "**/class/**/*.{js,ts}": "KEBAB_CASE",
                "**/dto/**/*.{js,ts}": "KEBAB_CASE",
                "**/entity/**/*.{js,ts}": "KEBAB_CASE",
                "**/enum/**/*.{js,ts}": "KEBAB_CASE",
                "**/event/*/*.{js,ts}": "KEBAB_CASE",
                "**/filter/**/*.{js,ts}": "KEBAB_CASE",
                "**/interceptor/**/*.{js,ts}": "KEBAB_CASE",
                "**/interface/**/*.{js,ts}": "KEBAB_CASE",
                "**/middleware/**/*.{js,ts}": "KEBAB_CASE",
                "**/modules/*/*.{js,ts}": "FLAT_CASE",
                "**/subscriber/*/*.{js,ts}": "KEBAB_CASE",
                "**/type/*/*.{js,ts}": "KEBAB_CASE",
                "**/validator/**/*.{js,ts}": "KEBAB_CASE",
            },
            { "ignoreMiddleExtensions": true }
        ], // Enforce a specific naming convention for files in various directories, typically using KEBAB_CASE for clarity and consistency. The `ignoreMiddleExtensions` option allows ignoring file extensions in the middle of filenames, focusing on the final extension for the rule.
        "check-file/folder-match-with-fex": [
            "error",
            {
                "*.api.{ts,js}": "**/api/**",
                "*.class.{js,jsx,ts,tsx}": "**/class/**",
                "*.dto.{js,jsx,ts,tsx}": "**/dto/**",
                "*.entity.{js,jsx,ts,tsx}": "**/entity/**",
                "*.enum.{js,jsx,ts,tsx}": "**/enum/**",
                "*.event.{js,jsx,ts,tsx}": "**/event/**",
                "*.filter.{js,jsx,ts,tsx}": "**/filter/**",
                "*.interceptor.{js,jsx,ts,tsx}": "**/interceptor/**",
                "*.interface.{js,jsx,ts,tsx}": "**/interface/**",
                "*.middleware.{js,jsx,ts,tsx}": "**/middleware/**",
                "*.subscriber.{js,jsx,ts,tsx}": "**/subscriber/**",
                "*.type.{js,jsx,ts,tsx}": "**/type/**",
                "*.validator.{js,jsx,ts,tsx}": "**/validator/**",
            }
        ], // Enforce a naming convention that requires files to be located in folders matching their type (e.g., API files in /api, DTOs in /dto) to ensure a clear and consistent project structure.
        "check-file/folder-naming-convention": [
            "error",
            {
                "src/**": "FLAT_CASE"
            }
        ], // Require all files and folders under the `src` directory to use flat case naming (e.g., `my_directory`), promoting consistency in file system organization.
        "curly": "error", // Enforce the use of curly braces around blocks in control statements for clarity and to prevent errors in complex statements.
        "header/header": [
            2,
            "line",
            [
                {
                    "pattern": "^ Version: \\d{1}.\\d{1}.\\d{1}$",
                    "template": " Version: 0.0.0"
                }
            ]
        ], // Require files to include a specific header comment matching a version pattern, ensuring all files are versioned according to project standards.
        "import/newline-after-import": "error", // Enforce a newline after import statements to separate imports from the rest of the code logically, improving readability.
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": [
                    "**/*.test.{ts,js}",
                    "**/*.spec.{ts,js}",
                    "./test/**.{ts,js}",
                    "./scripts/**/*.{ts,js}"
                ]
            }
        ], // Disallow the use of dependencies not listed in package.json to avoid runtime errors due to missing modules, with exceptions for files typically used in development like tests and scripts.
        "import/no-unresolved": "error", // Ensure all imports can be resolved to a module/file within the project or in `node_modules`, preventing broken imports that can lead to runtime errors.
        "import/order": [
            "error",
            {
                "alphabetize": { "caseInsensitive": false, "order": "asc", "orderImportKind": "asc" },
                "groups": ["builtin", "external", "index", "parent", "sibling", "internal", "object", "type"],
                "newlines-between": "always-and-inside-groups",
                "warnOnUnassignedImports": true
            }
        ], // Enforce a specific order and grouping of import statements to improve readability and maintainability, with additional rules for alphabetical sorting and spacing.
        "import/prefer-default-export": "error", // When a module exports a single name, prefer using default export over named export for simplicity and consistency in import statements.
        "ng-module-sort/decorator-array-items": [
            "error",
            {
                "reverseSort": false
            }
        ], // Ensure items in NestJS module decorator arrays (e.g., declarations, imports) are sorted alphabetically for improved readability and easier maintenance.
        "no-console": "error", // Disallow the use of console methods to ensure logs are not exposed in production environments.
        "no-empty-function": "off", // Allow empty functions, useful for stubs or interfaces in development.
        "no-eval": "error", // Prevent the use of eval() due to security risks and performance issues.
        "no-implied-eval": "off", // Allow implied eval() through setTimeout, setInterval, or execScript to enable certain dynamic functionalities.
        "no-loop-func": "off", // Allow functions to be declared within loops, which can be necessary for specific algorithms despite potential risks.
        "no-loss-of-precision": "off", // Allow numbers that may lose precision in JS; useful when working with large numbers or high precision isn't critical.
        "no-magic-numbers": "off", // Allow "magic numbers" (unnamed numerical constants) for simplicity in small scripts or when they are self-explanatory.
        "no-param-reassign": "off", // Allow reassignment of function parameters, which can be useful in certain cases despite the potential for confusing behavior.
        "no-redeclare": "off", // Allow redeclaration of variables in the same scope, which can be useful in certain structured or templated code.
        "no-return-await": "off", // Allow unnecessary return await, which can be stylistic or used for emphasizing the asynchrony.
        "no-throw-literal": "off", // Allow throwing literals (strings, numbers, etc.) instead of Error objects in specific use cases where custom error handling is implemented.
        "no-unused-vars": "off", // Allow declaration of variables that are not used, useful in stages of development or when variables are used for documentation purposes.
        "perfectionist/sort-imports": "off", // Disable sorting of import statements to allow developers flexibility in organizing their code.
        "quotes": ["error", "double"], // Enforce the use of double quotes for consistency and readability.
        "sonarjs/cognitive-complexity": ["error", 100], // Set a high threshold for cognitive complexity to allow complex but manageable functions.
        "sonarjs/no-duplicate-string": ["error", { "threshold": 10 }], // Flag strings duplicated more than 10 times to encourage the use of constants for maintainability.
        "typeorm-typescript/enforce-column-types": "error", // Enforce explicit column types in TypeORM to ensure database consistency and readability.
        "typeorm-typescript/enforce-relation-types": "error", // Enforce explicit relation types in TypeORM for clear ORM mapping and database integrity.
        "unicorn/filename-case": "off", // Disable filename casing rules to allow flexibility in project naming conventions.
        "unicorn/prefer-top-level-await": "off", // Allow flexibility in using top-level await, accommodating different project structures and initialization patterns.
        "unused-imports/no-unused-imports": "error", // Disallow unused imports to keep the codebase clean and efficient.
        "unused-imports/no-unused-vars": [
            "error",
            {
                "args": "none", // Ignore unused function arguments to allow for interface consistency and potential future use.
                "ignoreRestSiblings": true, // Allow unused variables when using rest properties for object destructuring, useful for omitting unwanted properties.
                "vars": "all" // Check all variables for usage to maintain a clean and efficient codebase.
            }
        ],
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: "./tsconfig.json",
            },
        },
    },
}