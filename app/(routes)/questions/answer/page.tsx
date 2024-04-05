import { createAnswer } from "@/lib/actions"
import { Button } from "@/components"

export default function Page(){
    return (
           <section className="answer">
            <form action={createAnswer} className="w-1/2">
                <h1 className="underline">Answer the question</h1>
                <fieldset className="my-4">
                    <legend className="font-extrabold">Question</legend>
                    <label htmlFor="title">
                        How would you summarize your question so that others can
                        understand it thoroughly?
                    </label>
                    <br />
                </fieldset>

                <fieldset className="my-4">
                    <legend className="font-extrabold">Answer</legend>
                    <label htmlFor="description">
                        What are the details of your answer?
                    </label>
                    <br />
                    <textarea
                        name="description"
                        id="description"
                        cols={50}
                        rows={10}
                        required
                    ></textarea>
                </fieldset>

                <fieldset className="my-4">
                    <legend className="font-extrabold" aria-required="true">Notification</legend>
                    <label htmlFor="notification">
                        Enable notifications for discussions regarding this
                        question.
                    </label>
                    <br />
                    <div>
                        <input type="radio" id="yes" name="alerts" value="on" required/>
                        <label htmlFor="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="alerts" value="off"/>
                        <label htmlFor="no">No</label>
                    </div>
                </fieldset>

                <div className="button">
                    <Button params='type:"submit"' innerText="Submit"/>
                </div>
            </form>
        </section>
    )
}