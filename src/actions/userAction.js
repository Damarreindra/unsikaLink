import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged, 
  updateProfile
} from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import app from "../firebase";

// Define action types
export const GET_LIST_USER = "GET_LIST_USER";
export const ADD_USER = "ADD_USER";
export const ADD_POST = "ADD_POST";
export const ADD_POST_PROFILE = "ADD_POST_PROFILE";
export const LOGOUT = "LOGOUT";
export const UPDATE_PUBLISH = "UPDATE_PUBLISH";
export const UNPUBLISH = "UNPUBLISH";
export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_PROFILE_PICT = "ADD_PROFILE_PICT";
export const EDIT_PROFILE_PICT = "EDIT_PROFILE_PICT";
export const LOGIN = "LOGIN";
export const CHANGE_LOADING = "CHANGE_LOADING";
export const CHANGE_TOKEN = "CHANGE_TOKEN";
export const ERR_MESSAGE = "ERR_MESSAGE";
export const STORE_USER_DATA = "STORE_USER_DATA";

// Authentication Actions


export const logout = () => async (dispatch) => {
  const auth = getAuth(app);

  try {
    await signOut(auth);
    dispatch({ type: LOGOUT });
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

export const getListUser = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_LIST_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const db = getFirestore(app);

    try {
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const usersData = usersSnapshot.docs.map((doc) => doc.data());

      dispatch({
        type: GET_LIST_USER,
        payload: {
          loading: false,
          data: usersData,
          errorMessage: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_LIST_USER,
        payload: {
          loading: false,
          data: false,
          errorMessage: err.message,
        },
      });
    }
  };
};

export const addUser = (data) => async (dispatch) => {
  dispatch({
    type: ADD_USER,
    payload: { loading: true, data: false, errorMessage: false },
  });

  const auth = getAuth(app);
  const db = getFirestore(app);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    
    await updateProfile(auth.currentUser, {
      displayName: data.username,
      photoURL:"https://res.cloudinary.com/dttd52ltg/image/upload/v1702484526/n0lyybruxdngvdrammng.jpg"
    });


    dispatch({
      type: ADD_USER,
      payload: {
        loading: false,
        data: userCredential.user,
        errorMessage: false,
      },
    });
    return true;
  } catch (error) {
    dispatch({
      type: ADD_USER,
      payload: { loading: false, data: false, errorMessage: error.message },
    });
    return false;
  }
};


