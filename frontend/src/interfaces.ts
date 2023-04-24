interface msgInput {
  message: string;
}

interface chatTypes {
  _id: number;
  username: string;
  receiverId: number | null;
  chatFriend: friend | undefined | null;
  setSocket: any
}

interface messageData {
  userId: number;
  time: Date;
  message: string;
  receiverId: number | null;
}
interface sendMessage {
  message: string;
  time: Date;
  userId: number;
  receiverId: number | null;
}

interface user {
  email: string;
  password: string;
}

interface newUser {
  name: string;
  email: string;
  password: string;
}
interface searchedUser {
  id: number;
  name: string;
}
interface userId {
  mainUserId: number;
}

interface friend {
  id: number;
  friendsId: number;
  userId: number;
  isSentMessage: boolean
  friendsName: string;
}
interface friendProps {
  friends: any;
}
interface FriendViewProps {
  data: friend;
}

export type {
  msgInput,
  chatTypes,
  messageData,
  user,
  newUser,
  searchedUser,
  userId,
  friend,
  friendProps,
  FriendViewProps,
  sendMessage,
};
