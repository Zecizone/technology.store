import { IComment } from "../../../Shared/types";
import { JSX } from "react";

export default function Comments({ comments }: { comments: IComment[] }): JSX.Element {
    return (
        <>
            <h1>Comments</h1>
            {comments.length > 0 ? (
                <ul>
                    {comments.map(comment => (
                        <li key={comment.id}>
                            <div>
                                <h3>{comment.name}</h3>
                                <div>{comment.email}</div>
                                <div>{comment.body}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No comments available.</div>
            )}
        </>
    );
}
