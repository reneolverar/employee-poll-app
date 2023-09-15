import { connect } from "react-redux"
import { useState } from "react"
import { handleAddQuestion } from "../actions/questions"
import { useNavigate } from "react-router-dom"

function CreatePoll(props) {
    const navigate = useNavigate()

    const { dispatch } = props
    const [optionOneText, setOptionOneText] = useState("")
    const [optionTwoText, setOptionTwoText] = useState("")

    let disableForm = optionOneText === "" || optionTwoText === ""

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newQuestion = await dispatch(
            handleAddQuestion(
                optionOneText,
                optionTwoText,
            )
        )
        navigate(`/poll/${newQuestion.id}`)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="text-center my-5"
        >
            <h1 className="text-2xl">Would you rather:</h1>
            <p className="text-gray-600">Create your own poll</p>
            <label for="option-one-input">First Option*</label>
            <input
                type="text"
                placeholder="Option One"
                value={optionOneText}
                onChange={(e) => setOptionOneText(e.target.value)}
                className=" w-full m-2 border"
                id="option-one-input"
            ></input>
            <label for="option-two-input">Second Option*</label>
            <input
                type="text"
                placeholder="Option Two"
                value={optionTwoText}
                onChange={(e) => setOptionTwoText(e.target.value)}
                className=" w-full m-2 border"
                id="option-two-input"
            ></input>
            {disableForm && <p className="opacity-50">*Please fill out all required fields</p>}
            <button
                disabled={disableForm}
                className="button bg-gray-300 disabled:opacity-25"
            >
                Submit
            </button>
        </form>
    )
}

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(CreatePoll)
