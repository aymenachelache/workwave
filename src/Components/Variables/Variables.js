//COLORS
export const primaryColor= "#37B778";
export const secondaryColor= "#00AEEF";
export const blackColor= "#1F1F1F";
export const greyColor= "#CDCCC9";

// API
export const baseURL= "http://localhost:4000";
export const REGISTER= "api/auth/sign-up";
export const VERIFICATION= "api/user/send-verification-email";
export const GETUSER= "api/user/get-single-user";
export const GETFREEELNACER= "api/freelencer/get";
export const LOGIN= "api/auth/sign-in";
export const LOGOUT= "api/auth/logout";
export const CERTIFICATE= "api/freelencer/certificate/upload";
export const SENDCERTIFICATE= "api/freelencer/create";
export const PROFILEPICTURE= "api/user/profile-picture";
export const UPDATEPROFILE= "api/user/update-profile";
export const FORGETPASSWORD= "api/auth/forgot-password-token";
export const CREATE_SERVICE = "api/freelencer/create/service"
export const GET_SERVICES = "api/freelencer/get/services/all"
export const RESETPASSWORD = "api/auth/reset-password"
export const GET_ALL_NOTIFICATION= "api/notification/all";

// TODAY

//get project accepted/canceled
export const GET_ACCEPTED_PROJECTS = "api/freelencer/get/projects/accepted"
export const GET_ACCEPTED_CANCELED = "api/freelencer/get/projects/canceled"

//

export const CREATE_PROJECT= "api/client/project/create";
export const GET_ALL_SERVICES= "api/freelencer/get/services/all";
export const GET_ALL_PROJECTS= "api/freelencer/get/projects/exists";
export const GET_PROJECTS_CLIENT = "api/client/projects/all";
// export const GET_PROJCTS_AECCEPTED= "api/freelencer/get/projects/accepted";


//Accept or refuse freelancer in project
export const ACCEPT_FREELANCER = "api/client/project/participants/accept";
export const REFUSE_FREELANCER = "api/client/project/participants/refuse";

//Accept or refuse Client in Service
export const ACCEPT_FREELANCER_SERVICE = "api/freelencer/service/accept"
export const REFUSE_FREELANCER_SERVICE = "api/freelencer/service/refuse"
export const GET_SINGLE_SERVICE = "api/freelencer/get/service"

//Edit a Need
export const EDIT_NEED = "api/client/project/update"
//get single project
export const GET_SINGLE_NEED = "api/client/project/get";
//delete a need
export const DELETE_NEED = "api/client/project/delete"
// BUTTON Place a bild
export const PLACE_A_BILD= "api/freelencer/apply";
// BUTTON Hire FreeLancer
export const HIRE_FREELANCER= "api/client/service/apply";

//delete profile picture
export const DELETE_PICTURE = "api/user/delete-image";

export const PROJECT_ACCEPTED = "api/freelencer/get/projects/accepted";

export const GET_SERVICE = "api/freelencer/get/service";
export const UPDATE_SERVICE = "api/freelencer/update/service";
export const DELETE_SERVICE = "api/freelencer/delete/service";

// Get All Services for show to the Client Home (May be Can use get services with filters)
export const GET_HOME_SERVICES= "api/client/services";


//switch account to Client
export const SWITCH_TO_CLIENT = "api/freelencer/client"
//switch account to Freelancer
export const SWITCH_TO_FREELANCER = "api/client/freelencer"

//get accepted / refused services
export const GET_ACCEPTED_SERVICES = "api/client/services/accepted";
export const GET_REFUSED_SERVICES = "api/client/services/refused";