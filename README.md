# Calculator Mobile App

A clean, fast calculator built with React Native, Expo, Expo Router, and TypeScript. The app provides a familiar calculator experience across Android, iOS, and the web, with a focused dark interface and responsive button layout.

## Features

- Basic arithmetic: addition, subtraction, multiplication, and division
- Decimal number input
- Percentage conversion
- Backspace and all-clear controls
- Repeated `=` presses for continuing the last calculation
- Divide-by-zero protection with a clear error state
- Active operator and pressed-button feedback
- Type-safe calculator logic separated from the UI
- Expo Router navigation with typed routes enabled

## Tech Stack

- [Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/)
- [React Native](https://reactnative.dev/) 0.86
- [React](https://react.dev/) 19
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [TypeScript](https://www.typescriptlang.org/)
- React Native Web

## Requirements

Install the following before starting:

- Node.js (LTS recommended)
- npm
- Expo Go for testing on a physical device, or an Android/iOS simulator for local development

## Getting Started

1. Clone the repository and open the project directory.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Expo development server:

   ```bash
   npm start
   ```

4. Open the app using one of the options shown by Expo:

   - Scan the QR code with Expo Go on a physical device
   - Press `a` for an Android emulator
   - Press `i` for an iOS simulator (macOS required)
   - Press `w` to open the web version

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Start the app on Android |
| `npm run ios` | Start the app on iOS |
| `npm run web` | Start the web version |
| `npm run lint` | Run Expo's lint checks |
| `npm run reset-project` | Move the starter example aside and reset the app directory |

## Project Structure

```text
src/
├── app/
│   ├── _layout.tsx       # Root navigation and theme provider
│   ├── index.tsx         # Calculator screen and interaction state
│   └── explore.tsx       # Secondary routed screen
├── components/
│   ├── calculator-button.tsx
│   ├── app-tabs.tsx
│   └── ...               # Shared UI components
├── constants/
│   └── theme.ts          # Theme values
├── hooks/
│   └── ...               # Theme and color-scheme hooks
└── utils/
    └── calculator.ts     # Pure arithmetic calculation logic
```

## Calculator Behavior

The calculator keeps arithmetic operations in `src/utils/calculator.ts`. Division by zero returns an error state instead of producing an invalid numeric result. The main screen stores the current display, pending operation, and the last completed operation so that pressing `=` again repeats the calculation.

## Development Notes

- Use `npm run lint` before submitting changes.
- Keep calculation rules in `src/utils/calculator.ts` so they remain easy to test independently from the UI.
- Follow the existing TypeScript and Expo Router conventions when adding screens or components.

## Useful Links

- [Expo SDK 57 documentation](https://docs.expo.dev/versions/v57.0.0/)
- [Expo Router documentation](https://docs.expo.dev/router/introduction/)
- [React Native documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
