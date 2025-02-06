# Time Converter Chrome Extension

This project is a Vue.js Chrome extension that converts hours into man-days, where one man-day is defined as 7 hours and 45 minutes (7.45 hours). The application utilizes the Vuetify framework for its visual components.

## Project Structure

```
time-converter
├── src
│   ├── App.vue
│   ├── assets
│   ├── components
│   │   └── TimeConverter.vue
│   ├── plugins
│   │   └── vuetify.js
│   ├── utils
│   │   └── timeCalculator.js
│   └── main.js
├── public
│   └── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd time-converter
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the application in development mode, use the following command:

```bash
npm run dev
```

This will start the Vite development server, and you can access the application at `http://localhost:3000`.

## Features

- Input fields for entering hours.
- Calculation of man-days based on the input.
- Responsive design using Vuetify components.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.