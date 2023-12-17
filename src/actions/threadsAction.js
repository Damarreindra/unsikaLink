
  import {
    doc,
    getFirestore,
 
    collection,
    getDocs,
  
  } from "firebase/firestore";
  import app from "../firebase";
export const GET_THREADS = "GET_THREADS";
export const UPDATE_COMMENTS = "UPDATE_COMMENTS"

export const getThreads = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_THREADS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const db = getFirestore(app);

    try {
      const threadsCollection = collection(db, "threads");
      const threadsSnapshot = await getDocs(threadsCollection);
      const threadsData = threadsSnapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));

      dispatch({
        type: GET_THREADS,
        payload: {
          loading: false,
          data: threadsData,
          errorMessage: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_THREADS,
        payload: {
          loading: false,
          data: false,
          errorMessage: err.message,
        },
      });
    }
  };
};
export const updateComments = (threadId, comments) => ({
  type: UPDATE_COMMENTS,
  payload: { threadId, comments },
});
