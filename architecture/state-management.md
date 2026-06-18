# State Management

The app uses Redux with Redux Thunk for centralized state and async side effects.

## Confirmed Store Setup

`src/redux/store.js` configures:

- `createStore` from Redux.
- `applyMiddleware(thunk)`.
- `combineReducers`.

Confirmed reducer slices:

- `auth`
- `fleet`
- `lto`
- `user`
- `report`
- `forms`
- `tracking`
- `quiz`

## State Flow Pattern

The codebase follows a request, success, failure pattern for async workflows.

```text
Screen event
  |
  |-- dispatch(thunkAction(params))
          |
          |-- dispatch(REQUEST)
          |-- call API helper
          |-- normalize or parse response
          |-- dispatch(SUCCESS, payload)
          |-- dispatch(FAILURE, error) on error

Reducer
  |
  |-- updates loading, data, and error state

Screen
  |
  |-- reads state with useSelector
```

## Confirmed Usage

Confirmed through screens and action modules:

- Screens use `useDispatch` to trigger data loading and submissions.
- Screens use `useSelector` to read Redux slices.
- Fleet, reports, tracking, LTO, user, auth, forms, and quiz modules define domain-specific actions and reducers.
- Some API responses are parsed from JSON strings before entering Redux state.
- Some not-found responses are normalized into empty arrays or objects.

## Local Component State

Local React state is used for:

- Form fields and validation errors.
- Search text and filters.
- Modal visibility.
- Loading states for isolated UI flows.
- Route playback controls.
- Map marker animation state.
- Date picker state.

## Session State

AsyncStorage is used for authentication/session metadata and user-related values. The app reads stored state during startup and uses it for role-based routing.

Encrypted storage, token refresh, and secure keychain/keystore storage are Not confirmed from codebase.

## Not Confirmed From Codebase

- React Query, SWR, or entity-cache usage.
- Persisted Redux store.
- Offline queueing.
- Automated retry strategy.
- Typed Redux models.
- Formal state-machine implementation.
