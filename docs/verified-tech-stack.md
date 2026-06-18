# Verified Tech Stack

This list is based on `package.json` and selected source files in the local codebase.

| Technology | Confirmed Purpose |
| --- | --- |
| React 18 | Component-based UI and hooks |
| React Native 0.74 | Native mobile UI |
| Expo SDK 51 | Mobile runtime, build scripts, fonts, splash screen, notifications, media, file, and sharing modules |
| JavaScript | Primary implementation language |
| TypeScript | Declared as a dev dependency; meaningful source usage is Not confirmed from codebase. |
| React Navigation 6 | Stack navigation and transitions |
| Redux | Centralized state management |
| Redux Thunk | Async actions and API side effects |
| React Redux | `useDispatch` and `useSelector` integration |
| Axios | REST API clients and request interceptors |
| AsyncStorage | Local session and user metadata |
| React Native Maps | Map rendering, markers, animated markers, and polylines |
| React Native Map Clustering | Clustered fleet map display |
| React Native SVG / SVG Transformer | SVG icons and graphics |
| React Native SVG Charts | Reusable chart component |
| Expo Notifications | Push notification registration and listeners |
| Expo Image Picker | Image selection during user workflows |
| Expo File System / Sharing | File download and sharing workflows |
| React Native Toast Message | Success and error feedback |
| Moment.js | Date formatting and date-range logic |
| Expo Google Fonts: Roboto | Typography loading |
| React Native StyleSheet | Styling system |
| Tailwind React Native Classnames | Utility-style classes in selected UI areas |
| Jest / React Native Testing Library | Declared dependencies; test coverage is Not confirmed from codebase. |
| Formik / Yup | Declared dependencies; broad usage is Not confirmed from codebase. |

## Configuration Notes

- Path aliases are configured in the project for cleaner imports.
- Expo scripts exist for start, Android, iOS, and web.
- This export intentionally does not include platform service configuration files.

## Public-Safe Warning

Do not publish `src/utils/api.js`, platform service configuration, environment/config files, or private application assets without a security review.
