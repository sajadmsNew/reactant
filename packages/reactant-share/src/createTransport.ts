import { BroadcastChannel } from 'broadcast-channel';
import { createTransport } from 'data-transport';

export const createBroadcastTransport = (name: string) => {
  const broadcastChannel = new BroadcastChannel(
    `reactant-shared-app-channel:${name}`
  );
  const transport = createTransport('Base', {
    listener: (callback) => {
      broadcastChannel.onmessage = (data) => {
        callback(data);
      };
    },
    sender: (message) => broadcastChannel.postMessage(message),
    prefix: `reactant-shared-app:${name}`,
  });
  return transport;
};
