import { contract } from "./index";

function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
}

export async function getUsernameByAddress(userAddress) {
  try {
    const contractObj = await contract();
    return await contractObj.getUsernameByAddress(userAddress);
  } catch (e) {
    console.error("Error in getUsernameByAddress:", e);
    return parseErrorMsg(e);
  }
}

export async function createUser(
  username,
  basicInfo,
  professionalInfo,
  socialLinks,
  visibility
) {
  try {
    const contractObj = await contract();
    const transactionResponse = await contractObj.createUser(
      username,
      basicInfo,
      professionalInfo,
      socialLinks,
      visibility
    );
    return await transactionResponse.wait();
  } catch (e) {
    console.error("Error in createUser:", e);
    return parseErrorMsg(e);
  }
}

export async function editUser(
  username,
  basicInfo,
  professionalInfo,
  socialLinks,
  visibility
) {
  try {
    const contractObj = await contract();
    const transactionResponse = await contractObj.editUser(
      username,
      basicInfo,
      professionalInfo,
      socialLinks,
      visibility
    );
    return await transactionResponse.wait();
  } catch (e) {
    console.error("Error in editUser:", e);
    return parseErrorMsg(e);
  }
}

export async function getUserByUsername(username) {
  try {
    const contractObj = await contract();
    const user = await contractObj.getUserByUsername(username);
    return {
      basicInfo: {
        firstName: user.basicInfo.firstName,
        lastName: user.basicInfo.lastName,
        email: user.basicInfo.email,
        homeAddress: user.basicInfo.homeAddress,
        dateOfBirth: user.basicInfo.dateOfBirth,
        phoneNumber: user.basicInfo.phoneNumber,
      },
      professionalInfo: {
        education: user.professionalInfo.education,
        workHistory: user.professionalInfo.workHistory,
        jobTitle: user.professionalInfo.jobTitle,
        info: user.professionalInfo.info,
        skills: user.professionalInfo.skills,
        imageURL: user.professionalInfo.imageURL,
      },
      socialLinks: {
        x: user.socialLinks.x,
        instagram: user.socialLinks.instagram,
        tiktok: user.socialLinks.tiktok,
        youtube: user.socialLinks.youtube,
        linkedin: user.socialLinks.linkedin,
      },
      visibility: {
        education: user.visibility.education,
        workHistory: user.visibility.workHistory,
        phoneNumber: user.visibility.phoneNumber,
        homeAddress: user.visibility.homeAddress,
        dateOfBirth: user.visibility.dateOfBirth,
      },
    };
  } catch (e) {
    console.error("Error in getUserByUsername:", e);
    return parseErrorMsg(e);
  }
}

export async function getUserByAddress(userAddress) {
  try {
    const contractObj = await contract();
    const user = await contractObj.getUserByAddress(userAddress);
    return {
      basicInfo: {
        firstName: user.basicInfo.firstName,
        lastName: user.basicInfo.lastName,
        email: user.basicInfo.email,
        homeAddress: user.basicInfo.homeAddress,
        dateOfBirth: user.basicInfo.dateOfBirth,
        phoneNumber: user.basicInfo.phoneNumber,
      },
      professionalInfo: {
        education: user.professionalInfo.education,
        workHistory: user.professionalInfo.workHistory,
        jobTitle: user.professionalInfo.jobTitle,
        info: user.professionalInfo.info,
        skills: user.professionalInfo.skills,
        imageURL: user.professionalInfo.imageURL,
      },
      socialLinks: {
        x: user.socialLinks.x,
        instagram: user.socialLinks.instagram,
        tiktok: user.socialLinks.tiktok,
        youtube: user.socialLinks.youtube,
        linkedin: user.socialLinks.linkedin,
      },
      visibility: {
        education: user.visibility.education,
        workHistory: user.visibility.workHistory,
        phoneNumber: user.visibility.phoneNumber,
        homeAddress: user.visibility.homeAddress,
        dateOfBirth: user.visibility.dateOfBirth,
      },
    };
  } catch (e) {
    console.error("Error in getUserByAddress:", e);
    return parseErrorMsg(e);
  }
}

export async function addJob(username, jobId) {
  try {
    const contractObj = await contract();
    const transactionResponse = await contractObj.addJob(username, jobId);
    return await transactionResponse.wait();
  } catch (e) {
    console.error("Error in addJob:", e);
    return parseErrorMsg(e);
  }
}

export async function getJobs(username) {
  try {
    const contractObj = await contract();
    const jobIds = await contractObj.getJobs(username);
    return jobIds.map((jobId) => jobId.toString());
  } catch (e) {
    console.error("Error in getJobs:", e);
    return parseErrorMsg(e);
  }
}

export async function setVisibility(
  username,
  education,
  workHistory,
  phoneNumber,
  homeAddress,
  dateOfBirth
) {
  try {
    const contractObj = await contract();
    const transactionResponse = await contractObj.setVisibility(
      username,
      education,
      workHistory,
      phoneNumber,
      homeAddress,
      dateOfBirth
    );
    return await transactionResponse.wait();
  } catch (e) {
    console.error("Error in setVisibility:", e);
    return parseErrorMsg(e);
  }
}

export async function getVisibility(username) {
  try {
    const contractObj = await contract();
    const visibility = await contractObj.getVisibility(username);
    return {
      education: visibility.education,
      workHistory: visibility.workHistory,
      phoneNumber: visibility.phoneNumber,
      homeAddress: visibility.homeAddress,
      dateOfBirth: visibility.dateOfBirth,
    };
  } catch (e) {
    console.error("Error in getVisibility:", e);
    return parseErrorMsg(e);
  }
}
