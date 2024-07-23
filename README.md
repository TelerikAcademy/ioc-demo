# How to run the demo

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd injectables
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Detailed Explanation

### Main Files

- **main.ts**: Entry point of the application. It sets up the dependency injection and runs the main logic.
- **package.json**: Contains metadata about the project and scripts for building and running the project.
- **tsconfig.json**: TypeScript configuration file.

### Source Code

#### Engine

- **engine.ts**: Main engine class that runs the application.
- **reader.ts**: Provides functionality to read input data.
- **runner.ts**: Coordinates the reading, splitting, and summarizing of data.
- **splitter.ts**: Splits the input data into an array of numbers.
- **summarizer.ts**: Sums up the numbers provided by the splitter.

#### Tools

- **decorators/injectable.ts**: Decorator to mark classes as injectable.
- **ioc/injector.ts**: Injector class to handle dependency resolution.

#### Types

- **class-type.ts**: Type definition for class constructors.

## License

This project is licensed under the MIT License.