export const addPost = (data) => async (dispatch) => {
  dispatch({
    type: ADD_POST,
    payload: { loading: true, data: false, errorMessage: false },
  });

  const auth = getAuth(app);

  try {
    await new Promise((resolve, reject) => {
      onAuthStateChanged(auth, async (user) => {
        if (!user) {
          reject(new Error("No logged-in user"));
          return;
        }

        const postDataWithAuthor = {
          ...data,
          author: { uid: user.uid, displayName: user.displayName, photoURL: user.photoURL }
                };

        try {
          const db = getFirestore(app);
          await addDoc(collection(db, "threads"), postDataWithAuthor);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });

    dispatch({
      type: ADD_POST,
      payload: { loading: false, data: true, errorMessage: false },
    });
    return true;
  } catch (error) {
    dispatch({
      type: ADD_POST,
      payload: { loading: false, data: false, errorMessage: error.message },
    });
    return false;
  }
};



export const addPostProfile = (data) => async (dispatch) => {
  const id = localStorage.getItem("id");
  dispatch({
    type: ADD_POST_PROFILE,
    payload: { loading: true, data: false, errorMessage: false },
  });
  const db = getFirestore(app);

  try {
    await addDoc(collection(db, `users/${id}/threads`), data);
    dispatch({
      type: ADD_POST_PROFILE,
      payload: { loading: false, data: true, errorMessage: false },
    });
    return true;
  } catch (error) {
    dispatch({
      type: ADD_POST_PROFILE,
      payload: { loading: false, data: false, errorMessage: error.message },
    });
    return false;
  }
};

// Comment Actions
export const getComments = () => async (dispatch) => {
  dispatch({
    type: GET_COMMENTS,
    payload: { loading: true, data: false, errorMessage: false },
  });
  const db = getFirestore(app);

  try {
    const commentsCollection = collection(db, "threads");
    const commentsSnapshot = await getDocs(commentsCollection);
    const commentsData = commentsSnapshot.docs.map((doc) => doc.data());

    dispatch({
      type: GET_COMMENTS,
      payload: { loading: false, data: commentsData, errorMessage: false },
    });
  } catch (error) {
    dispatch({
      type: GET_COMMENTS,
      payload: { loading: false, data: false, errorMessage: error.message },
    });
  }
};

export const addComment = (threadId, commentData) => async (dispatch) => {
  dispatch({
    type: ADD_COMMENT,
    payload: { loading: true, data: false, errorMessage: false },
  });

  const db = getFirestore(app);

  try {
    const threadRef = doc(db, 'threads', threadId);

    // Assuming your existing thread document has a 'comments' field that is an array
    const threadDoc = await getDoc(threadRef);
    const existingComments = threadDoc.exists() ? threadDoc.data().comments || [] : [];

    // Add the new comment to the existing comments array
    const updatedComments = [...existingComments, commentData];

    // Update the thread document with the new comments array
    await updateDoc(threadRef, { comments: updatedComments });

    dispatch({
      type: ADD_COMMENT,
      payload: { loading: false, data: true, errorMessage: false },
    });
  } catch (error) {
    console.error('Error adding comment:', error);

    dispatch({
      type: ADD_COMMENT,
      payload: { loading: false, data: false, errorMessage: error.message },
    });
  }
};




export const addProfileImg = (data) => {
  return async (dispatch) => {
    const id = localStorage.getItem("id");
    dispatch({
      type: ADD_PROFILE_PICT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const db = getFirestore(app);

    try {
      const userDocRef = doc(db, "users", id);
      await setDoc(userDocRef, data);

      dispatch({
        type: ADD_PROFILE_PICT,
        payload: {
          loading: false,
          data: data,
          errorMessage: false,
        },
      });

      window.location = "/login";
    } catch (err) {
      dispatch({
        type: ADD_PROFILE_PICT,
        payload: {
          loading: false,
          data: false,
          errorMessage: err.message,
        },
      });
    }
  };
};

export const editProfileImg = (data) => {
  return async (dispatch) => {
    const id = localStorage.getItem("id");
    dispatch({
      type: EDIT_PROFILE_PICT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const db = getFirestore(app);

    try {
      const userDocRef = doc(db, "users", id);
      await updateDoc(userDocRef, data);

      dispatch({
        type: EDIT_PROFILE_PICT,
        payload: {
          loading: false,
          data: data,
          errorMessage: false,
        },
      });

      localStorage.setItem("img", data.profile_img);
      window.location = `/profile/${id}`;
    } catch (err) {
      dispatch({
        type: EDIT_PROFILE_PICT,
        payload: {
          loading: false,
          data: false,
          errorMessage: err.message,
        },
      });
    }
  };
};

export const updatePublish = (id, uid) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_PUBLISH,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const db = getFirestore(app);

    try {
      const userDocRef = doc(db, `users/${uid}/threads`, id);
      await updateDoc(userDocRef, { publish: true });

      dispatch({
        type: UPDATE_PUBLISH,
        payload: {
          loading: false,
          data: true,
          errorMessage: false,
        },
      });
    } catch (err) {
      dispatch({
        type: UPDATE_PUBLISH,
        payload: {
          loading: false,
          data: false,
          errorMessage: err.message,
        },
      });
    }
  };
};

export const unPublish = (id, uid) => async (dispatch) => {
  dispatch({
    type: UNPUBLISH,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  const db = getFirestore(app);

  try {
    const userDocRef = doc(db, `users/${uid}/threads`, id);
    await updateDoc(userDocRef, { publish: false });

    dispatch({
      type: UNPUBLISH,
      payload: {
        loading: false,
        data: true,
        errorMessage: false,
      },
    });
  } catch (err) {
    dispatch({
      type: UNPUBLISH,
      payload: {
        loading: false,
        data: false,
        errorMessage: err.message,
      },
    });
  }
};
