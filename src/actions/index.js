import {SAVE_COMMENT} from './types';

export function saveComment(comment, submittedDate, author) {
    const commentData = {
        comment: comment,
        author: author,
        submittedDate: submittedDate
    }
    return {
        type: SAVE_COMMENT,
        payload: commentData,
    };
}
