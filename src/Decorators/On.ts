import {
  MetadataStorage,
  DiscordEvent
} from "..";

export function On(event: DiscordEvent) {
  return (target: Object, key: string, descriptor?: PropertyDescriptor): void => {
    MetadataStorage.Instance.AddOn({
      class: target.constructor,
      key,
      params: {
        from: target.constructor,
        guards: [],
        event,
        once: false,
        method: descriptor.value,
        originalParams: {}
      }
    });
  };
}
