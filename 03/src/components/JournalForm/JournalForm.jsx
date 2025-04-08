import './JournalForm.css'
import Button from "../Button/Button.jsx";

function JournalForm( { addItem }) {

    function validateForm(element) {

    }

    function handleBlur(e) {
        console.log(e.target)
        console.log(e.target.value)
    }

    // тут
    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        // або тут
        addItem(formProps)
    }


    return (
        <form className="journal-form" onSubmit={handleSubmit} >
            <input type="text" placeholder="Title" name="title" onBlur={handleBlur} />
            <input type="date" placeholder="Date" name="date" />
            <input type="text" placeholder="Tags" name="tags" />
            <textarea name="post" cols="30" rows="10" placeholder="Post text" />

            <Button text="Save" addClass="accent"/>
        </form>
    )
}

export default JournalForm;