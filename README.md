# typescript-refactorings
About A collection of refactoring examples in TypeScript

### [Dependecy Breaking Techniques](DependencyBreakingTechniques)

- [Extract and Override Factory Method](DependencyBreakingTechniques/ExtractAndOverrideFactoryMethod)

## Install

The only requirement needed to run the code is [Deno](https://deno.land/)

Homebrew (Mac):

```bash
$ brew install deno
```

Other options can be found at [here](https://deno.land/manual@v1.12.1/getting_started/installation)

## Run the tests

```bash
# Run all tests in the current directory and all sub-directories
deno test
# Run all tests in the ExtractAndOverrideFactoryMethod directory
deno test ./DependencyBreakingTechniques/ExtractAndOverrideFactoryMethod/
# Run just my_test.ts
deno test my_test.ts
```