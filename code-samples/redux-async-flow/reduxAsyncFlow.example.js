import axios from 'axios';

export const FETCH_DEMO_SUMMARY_REQUEST = 'FETCH_DEMO_SUMMARY_REQUEST';
export const FETCH_DEMO_SUMMARY_SUCCESS = 'FETCH_DEMO_SUMMARY_SUCCESS';
export const FETCH_DEMO_SUMMARY_FAILURE = 'FETCH_DEMO_SUMMARY_FAILURE';

const demoApi = axios.create({
  baseURL: 'https://api.example.invalid',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const fetchDemoSummary = () => async (dispatch) => {
  dispatch({ type: FETCH_DEMO_SUMMARY_REQUEST });

  try {
    const response = await demoApi.get('/demo/fleet-summary');

    dispatch({
      type: FETCH_DEMO_SUMMARY_SUCCESS,
      payload: {
        movingVehicles: response.data?.movingVehicles ?? 0,
        stoppedVehicles: response.data?.stoppedVehicles ?? 0,
        alertsForReview: response.data?.alertsForReview ?? 0,
      },
    });
  } catch (error) {
    dispatch({
      type: FETCH_DEMO_SUMMARY_FAILURE,
      payload: error.message || 'Unable to load demo summary.',
    });
  }
};

const initialState = {
  data: {
    movingVehicles: 0,
    stoppedVehicles: 0,
    alertsForReview: 0,
  },
  error: null,
  loading: false,
};

export function demoSummaryReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DEMO_SUMMARY_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };

    case FETCH_DEMO_SUMMARY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case FETCH_DEMO_SUMMARY_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
