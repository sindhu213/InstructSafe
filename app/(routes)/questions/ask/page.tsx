import { createQuestion } from "@/lib/actions";

export default function Page() {
    return (
        <form action={createQuestion} className="w-1/2">
            <h1 className="underline">Add a question</h1>

            <fieldset className="my-4">
                <legend className="font-extrabold">Title</legend>
                <label htmlFor="title">
                    How would you summarize your question so that others can
                    understand it thoroughly?
                </label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    size={50}
                    placeholder="What are addressing modes?"
                />
            </fieldset>

            <fieldset className="my-4">
                <legend className="font-extrabold">Description</legend>
                <label htmlFor="description">
                    What are the details of your question (if any)?
                </label>
                <br />
                <textarea
                    name="description"
                    id="description"
                    cols={50}
                    rows={10}
                ></textarea>
            </fieldset>

            <fieldset className="my-4">
                <legend className="font-extrabold">Validation</legend>
                <label htmlFor="tags">
                    Please add up to five tags that best describe your question.
                </label>
                <br />
                <input type="text" id="tags" name="tags" size={50} />
                <div>
                    <small>
                        <b>Note - </b>
                    </small>
                    <br />
                    <small>
                        These tags will be used to assess the appropriateness of
                        the question as a part of our validation policy.
                    </small>
                    <br />
                    <small>
                        If your question does not match with the tags, it will
                        be escalated directly to the instructor (after 3
                        warnings).
                    </small>
                </div>
            </fieldset>

            <fieldset className="my-4">
                <legend className="font-extrabold">Notification</legend>
                <label htmlFor="">
                    Enable notifications for discussions regarding this
                    question.
                </label>
                <br />
                <div>
                    <input type="radio" id="yes" name="alerts" />
                    <label htmlFor="yes">Yes</label>
                </div>
                <div>
                    <input type="radio" id="no" name="alerts" />
                    <label htmlFor="No">No</label>
                </div>
            </fieldset>

            <div className="button">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
