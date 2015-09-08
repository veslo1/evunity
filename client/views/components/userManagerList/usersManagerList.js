Template.usersManagerList.helpers({
	userlist: function () {
		return Users.find({});
	}
});