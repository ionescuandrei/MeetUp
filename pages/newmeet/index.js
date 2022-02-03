import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetUpPage() {
  function addNewMeetuphandeler(enteredMeet) {
    console.log(enteredMeet);
  }
  return <NewMeetupForm onAddMeetup={addNewMeetuphandeler} />;
}

export default NewMeetUpPage;
