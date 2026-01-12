import teamMembers from "../../public/fakedata/team-members.json";

const getTeamMembers = () => {
	return Array.isArray(teamMembers) ? teamMembers : [];
};

export default getTeamMembers;
