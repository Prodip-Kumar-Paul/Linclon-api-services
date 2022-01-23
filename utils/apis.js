
let username="";
let reponame="";
export const allApis={
   USER_PROFILE_DETAILS:"https://api.github.com/user",
   USER_ALL_REPO_DETAILS:"https://api.github.com/user/repos",
   FOLLOWERS_DETAILS:"https://api.github.com/user/followers",
   FOLLOWING_DETAILS:"https://api.github.com/user/following",
   particular_repo_details:{
       PARTICULAR_REPO_DETAILS:`https://api.github.com/repos/${username}/${reponame}`,
       COLLABORATORS_DETAILS:`https://api.github.com/repos/${username}/${reponame}/collaborators`,
       ISSUES_DETAILS:`https://api.github.com/repos/${username}/${reponame}/issues`,
       LANGUAGES_DETAILS:`https://api.github.com/repos/${username}/${reponame}/languages`,
       CONTRIBUTORS_DETAILS:`https://api.github.com/repos/${username}/${reponame}/contributors`,
       COMMITS_DETAILS:`https://api.github.com/repos/${username}/${reponame}/commits`,
       PRS_DETAILS:`https://api.github.com/repos/${username}/${reponame}/pulls`,
       CONTENTS_DETAILS:`https://api.github.com/repos/${username}/${reponame}/contents`,
       README_DETAILS:`https://api.github.com/repos/${username}/${reponame}/main/README.md`
   }

}