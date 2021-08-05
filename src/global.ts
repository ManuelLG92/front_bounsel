import { ref } from "vue";
const isActive = ref(false);
const userId = ref(0);


function getIsActive(): boolean {
  return isActive.value;
}

function setIsActive(status: boolean) {
  isActive.value = status;
  status ? setUserId(Math.floor(Math.random() * 10) + 1) : setUserId(0);
}

function getUserId(): number {
  return userId.value;
}

function setUserId(userIdParam: number) {
  userId.value = userIdParam;
}

export default {
  getIsActive,
  setIsActive,
  getUserId,
  setUserId,
}