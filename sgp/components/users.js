const Users = (props) => {
	//console.log(props);
	return(
		
			<ul>
			{
				props.users.map(user =>(
					<div>
					<li key={user.id}>
					<h6>{user.name}</h6>
					</li>
					</div>

				))		
			}
			</ul>
	)

}

export default Users;