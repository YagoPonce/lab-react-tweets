function User(props) {
    return (
<span className="user">
            <span className="name">{props.userDetails.name}</span>
            <span className="handle">{props.userDetails.handle}</span>
          </span>
    )
}

export default User