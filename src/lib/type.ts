export type message = {
  ChannelId: string;
  ServerId: string;
  Content: string;
  Type: string;
  SenderId: string;
};

export type channels = {
  ServerId: string;
  ChannelId: string;
};
