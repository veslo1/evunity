Template.eventsForm.events({
	'submit .new-event ': function (event) {
		event.preventDefault();

		var name = event.target.name.value;
		var datedAt = event.target.datedAt.value;

		Events.insert({
			name: name,
			datedAt: datedAt,
			createdAt: new Date(),
			active: false
		});

		event.target.name.value="";
		event.target.datedAt.value = "";
	}
});