import { connect } from "react-redux"

function Leaderboard(props) {
    return (
        <div>
            <h1 className=" text-2xl font-bold text-center">Leaderboard</h1>
            <table className="min-w-full text-left border border-neutral-500">
                <thead className="border-b border-neutral-500">
                    <tr>
                        <th>Users</th>
                        <th>Answered</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.allIds.map((id) => (
                        <tr
                            key={id}
                            className="border border-neutral-500"
                        >
                            <td>
                                <img
                                    src="/employee-poll-logo.png"
                                    alt="Poll app logo"
                                    width={50}
                                    height={50}
                                ></img>
                                <p className="text-xl">{props.users.byId[id].name}</p>
                                <span>{props.users.byId[id].id}</span>
                            </td>
                            <td>
                                {Object.keys(props.users.byId[id].answers).length}
                            </td>
                            <td>{props.users.byId[id].questions.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = ({ authedUser, users }) => ({
    authedUser,
    users
})

export default connect(mapStateToProps)(Leaderboard)