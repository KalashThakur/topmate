import axios from "axios";
import {
  GET_MUSIC_RECORDS_REQUEST,
  GET_MUSIC_RECORDS_SUCCESS,
  GET_MUSIC_RECORDS_ERROR,
  EDIT_MUSIC_RECORDS_REQUEST,
  EDIT_MUSIC_RECORDS_SUCCESS,
  EDIT_MUSIC_RECORDS_ERROR,
  DELETE_MUSIC_RECORDS_REQUEST,
  DELETE_MUSIC_RECORDS_SUCCESS,
  DELETE_MUSIC_RECORDS_ERROR
} from "./actionTypes";

export const getMusicRecordsRequest = () => ({
  type: GET_MUSIC_RECORDS_REQUEST,
});

export const getMusicRecordsSuccess = (payload) => ({
  type: GET_MUSIC_RECORDS_SUCCESS,
  payload,
});

export const getMusicRecordsError = () => ({
  type: GET_MUSIC_RECORDS_ERROR,
});

export const getMusicRecords = (params) => (dispatch) => {
  dispatch(getMusicRecordsRequest());
  axios
    .get("http://localhost:8080/albums", params)
    .then((res) => dispatch(getMusicRecordsSuccess(res.data)))
    .catch((err) => dispatch(getMusicRecordsError(err)));
};

export const editMusicRecordsRequest = () => ({
  type: EDIT_MUSIC_RECORDS_REQUEST,
});

export const editMusicRecordsSuccess = (payload) => ({
  type: EDIT_MUSIC_RECORDS_SUCCESS,
  payload,
});

export const editMusicRecordsError = () => ({
  type: EDIT_MUSIC_RECORDS_ERROR,
});

export const editMusicRecords = (id, payload) => (dispatch) => {
    dispatch(editMusicRecordsRequest());
    return axios
      .patch(`http://localhost:8080/albums/${id}`, payload)
      .then((res) => dispatch(editMusicRecordsSuccess(res.data)))
      .catch((err) => dispatch(editMusicRecordsError(err)));
  };

  export const deleteMusicRecordsRequest = () => ({
    type: DELETE_MUSIC_RECORDS_REQUEST,
  });
  
  export const deleteMusicRecordsSuccess = (payload) => ({
    type: DELETE_MUSIC_RECORDS_SUCCESS,
    payload,
  });
  
  export const deleteMusicRecordsError = () => ({
    type: DELETE_MUSIC_RECORDS_ERROR,
  });

  export const deleteMusicRecords = (id) => (dispatch) => {
    dispatch(deleteMusicRecordsRequest());
     axios.delete(`http://localhost:8080/albums/${id}`)
      .then((res) => dispatch(deleteMusicRecordsSuccess(res.data)))
      .then(() => dispatch(getMusicRecords()))
      .catch((err) => dispatch(deleteMusicRecordsError(err)));
  };
